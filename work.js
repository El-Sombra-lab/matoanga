(function () {
  var scroll = new LocomotiveScroll({
    el: document.querySelector('.hero'),
    smooth: true,
    direction: 'horizontal',
    lerp: 0.1,
    gestureDirection: 'both'
  });
})();