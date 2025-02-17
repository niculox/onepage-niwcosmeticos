
//import js animation logo
TweenMax.from(".rollFromBottom", 1, {y:"100%", autoAlpha:0, rotationX:"-180", perspective:600, ease: Power2.easeOut});

pushRelease = new TimelineMax();
pushRelease
  .to(".pushRelease", 0.18, {scale: .5, ease: Power1.easeOut})
  .to(".pushRelease", 0.7, {scale: 1, ease: Sine.easeOut});