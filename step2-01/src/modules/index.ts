import { namedConst, namedFn, namedObj, namedConstBracket, namedConst as c } from './named';
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

import DefaultClass from './default';

console.log(new DefaultClass().hello);
