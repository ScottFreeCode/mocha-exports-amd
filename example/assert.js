define(function() { return function assert(value) {
  if (!value) { throw new Error("Assertion failed!") }
}})
