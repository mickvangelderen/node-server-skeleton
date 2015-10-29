var format = require('util').format;
var ok = require('assert').ok;
var expected = process.argv[2].split('.');

process.versions.node.split('.').forEach(function(v, i, actual){
  switch(i){

    //Major.
    case 0: return ok(expected[0] === v, format(
      'Expected Node major version to be %s. Got %s.', expected[0], v
    ));

    //Monor.
    case 1: return ok(expected[1] <= v, format(
      'Expected Node minor version to be at least %s. Got %s.', expected[1], v
    ));

    //Patch.
    case 2: return ok(expected[1] < actual[1] || expected[2] <= v, format(
      'Expected Node to be patched to at least %s (up from %s).', expected[2], v
    ));

    //Whoops?
    default: throw new Error('Failed to parse Node version');

  }
});
