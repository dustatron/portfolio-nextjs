// Get the top position of an element in the document
const getTop = function (element, start) {
  // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
  if (element.nodeName === 'HTML') return -start;
  return element.getBoundingClientRect().top + start;
};
// ease in out function thanks to:
// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
const easeInOutCubic = function (t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

// calculate the scroll position we should be in
// given the start and end point of the scroll
// the time elapsed from the beginning of the scroll
// and the total duration of the scroll (default 500ms)
const position = function (start, end, elapsed, duration) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
  // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
};

// we use requestAnimationFrame to be called by the browser before every repaint
// if the first argument is an element then scroll to the top of this element
// if the first argument is numeric then scroll to this location
// if the callback exist, it is called when the scrolling is finished
// if context is set then scroll that element, else scroll window
const smoothScroll = function (el, duration, callback, context) {
  duration = duration || 1200;
  context = context || window;
  const start = context.scrollTop || window.pageYOffset;
  let end;
  if (typeof el === 'number') {
    end = parseInt(el) - 60;
  } else {
    end = getTop(el, start) - 60;
  }

  const clock = Date.now();
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (fn) {
      window.setTimeout(fn, 15);
    };

  const step = function () {
    const elapsed = Date.now() - clock;
    if (context !== window) {
      context.scrollTop = position(start, end, elapsed, duration);
    } else {
      window.scroll(0, position(start, end, elapsed, duration));
    }

    if (elapsed > duration) {
      if (typeof callback === 'function') {
        callback(el);
      }
    } else {
      requestAnimationFrame(step);
    }
  };
  step();
};
export default (url) => {
  return new Promise(function (resolve, reject) {
    const pattern = /^(\/#.+)|(.+(\/#.+))$/;
    if (pattern.test(url)) {
      const hash = pattern
        .exec(url)
        .filter((item) => item)
        .pop();
      const id = hash.replace(/\/?#/, '');
      const el = document.getElementById(id);
      if (el) {
        smoothScroll(el, 900, resolve);
        return;
      }
    }
    reject(new Error('Error: hash in URL is invalid or element not found!'));
  });
};
