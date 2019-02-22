// These are named imports from a file relative to this file
import { namedConst, namedFn, namedObj, namedConstBracket } from './named';

// We can even apply an alias to the named constant
import { namedConst as c } from './named';

// These are the same instances of the named imports, but gets imported all at the same time under a single object
import * as named from './named';

// Print out the exports
console.log(namedConst);
console.log(c);
console.log(namedFn());
console.log(namedObj);
console.log(namedConstBracket);

// Print out exports through module level import
console.log(named.namedConst);
console.log(named.namedFn());
console.log(named.namedObj);
console.log(named.namedConstBracket);

// Default import can be named anything we want as the consumer
import DefaultClass from './default';
import Foo from './default';

console.log(new DefaultClass().hello);
console.log(new Foo().hello);
