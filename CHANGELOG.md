# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This changelog is inspired by [Keep A Changelog](http://keepachangelog.com/).

## [Unreleased][]
### Fixed
- Stop leaking globalMochaAvailable function in non-strict mode.
- `[examples]` Check `define.amd` and not just existence of `define` (both example/test code and README).
- `[metadata]` Git ignore all .tmp files.

### Added
- `[documentation]` this change log

### Changed
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

[Unreleased]: https://github.com/scottfreecode/mocha-exports-amd/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/scottfreecode/mocha-exports-amd/tree/v1.0.0
