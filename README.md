# mochaExport

This is an AMD loader plugin for running [Mocha](https://github.com/mochajs/mocha) tests using the module exports interface in the browser.

Mocha's exports interface does not work in the browser directly in its raw Node.js module form due to the design of the CommonJS module system Node.js builds upon. However, this plugin plus an AMD loader (such as [RequireJS](http://requirejs.org/), although there are others) makes it fairly easy to write tests using the exports interface that will run in the browser instead of or in addition to Node.js. Thanks to the design of AMD modules, no additional tooling, conversion or bundling steps nor even a server is necessary (unless the tests themselves require a server for something such as XMLHttpRequests). Just write your test modules as compatible with the AMD format (it only takes one or two extra lines per module to set this up), and write a test page that calls on the AMD loader to get the tests through this plugin, and then you can simply open it from your filesystem the same as any other Mocha test interface!

## Usage

First off, write your exports-interface Mocha tests as [AMD modules](https://github.com/amdjs/amdjs-api); if you've already written them as CommonJS modules, wrap them using [the simplified CommonJS interface](http://requirejs.org/docs/commonjs.html#manualconversion).

Note: [RequireJS's site](http://requirejs.org/) has a lot of good info on this, but you should be able to use *any AMD loader that supports plugins.*

### in browser

Have your page (or the test-running module it loads) require the test modules prefixed with "mochaExport!" before running Mocha:
```js
require(["mochaExport!myTest1","mochaExport!myTest2"], function() { mocha.run() })

// or, if loading Mocha in AMD through shim config:
require(["mocha","mochaExport!myTest1","mochaExport!myTest2"], function(mocha) { mocha.run() })
```

The plugin automatically configures Mocha to use the exports interface so you don't have to. Feel free to add other configuration such as `mocha.checkLeaks(true)`.

The plugin will use Mocha through the global `mocha` object if it is already loaded. If it is not already loaded, the plugin will attempt to load `mocha` through AMD so that `mocha` is available for the plugin to use. If it attempts to load Mocha through AMD, it will prefer the object resolved as an AMD module (e.g. from shim config) if any, and fall back again on the global `mocha` object otherwise -- in other words, you can leave out the shim config if you prefer as long as your AMD loader is able to find Mocha in the first place... or you can just load Mocha synchronously (the same as when using without AMD) and it will already be available.

### compatibility with Node.js

You'll want to put a line of boilerplate before your test modules' `define` calls to conditionally create the `define` function for use in Node. Then you can run Mocha through the CLI using the "exports" interface as usual.

#### AMD style

```js
var define = typeof define === "function" && define.amd ? define : function define(deps, factory) { module.exports = factory.apply(undefined, deps.map(require)) }
```

#### simplified CommonJS wrapper style

```js
var define = typeof define === "function" && define.amd ? define : function define(factory) { factory(require, exports, module) }
```

### example

See [the example provided in the repository](example) for a more complete picture. Note that you can run the same tests from the example using Mocha's CLI from the base of this repository ([the repository's mocha.opts file](test/mocha.opts) configures it to find the example's tests and use the exports interface).

## ToDo
- Lint/hint/style-fix
- Consider making the example/test be omitted from npm use of this lib as a dependency.

## License

Copyright ScottFreeCode 2016

Licensed under the Academic Free License version 3.0
