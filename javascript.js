/**
 * * 🤓 WHAT IS JAVASCRIPT
 * 
 * 📚 https://developer.mozilla.org/en-US/docs/Web/JavaScript
 * 📚 https://dev.to/gsharma010/what-is-javascript--5b69
 * * JAVASCRIPT, DOM, WEB APIs, GLOBAL
 * 📚 https://dev.to/joshcarvel/properly-understanding-the-dom-2cg0
 * * THE BEST AND COMPLETE SOURCE OF JAVASCRIPT
 * 📚 https://javascript.info/
 */
 
/** 
 * * 🤓 HOW JAVASCRIPT WORKS
 * 
 * * event loop & call stack
 * 📚 https://felixgerschau.com/javascript-event-loop-call-stack/
 * * memory management
 * 📚 https://felixgerschau.com/javascript-memory-management/
 * * event loop
 * 📚 https://dev.to/kelvinkirima014/what-is-the-javascript-event-loop-588b
 * * visualized articles about JavaScript
 * 📚 https://dev.to/lydiahallie/series/3341
 * * execution context
 * 📚 https://dev.to/kpnigalye/how-javascript-really-works-1p0m
 * * global execution context & execution context stack
 * 📚 https://dev.to/thelogeshwaran/understanding-global-execution-context-and-execution-context-scope-2nc
 */


// * event loop & Promise vs setTimeout
// 📚 https://dmitripavlutin.com/javascript-promises-settimeout/

setTimeout(() => {
    console.log('setTimeout resolved last!');
}, 0);
Promise.resolve(1).then(function resolve() {
    console.log('Promise resolved before setTimeout!');
})


 