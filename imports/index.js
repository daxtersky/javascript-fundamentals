// * RUN with VS Code's "Live Server" extention and see results in browser's debugger

// ! https://ui.dev/esmodules/

import { moduleFunction, foo } from './utils.js'; // 1 way
// import * as utils from './utils.js'; // 2 way
import defaultExportedFunction from './utils2.js'; //

console.log('sxport...', moduleFunction());
console.log('sxport...', foo);

console.log('default export...', defaultExportedFunction());