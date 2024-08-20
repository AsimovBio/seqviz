/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * from: https://davidwalsh.name/javascript-debounce-function
 */
export default (func: Function, wait: number, immediate = true) => {
  let timeout: NodeJS.Timeout | null = null;
  return function (this: any, ...args: unknown[]) {
    const later = function (this: any) {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };

    const callNow = immediate && !timeout;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(this, args);
    }
  };
};