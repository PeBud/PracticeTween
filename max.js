var tl = new TimelineMax({
paused: true
});

tl.to('.panel', 1, {scaleY: 1, height: '100vh', ease: Circ.easeOut});
tl.to('#light', 1, {opacity: 1, y:0, delay: 1, ease: Back.easeOut.config(1.7)}, .5);
tl.to('p', 1, {opacity: 1, y: 20});
tl.to('.box', 3, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, "-=3.5");
tl.reversed(true);

document.getElementById('cta').addEventListener('click', function() {
tl.reversed(!tl.reversed());
if (tl.reversed())
tl.reverse();
else
  tl.play();
})

document.getElementById('pause').addEventListener('click', function() {
  if (tl.paused())
  tl.play();
  else {
    tl.pause();
    tl.paused(true);
  }
});
