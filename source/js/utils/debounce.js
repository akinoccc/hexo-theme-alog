export default function debounce(fn, delay, immediate = false) {
  let timer = null;
  let isInvoke = false;

  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);

    if (immediate && !isInvoke) {
      fn.apply(this, args);
      timer = null;
      isInvoke = true;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
        isInvoke = false;

      }, delay);
    }
  }

  // Cancel.
  _debounce.cancel = function () {
    clearTimeout(timer);
    isInvoke = false;
  }

  return _debounce;
}