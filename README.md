# mochaExport

[![Build Status](https://travis-ci.org/ScottFreeCode/mocha-exports-amd.svg?branch=master)](https://travis-ci.org/ScottFreeCode/mocha-exports-amd)

This is an AMD loader plugin for running [Mocha](https://github.com/mochajs/mocha) tests using the module exports interface in the browser.

Mocha's exports interface does not work in the browser directly in its raw Node.js module form due to the design of the CommonJS module system Node.js builds upon. However, this plugin plus an AMD loader (such as [RequireJS](http://requirejs.org/), although there are others) makes it fairly easy to write tests using the exports interface that will run in the browser instead of or in addition to Node.js. Thanks to the design of AMD modules, no additional tooling, conversion or bundling steps nor even a server is necessary (unless the tests themselves require a server for something such as XMLHttpRequests). Just write your test modules as compatible with the AMD format (it only takes one or two extra lines per module to set this up), and write a test page that calls on the AMD loader to get the tests through this plugin, and then you can simply open it from your filesystem the same as any other Mocha test interface!

## Installation

This package is available on `npm`. It should be installed as the same sort of dependency that Mocha is. I recommend local dev dependencies, since you may need to rely on a particular version of Mocha in, say, continuous integration.

```sh
npm i --save-dev mocha-exports-amd
```

## Usage

First off, write your exports-interface Mocha tests as [AMD modules](https://github.com/amdjs/amdjs-api); if you've already written them as CommonJS modules, wrap them using [the simplified CommonJS interface](http://requirejs.org/docs/commonjs.html#manualconversion).

Note: [RequireJS's site](http://requirejs.org/) has a lot of good info on this, but you should be able to use *any AMD loader that supports plugins.*

### in browser

Have your page (or the test-running module it -- or a browser test harness such as Karma -- loads) require the test modules prefixed with "mochaExport!" before running Mocha:
```js
require(["mochaExport!myTest1","mochaExport!myTest2"], function() { mocha.run() })

// or, if loading Mocha in AMD through shim config:
require(["mocha","mochaExport!myTest1","mochaExport!myTest2"], function(mocha) { mocha.run() })
```

The plugin automatically configures Mocha to use the exports interface so you don't have to. Feel free to add other configuration such as `mocha.checkLeaks(true)`.

The plugin will use Mocha through the global `mocha` object if it is already loaded. If it is not already loaded, the plugin will attempt to load `mocha` through AMD so that `mocha` is available for the plugin to use. If it attempts to load Mocha through AMD, it will prefer the object resolved as an AMD module (e.g. from shim config) if any, and fall back again on the global `mocha` object otherwise -- in other words, you can leave out the shim config if you prefer as long as your AMD loader is able to find Mocha in the first place... or you can just load Mocha synchronously (the same as when using without AMD) and it will already be available.

#### location configuration

Note that, as with any AMD module, you may have to point your AMD loader to the package installation locations (e.g. the `node_modules` folders if you've installed through `npm`). This can be done with [`packages` config](http://www.requirejs.org/docs/api.html#packages). Normally it would also be possible to use something such as a combination of [adapt-pkg-main](https://www.npmjs.org/package/adapt-pkg-main) and setting [`baseUrl`](http://www.requirejs.org/docs/api.html#config-baseUrl) to `node_modules` (and using [`paths`](http://www.requirejs.org/docs/api.html#config-paths) to refer your code back to the local application), but for some reason I have not gotten relative paths to the test files to work with the plugin (RequireJS seems to turn them into non-relative paths before they even hit the plugin's code, which makes it hard to get around having `baseUrl` set to anything but the test directory). Feel free to work off the code in the [example](example/runTests.js). Experiment and see what works for you.

### compatibility with Node.js

Unless your code is only meant to be used in-browser and you're comfortable relying on browser testing only, you'll still need to keep the test files compatible with Mocha's regular exports interface so you can run it on the commandline. Fortunately, it's easier to get AMD modules working in Node than Node modules in the browser.

#### Shimming `define`

One way to handle this is to write the test files with a ["UMD"](https://github.com/umdjs/umd) wrapper, but a more lightweight alternative is to shim the `define` function:

######  AMD style

```js
var define = typeof define === "function" && define.amd ? define : function define(deps, factory) { module.exports = factory.apply(undefined, deps.map(require)) }
```

###### simplified CommonJS wrapper style

```js
var define = typeof define === "function" && define.amd ? define : function define(factory) { factory(require, exports, module) }
```

###### both?

If you have a mix of the AMD style and the CommonJS style or are using any of the more advanced AMD loader features, you may need to call upon an actual Node implementation of an AMD loader, such as [AMDefine](https://www.npmjs.com/package/amdefine):
```js
var define = typeof define === "function" && define.amd ? define : require("amdefine")(module, require)
```

##### Older Internet Explorer

If your tests need to work in Internet Explorer 8 or older, and you're using one of the two simple shims above, then you'll need to use just `function` instead of `function define`. Apparently older versions of IE hoist named functions even when they're in an expression rather than a statement? This isn't really likely to affect anything in practice -- basically, the `define` function won't be named if for some reason your code is looking at that.

#### outside the test files

If you don't want to put the shims at the top of every test file, or if you need to support AMD modules in your actual code as well as the tests, you may need to `--require` an AMD loader such as [`--require amdefine/intercept`](https://github.com/jrburke/amdefine/#amdefineintercept).

### example

See [the example provided in the repository](example) for a more complete picture. Note that, with the dev dependencies installed, you can run the same tests from the example using Mocha's CLI and Karma (automated browser testing) from the base of this repository by calling `npm run example` or (to skip Karma) `npm run example-cli` ([the repository's mocha.opts file](test/mocha.opts) configures it to use the exports interface and the npm scripts specify the different types of examples' tests) -- for the Karma portion of the example, if you don't want to use Firefox, you'll need to install your preferred browser launcher(s) and run `npm run example -- -- --browsers <your browser(s) here>` or `npm run example-browser -- --browsers <your browser(s) here>`.

## ToDo
- Lint/hint/style-fix?
- Consider making the example/test be omitted from production use of this lib as an npm dependency.
- Unit testing? (Are there standard RequireJS loader plugin tests we can call upon?)
- Figure out whether this is needed, and if so whether it works, with various options for browser-bundling CommonJS/Node modules (in the actual code for the project being tested).
- Test configuration and finding paths with tests in subdirectories.
- Test configuration and finding paths with tests alongside source.

## License

Copyright ScottFreeCode 2016

[Licensed under the Academic Free License version 3.0](LICENSE.txt)
