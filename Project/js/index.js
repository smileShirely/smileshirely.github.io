(function(){

  'use strict';

  var flipsnap = Flipsnap('.flipsnap'),
      parent = flipsnap.element,
      first = parent.querySelector(':first-child'),
      last = parent.querySelector(':last-child'),
      count, duration;

  // add elements
  parent.insertBefore(last.cloneNode(true), first);
  parent.appendChild(first.cloneNode(true));

  count = parent.querySelectorAll('*').length;
  duration = parseInt(flipsnap.transitionDuration, 10);

  // resize
  parent.style.width = (first.offsetWidth * count) + 'px';

  // refresh
  flipsnap.refresh();
  flipsnap.toNext(0);

  // auto scroll
  setInterval(function() {
    (!flipsnap.scrolling) && flipsnap.toNext();
  }, 5000);

  flipsnap.element.addEventListener('fspointmove', function(event) {
    // move to first item
    if (flipsnap.currentPoint === 0) {
      setTimeout(function() {
        flipsnap.moveToPoint(count - 2, 0);
      }, duration + 10);

      return;
    }

    // move to last item
    if (flipsnap.currentPoint === count - 1) {
      setTimeout(function() {
        flipsnap.moveToPoint(1, 0);
      }, duration + 10);

      return;
    }
  });

}());
