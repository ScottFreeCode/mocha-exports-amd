// Normally, you would pick a browser-compatible assertion library.
// For this example, the assertion is mostly demonstrating use of AMD
// dependencies; we can use a simplistic equivalent in the browser.
define(function() { return function assert(value) {
  if (!value) { throw new Error("Assertion failed!") }
}})
