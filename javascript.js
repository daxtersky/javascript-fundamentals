/**
 * * 🤓 WHAT IS JAVASCRIPT
 * 
 * 📚 https://dev.to/gsharma010/what-is-javascript--5b69
 * * JAVASCRIPT, DOM, WEB API
 * 📚 https://dev.to/joshcarvel/properly-understanding-the-dom-2cg0
 * * THE BEST COMPLEX SOURCE OF JAVASCRIPT
 * 📚 https://javascript.info/
 */
 
/** 
 * * 🤓 HOW JAVASCRIPT WORKS // TODO read below
 * 
 * * visualized articles about JavaScript
 * 📚 https://dev.to/lydiahallie/series/3341
 * * event loop & call stack
 * 📚 https://felixgerschau.com/javascript-event-loop-call-stack/ś
 * * memory management
 * 📚 https://felixgerschau.com/javascript-memory-management/
 * * event loop
 * 📚 https://dev.to/kelvinkirima014/what-is-the-javascript-event-loop-588b
 * * execution context
 * 📚 https://dev.to/kpnigalye/how-javascript-really-works-1p0m
 * * global execution context & execution context stack
 * 📚 https://dev.to/thelogeshwaran/understanding-global-execution-context-and-execution-context-scope-2nc
 */


// * event loop & promive vs setTimeout
// 📚 https://dmitripavlutin.com/javascript-promises-settimeout/

setTimeout(() => {
    console.log('setTimeout resolved last!');
}, 0);

Promise.resolve(1).then(function resolve() {
    console.log('Promise resolved before setTimeout!');
})


 