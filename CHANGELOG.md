# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][]
### Added
- `[examples]` Test with Karma.
- `[documentation]` Discuss full Node loaders (e.g. AMDefine).
- `[examples]` Test AMDefine.
- `[documentation]` Readme comments on installation.
- `[documentation]` Readme comments on package path configuration.
- `[metadata]` dev dependencies:
  - amdefine@1.0.1
  - karma@1.3.0
  - karma-mocha@1.2.0
  - karma-requirejs@1.1.0
  - karma-spec-reporter@0.0.26
  - karma-firefox-launcher@1.0.0

### Fixed
- `[documentation]` Mention old IE bug and workaround.
- `[examples]` Add examples of old IE bug workaround.
- `[examples]` Comment the assert browser shim.
- `[documentation]` Clarify/update to-do list in readme.
- `[examples]` Use posixy path separator in test.

### Changed
- `[metadata]` Updated dev dependencies:
  - mocha@3.1.2
  - requirejs@2.3.2

## [1.1.0][] - 2016-05-28
### Fixed
- Stop leaking globalMochaAvailable function in non-strict mode.
- `[examples]` Check `define.amd` and not just existence of `define` (both example/test code and README).
- `[metadata]` Git ignore all .tmp files.

### Added
- `[metadata]` peer dependencies:
  - mocha@>=1.2.1
- `[documentation]` this change log
- `[metadata]` shrinkwrap for (dev) dependencies' dependencies

### Changed
- `[metadata]` Updated dev dependencies:
  - mocha@2.5.3
- `[examples]` names of test files; because I discovered I'm in the habit of typing "in{tab}" to get index.htm[l]

## [1.0.0][] - 2016-05-14 [Initial]
### Added
- loader plugin
- `[metadata]` license
- `[metadata]` packaging
- `[documentation]` readme
- `[examples]` AMD-style test
- `[examples]` CommonJS/Node.js-style test
- `[examples]` webpage to run tests
- `[examples]` Mocha configuration to run tests from the commandline
- `[metadata]` dev dependencies:
  - mocha@2.4.5
  - requirejs@2.2.0
  - requirejs-domready@2.0.3

[Unreleased]: https://github.com/scottfreecode/mocha-exports-amd/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/scottfreecode/mocha-exports-amd/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/scottfreecode/mocha-exports-amd/tree/v1.0.0
