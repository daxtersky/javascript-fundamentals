/**
 * * MODULE
 * 📺 Przeprogramowani https://www.youtube.com/watch?v=5upaxzBNbmQ&t=4s
 * 📚 export default, https://ui.dev/esmodules
 * 📚 Modules over Classes https://medium.com/giant-machines/stop-using-javascript-classes-d0b6890ef097
 * 📚 https://ui.dev/esmodules
 * 📚 https://dmitripavlutin.com/ecmascript-modules-nodejs/
 * 🏃‍♂️ run with VS Code's "Live Server" extention and see results in browser's debugger
 */

import defaultExportedFunction from './utils2.js';
import { functionFromModule, variableFromModule } from './utils.js'; // 1 way
// import * as utils from './utils.js'; // 2 way

// 1 way
console.log('export?...', functionFromModule());
console.log('export?...', variableFromModule);
// 2 way
// console.log('export?...', utils.functionFromModule());
// console.log('export?...', utils.variableFromModule);

console.log('export?...', defaultExportedFunction());