export default function(func, wait) {
  let isWaiting = false;

  return function() {
    if (!isWaiting) {
      isWaiting = true;

      setTimeout(function() {
        func();
        isWaiting = false;
      }, wait);
    }
  };
}
