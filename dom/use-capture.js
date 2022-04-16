/**
 * DOM - event bubbling, event capturing, useCapture
 * 📚 https://blog.logrocket.com/8-dom-features-you-didnt-know-existed-ec2a0a28fd89/
 */

window.addEventListener('DOMContentLoaded', () => {
  const grandParentDefault = document.getElementsByClassName('element--default element--grandparent')[0];
  const parentDefault = document.getElementsByClassName('element--default element--parent')[0];
  const childDefault = document.getElementsByClassName('element--default element--child')[0];

  const grandParentFalse = document.getElementsByClassName('element--false element--grandparent')[0];
  const parentFalse = document.getElementsByClassName('element--false element--parent')[0];
  const childFalse = document.getElementsByClassName('element--false element--child')[0];

  const grandParentTrue = document.getElementsByClassName('element--true element--grandparent')[0];
  const parentTrue = document.getElementsByClassName('element--true element--parent')[0];
  const childTrue = document.getElementsByClassName('element--true element--child')[0];

  const grandParentOnceTrue = document.getElementsByClassName('element--once-true element--grandparent')[0];
  const parentOnceTrue = document.getElementsByClassName('element--once-true element--parent')[0];
  const childOnceTrue = document.getElementsByClassName('element--once-true element--child')[0];

  const grandParentPassiveTrue = document.getElementsByClassName('element--passive-true element--grandparent')[0];
  const parentPassiveTrue = document.getElementsByClassName('element--passive-true element--parent')[0];
  const childPassiveTrue = document.getElementsByClassName('element--passive-true element--child')[0];

  const buttonScrollTop = document.querySelector('.scroll-top');

  grandParentDefault.addEventListener('click', () => showResult(1)); // * event bubbling
  parentDefault.addEventListener('click', () => showResult(2));
  childDefault.addEventListener('click', () => showResult(3));

  grandParentFalse.addEventListener('click', () => showResult(1), false); // * event bubbling
  parentFalse.addEventListener('click', () => showResult(2), false);
  childFalse.addEventListener('click', () => showResult(3), false);

  grandParentTrue.addEventListener('click', () => showResult(1), true); // * event capturing!
  parentTrue.addEventListener('click', () => showResult(2), true);
  childTrue.addEventListener('click', () => showResult(3), true);

  grandParentOnceTrue.addEventListener('click', () => showResult(1), { once: true }); // * click event only once!
  parentOnceTrue.addEventListener('click', () => showResult(2), { once: true });
  childOnceTrue.addEventListener('click', () => showResult(3), { once: true });

  grandParentPassiveTrue.addEventListener('click', () => showResult(1), { passive: true }); // * preventDefault never called! Good for buttons..
  parentPassiveTrue.addEventListener('click', () => showResult(2), { passive: true });
  childPassiveTrue.addEventListener('click', () => showResult(3), { passive: true });

  buttonScrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

});

const showResult = (eventType) => {
  switch (eventType) {
    case 1: return console.log('Grand parent')
    case 2: return console.log('Parent')
    case 3: return console.log('Child');
    default: return console.log('error!');
  }
}