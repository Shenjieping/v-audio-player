export function getDom (el) {
  if (typeof el === 'string') {
    el = document.querySelector(el);
  }

  var isDOM = typeof HTMLElement === 'object'
    ? function (el) {
        return el instanceof HTMLElement;
      }
    : function (el) {
        return el && typeof el === 'object' && el.nodeType === 1 && typeof el.nodeName === 'string';
      };
  if (isDOM(el)) {
    return el;
  } else {
    throw TypeError('el is not define');
  }
}