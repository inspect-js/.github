import fs from 'fs';
import path from 'path';
import { graphql } from '@octokit/graphql';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;

const org = 'inspect-js';

async function getResponse(cursor = '') {
	// https://stackoverflow.com/a/51412084/632724
	return graphql(
		`
		{
			search(query: "org:${org}", type: REPOSITORY, first: 100 ${cursor ? `after:${JSON.stringify(cursor)}` : ''}) {
				pageInfo {
					hasNextPage
					endCursor
				}
				repositoryCount
				edges {
					node {
						... on Repository {
							nameWithOwner,
							isPrivate,
							object(expression: "HEAD:package.json") {
								... on Blob {
									text
								}
							}
						}
					}
				}
			}
		}
		`,
		{
			headers: {
				authorization: `token ${token}`
			},
		},
	);
}

async function getPackageData(repo) {
	// get package.json from repo
	return {
		name,
		description,
	}
}

const edges = [];
let hasNextPage = true;
let cursor = '';
while (hasNextPage) {
	const response = await getResponse(cursor);
	({ hasNextPage, endCursor: cursor } = response.search.pageInfo);
	edges.push(...response.search.edges);
}

const repos = edges.map(x => ({
	repo: x.node.nameWithOwner.slice(org.length + 1),
	pkg: x.node.object ? JSON.parse(x.node.object.text) : undefined,
}))
.filter(({ repo: x }) => !x.startsWith('.'))
.sort();

const pkgs = {
	predicates: [],
	comparisons: [],
	environment: [],
	describe: [],
	unknown: [],
};
function sortRepo(a, b) {
	return a.repo.localeCompare(b.repo);
}
repos.forEach((x) => {
	if (x.repo.endsWith('-equal') || x.repo.endsWith('-is')) {
		pkgs.comparisons.push(x);
		pkgs.comparisons.sort(sortRepo);
	} else if (x.repo.startsWith('has-') || x.repo.startsWith('available-') || x.repo.includes('-have-') || x.repo.includes('supports-') || x.repo.endsWith('-info')) {
		pkgs.environment.push(x);
		pkgs.environment.sort(sortRepo);
	} else if (x.repo.startsWith('which-') || x.repo.startsWith('get-') || x.repo.includes('inspect') || x.repo.endsWith('-length')) {
		pkgs.describe.push(x);
		pkgs.describe.sort(sortRepo);
	} else if (x.repo.startsWith('is-') || x.repo.endsWith('defined')) {
		pkgs.predicates.push(x);
		pkgs.predicates.sort(sortRepo);
	} else {
		pkgs.unknown.push(x);
		pkgs.unknown.sort(sortRepo);
	}
});

console.log(pkgs);

if (pkgs.unknown.length > 0) {
	throw `unknown packages found!: ${pkgs.unknown.map(x => x.repo).join(', ')}`;
}
delete pkgs.unknown;

let readme = `# ${org}
This github and [npm](https://npmjs.com/~${org}) organization houses JavaScript projects that help you look at stuff.
`;

const meta = {
	predicates: {
		title: 'Predicates',
		description: 'Functions that ask a question and produce a yes or no answer (`true` or `false`).',
	},
	comparisons: {
		title: 'Comparisons',
		description: 'Packages that compare two things.',
	},
	environment: {
		title: 'Environment',
		description: 'Packages that tell you about the JS env.',
	},
	describe: {
		title: 'Describe',
		description: 'Packages that tell you about a specific JS value.',
	},
};

for (const [category, repos] of Object.entries(pkgs)) {
	readme += `
## ${meta[category].title}
<details>
<summary>${meta[category].description}</summary>
<br />

${repos.map(({ repo, pkg: { name, description } = {} }) => {
	return ` - ${name} - [![github][github]](https://github.com/${org}/${repo}) - [![npm][npm]](https://npmjs.com/${name}) - ${description}`;
}).join('\n')}

</details>

`;
}

readme += `

[github]: /profile/github-16.png
[npm]: /profile/npm-16.png`;

fs.writeFileSync(path.join(__dirname, 'README.md'), readme);
