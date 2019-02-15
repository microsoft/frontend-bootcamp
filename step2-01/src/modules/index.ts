import { namedConst, namedFn, namedObj } from './named';
import * as named from './named';

console.log(namedConst);
console.log(namedFn());
console.log(namedObj);

console.log(named.namedConst);
console.log(named.namedFn());
console.log(named.namedObj);

import DefaultClass from './default';

console.log(new DefaultClass().hello);
