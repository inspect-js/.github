# inspect-js
This github and [npm](https://npmjs.com/~inspect-js) organization houses JavaScript projects that help you look at stuff.

## Predicates
<details>
<summary>Functions that ask a question and produce a yes or no answer (`true` or `false`).</summary>
<br />

 - defined - [![github][github]](https://github.com/inspect-js/defined) - [![npm][npm]](https://npmjs.com/defined) - return the first argument that is `!== undefined`
 - is-accessor-descriptor - [![github][github]](https://github.com/inspect-js/is-accessor-descriptor) - [![npm][npm]](https://npmjs.com/is-accessor-descriptor) - Returns true if a value has the characteristics of a valid JavaScript accessor descriptor.
 - is-arguments - [![github][github]](https://github.com/inspect-js/is-arguments) - [![npm][npm]](https://npmjs.com/is-arguments) - Is this an arguments object? It's a harder question than you think.
 - is-array-buffer - [![github][github]](https://github.com/inspect-js/is-array-buffer) - [![npm][npm]](https://npmjs.com/is-array-buffer) - Is this value a JS ArrayBuffer?
 - is-arrow-function - [![github][github]](https://github.com/inspect-js/is-arrow-function) - [![npm][npm]](https://npmjs.com/is-arrow-function) - Determine if a function is an ES6 arrow function or not.
 - is-async-function - [![github][github]](https://github.com/inspect-js/is-async-function) - [![npm][npm]](https://npmjs.com/is-async-function) - Determine if a function is a native async function.
 - is-bigint - [![github][github]](https://github.com/inspect-js/is-bigint) - [![npm][npm]](https://npmjs.com/is-bigint) - Is this value an ES BigInt?
 - is-boolean-object - [![github][github]](https://github.com/inspect-js/is-boolean-object) - [![npm][npm]](https://npmjs.com/is-boolean-object) - Is this value a JS Boolean? This module works cross-realm/iframe, and despite ES6 @@toStringTag.
 - is-boxed-primitive - [![github][github]](https://github.com/inspect-js/is-boxed-primitive) - [![npm][npm]](https://npmjs.com/is-boxed-primitive) - Is this value a boxed primitive? Shim for node's util.isBoxedPrimitive.
 - is-callable - [![github][github]](https://github.com/inspect-js/is-callable) - [![npm][npm]](https://npmjs.com/is-callable) - Is this JS value callable? Works with Functions and GeneratorFunctions, despite ES6 @@toStringTag.
 - is-core-module - [![github][github]](https://github.com/inspect-js/is-core-module) - [![npm][npm]](https://npmjs.com/is-core-module) - Is this specifier a node.js core module?
 - is-data-descriptor - [![github][github]](https://github.com/inspect-js/is-data-descriptor) - [![npm][npm]](https://npmjs.com/is-data-descriptor) - Returns true if a value has the characteristics of a valid JavaScript data descriptor.
 - is-date-object - [![github][github]](https://github.com/inspect-js/is-date-object) - [![npm][npm]](https://npmjs.com/is-date-object) - Is this value a JS Date object? This module works cross-realm/iframe, and despite ES6 @@toStringTag.
 - is-descriptor - [![github][github]](https://github.com/inspect-js/is-descriptor) - [![npm][npm]](https://npmjs.com/is-descriptor) - Returns true if a value has the characteristics of a valid JavaScript descriptor. Works for data descriptors and accessor descriptors.
 - is-finalizationregistry - [![github][github]](https://github.com/inspect-js/is-finalizationregistry) - [![npm][npm]](https://npmjs.com/is-finalizationregistry) - Is this value a JS FinalizationRegistry? This module works cross-realm/iframe, and despite ES6 @@toStringTag.
 - is-generator-function - [![github][github]](https://github.com/inspect-js/is-generator-function) - [![npm][npm]](https://npmjs.com/is-generator-function) - Determine if a function is a native generator function.
 - is-map - [![github][github]](https://github.com/inspect-js/is-map) - [![npm][npm]](https://npmjs.com/is-map) - Is this value a JS Map? This module works cross-realm/iframe, and despite ES6 @@toStringTag.
 - is-negative-zero - [![github][github]](https://github.com/inspect-js/is-negative-zero) - [![npm][npm]](https://npmjs.com/is-negative-zero) - Is this value negative zero? === will lie to you
 - is-number-object - [![github][github]](https://github.com/inspect-js/is-number-object) - [![npm][npm]](https://npmjs.com/is-number-object) - Is this value a JS Number object? This module works cross-realm/iframe, and despite ES6 @@toStringTag.
 - is-object - [![github][github]](https://github.com/inspect-js/is-object) - [![npm][npm]](https://npmjs.com/is-object) - Checks whether a value is an object
 - is-package-root - [![github][github]](https://github.com/inspect-js/is-package-root) - [![npm][npm]](https://npmjs.com/is-package-root) - Is this directory path the root of a package?
 - is-regex - [![github][github]](https://github.com/inspect-js/is-regex) - [![npm][npm]](https://npmjs.com/is-regex) - Is this value a JS regex? Works cross-realm/iframe, and despite ES6 @@toStringTag
 - is-set - [![github][github]](https://github.com/inspect-js/is-set) - [![npm][npm]](https://npmjs.com/is-set) - Is this value a JS Set? This module works cross-realm/iframe, and despite ES6 @@toStringTag.
 - is-shared-array-buffer - [![github][github]](https://github.com/inspect-js/is-shared-array-buffer) - [![npm][npm]](https://npmjs.com/is-shared-array-buffer) - Is this value a JS SharedArrayBuffer?
 - is-string - [![github][github]](https://github.com/inspect-js/is-string) - [![npm][npm]](https://npmjs.com/is-string) - Is this value a JS String object or primitive? This module works cross-realm/iframe, and despite ES6 @@toStringTag.
 - is-symbol - [![github][github]](https://github.com/inspect-js/is-symbol) - [![npm][npm]](https://npmjs.com/is-symbol) - Determine if a value is an ES6 Symbol or not.
 - is-typed-array - [![github][github]](https://github.com/inspect-js/is-typed-array) - [![npm][npm]](https://npmjs.com/is-typed-array) - Is this value a JS Typed Array? This module works cross-realm/iframe, does not depend on `instanceof` or mutable properties, and despite ES6 Symbol.toStringTag.
 - is-weakmap - [![github][github]](https://github.com/inspect-js/is-weakmap) - [![npm][npm]](https://npmjs.com/is-weakmap) - Is this value a JS WeakMap? This module works cross-realm/iframe, and despite ES6 @@toStringTag.
 - is-weakref - [![github][github]](https://github.com/inspect-js/is-weakref) - [![npm][npm]](https://npmjs.com/is-weakref) - Is this value a JS WeakRef? This module works cross-realm/iframe, and despite ES6 @@toStringTag.
 - is-weakset - [![github][github]](https://github.com/inspect-js/is-weakset) - [![npm][npm]](https://npmjs.com/is-weakset) - Is this value a JS WeakSet? This module works cross-realm/iframe, and despite ES6 @@toStringTag.
 - is-well-known-symbol - [![github][github]](https://github.com/inspect-js/is-well-known-symbol) - [![npm][npm]](https://npmjs.com/is-well-known-symbol) - Is this value a well-known Symbol?

</details>


## Comparisons
<details>
<summary>Packages that compare two things.</summary>
<br />

 - buffer-equal - [![github][github]](https://github.com/inspect-js/buffer-equal) - [![npm][npm]](https://npmjs.com/buffer-equal) - return whether two buffers are equal
 - deep-equal-json - [![github][github]](https://github.com/inspect-js/deep-equal-json) - [![npm][npm]](https://npmjs.com/deep-equal-json) - `deep-equal`, but only for JSON-supported values.
 - is-equal - [![github][github]](https://github.com/inspect-js/is-equal) - [![npm][npm]](https://npmjs.com/is-equal) - Are these two values conceptually equal?
 - deep-equal - [![github][github]](https://github.com/inspect-js/node-deep-equal) - [![npm][npm]](https://npmjs.com/deep-equal) - node's assert.deepEqual algorithm

</details>


## Environment
<details>
<summary>Packages that tell you about the JS env.</summary>
<br />

 - available-regexp-flags - [![github][github]](https://github.com/inspect-js/available-regexp-flags) - [![npm][npm]](https://npmjs.com/available-regexp-flags) - Which regular expression flags does the current environment support?
 - available-typed-arrays - [![github][github]](https://github.com/inspect-js/available-typed-arrays) - [![npm][npm]](https://npmjs.com/available-typed-arrays) - Returns an array of Typed Array names that are available in the current environment
 - functions-have-names - [![github][github]](https://github.com/inspect-js/functions-have-names) - [![npm][npm]](https://npmjs.com/functions-have-names) - Does this JS environment support the `name` property on functions?
 - has-bigints - [![github][github]](https://github.com/inspect-js/has-bigints) - [![npm][npm]](https://npmjs.com/has-bigints) - Determine if the JS environment has BigInt support.
 - has-dynamic-import - [![github][github]](https://github.com/inspect-js/has-dynamic-import) - [![npm][npm]](https://npmjs.com/has-dynamic-import) - Does the current environment have `import()` support?
 - has-object-spread - [![github][github]](https://github.com/inspect-js/has-object-spread) - [![npm][npm]](https://npmjs.com/has-object-spread) - check if the environment supports { ...a } spread syntax
 - has-optional-chaining - [![github][github]](https://github.com/inspect-js/has-optional-chaining) - [![npm][npm]](https://npmjs.com/has-optional-chaining) - Determine if the JS environment has optional chaining support
 - has-override-mistake - [![github][github]](https://github.com/inspect-js/has-override-mistake) - [![npm][npm]](https://npmjs.com/has-override-mistake) - Determine whether the environment has the so-called "override mistake" - [[Set]]ing a property whose ancestor is nonwritable throws.
 - has-package-exports - [![github][github]](https://github.com/inspect-js/has-package-exports) - [![npm][npm]](https://npmjs.com/has-package-exports) - Does the current node version have support for the "exports" field in package.json?
 - has-package-imports - [![github][github]](https://github.com/inspect-js/has-package-imports) - [![npm][npm]](https://npmjs.com/has-package-imports) - Does the current node version have support for the "imports" field in package.json?
 - has-package-self-reference - [![github][github]](https://github.com/inspect-js/has-package-self-reference) - [![npm][npm]](https://npmjs.com/has-package-self-reference) - Does the current node version have support for requiring/importing its own name?
 - has-private-fields - [![github][github]](https://github.com/inspect-js/has-private-fields) - [![npm][npm]](https://npmjs.com/has-private-fields) - Determine if the JS environment has private fields (`class { #x; }`) support.
 - has-property-descriptors - [![github][github]](https://github.com/inspect-js/has-property-descriptors) - [![npm][npm]](https://npmjs.com/has-property-descriptors) - Does the environment have full property descriptor support? Handles IE 8's broken defineProperty/gOPD.
 - has-proto - [![github][github]](https://github.com/inspect-js/has-proto) - [![npm][npm]](https://npmjs.com/has-proto) - Does this environment have the ability to get the [[Prototype]] of an object on creation with `__proto__`?
 - has-strict-mode - [![github][github]](https://github.com/inspect-js/has-strict-mode) - [![npm][npm]](https://npmjs.com/has-strict-mode) - Does the current JS environment have strict mode? ES5+ should; but let's not assume.
 - has-symbols - [![github][github]](https://github.com/inspect-js/has-symbols) - [![npm][npm]](https://npmjs.com/has-symbols) - Determine if the JS environment has Symbol support. Supports spec, or shams.
 - has-template-literals - [![github][github]](https://github.com/inspect-js/has-template-literals) - [![npm][npm]](https://npmjs.com/has-template-literals) - Determine if the JS environment has template literal support.
 - has-tostringtag - [![github][github]](https://github.com/inspect-js/has-tostringtag) - [![npm][npm]](https://npmjs.com/has-tostringtag) - Determine if the JS environment has `Symbol.toStringTag` support. Supports spec, or shams.
 - has-typed-arrays - [![github][github]](https://github.com/inspect-js/has-typed-arrays) - [![npm][npm]](https://npmjs.com/has-typed-arrays) - Does this environment have JS Typed Arrays?
 - node-exports-info - [![github][github]](https://github.com/inspect-js/node-exports-info) - [![npm][npm]](https://npmjs.com/node-exports-info) - Info about node `exports` field support: version ranges, categories, etc.
 - supports-preserve-symlinks-flag - [![github][github]](https://github.com/inspect-js/node-supports-preserve-symlinks-flag) - [![npm][npm]](https://npmjs.com/supports-preserve-symlinks-flag) - Determine if the current node version supports the `--preserve-symlinks` flag.

</details>


## Describe
<details>
<summary>Packages that tell you about a specific JS value.</summary>
<br />

 - get-symbol-description - [![github][github]](https://github.com/inspect-js/get-symbol-description) - [![npm][npm]](https://npmjs.com/get-symbol-description) - Gets the description of a Symbol. Handles `Symbol()` vs `Symbol('')` properly when possible.
 - object-inspect - [![github][github]](https://github.com/inspect-js/object-inspect) - [![npm][npm]](https://npmjs.com/object-inspect) - string representations of objects in node and the browser
 - typed-array-byte-length - [![github][github]](https://github.com/inspect-js/typed-array-byte-length) - [![npm][npm]](https://npmjs.com/typed-array-byte-length) - Robustly get the byte length of a Typed Array
 - typed-array-byte-offset - [![github][github]](https://github.com/inspect-js/typed-array-byte-offset) - [![npm][npm]](https://npmjs.com/typed-array-byte-offset) - Robustly get the byte offset of a Typed Array
 - typed-array-length - [![github][github]](https://github.com/inspect-js/typed-array-length) - [![npm][npm]](https://npmjs.com/typed-array-length) - Robustly get the length of a Typed Array
 - which-boxed-primitive - [![github][github]](https://github.com/inspect-js/which-boxed-primitive) - [![npm][npm]](https://npmjs.com/which-boxed-primitive) - Which kind of boxed JS primitive is this?
 - which-builtin-type - [![github][github]](https://github.com/inspect-js/which-builtin-type) - [![npm][npm]](https://npmjs.com/which-builtin-type) - What is the type of this builtin JS value?
 - which-typed-array - [![github][github]](https://github.com/inspect-js/which-typed-array) - [![npm][npm]](https://npmjs.com/which-typed-array) - Which kind of Typed Array is this JavaScript value? Works cross-realm, without `instanceof`, and despite Symbol.toStringTag.

</details>



[github]: /profile/github-16.png
[npm]: /profile/npm-16.png