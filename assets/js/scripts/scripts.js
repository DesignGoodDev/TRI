// Init controller
var controller = new ScrollMagic.Controller();

var blockTween2 = new TweenMax.to('#section-2-text', 3.5, {
  paddingLeft: '15%'
});
var blockTween3 = new TweenMax.to('#section-3-text', 3.5, {
  paddingLeft: '15%'
});
var blockTween4 = new TweenMax.to('#section-4-text', 3.5, {
  paddingLeft: '15%'
});
var blockTween5 = new TweenMax.to('#section-5-text', 3.5, {
  paddingLeft: '15%'
});


var blockTween2img = new TweenMax.to('#section-2-img', 3.5, {
  top: '50%',
  width: "298px"
});
var blockTween3img = new TweenMax.to('#section-3-img', 3.5, {
  right: "-60%",
  width: "244px"
});
var blockTween4img = new TweenMax.to('#section-4-img', 3.5, {
  top: '50%',
  width: "225px"
});
var blockTween5img = new TweenMax.to('#section-5-img', 3.5, {
  right: '-60%',
  width: "253px"
});


// build scenes F O R  P A R A L L A X
new ScrollMagic.Scene({
  triggerElement: "#section-2",
  triggerHook: "onEnter",
  duration: "200%"
})
.setTween("#section-2 > #section-2-inner", {y: "20%", ease: Linear.easeNone})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section-3",
  triggerHook: "onEnter",
  duration: "200%"
})
.setTween("#section-3 > #section-3-inner", {y: "20%", ease: Linear.easeNone})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section-4",
  triggerHook: "onEnter",
  duration: "200%"
})
.setTween("#section-4 > #section-4-inner", {y: "20%", ease: Linear.easeNone})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section-5",
  triggerHook: "onEnter",
  duration: "150%"
})
.setTween("#section-5 > #section-5-inner", {y: "20%", ease: Linear.easeNone})
.addTo(controller);

// build scenes F O R  A N I M A T I O N S
new ScrollMagic.Scene({
  triggerElement: "#section-2",
  triggerHook: "onEnter",
  duration: "100%"
})
.setTween(blockTween2)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section-3",
  triggerHook: "onEnter",
  duration: "100%"
})
.setTween(blockTween3)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section-4",
  triggerHook: "onEnter",
  duration: "100%"
})
.setTween(blockTween4)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section-5",
  triggerHook: "onEnter",
  duration: "100%"
})
.setTween(blockTween5)
.addTo(controller);


new ScrollMagic.Scene({
  triggerElement: "#section-2",
  triggerHook: "onEnter",
  duration: "90%",
  offset: -50
})
.setTween(blockTween2img)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section-3",
  triggerHook: "onEnter",
  duration: "90%",
  offset: -50
})
.setTween(blockTween3img)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section-4",
  triggerHook: "onEnter",
  duration: "90%",
  offset: -50
})
.setTween(blockTween4img)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section-5",
  triggerHook: "onEnter",
  duration: "90%",
  offset: -50
})
.setTween(blockTween5img)
.addTo(controller);


var scenes = {
'scene1': {
  'section-1': 'anchor1'
},
'scene2': {
  'section-2': 'anchor2'
},
'scene3': {
  'section-3': 'anchor3'
},
'scene4': {
  'section-4': 'anchor4'
},
'scene5': {
  'section-5': 'anchor5'
}
}

for(var key in scenes) {
// skip loop if the property is from prototype
if (!scenes.hasOwnProperty(key)) continue;

var obj = scenes[key];

for (var prop in obj) {
  // skip loop if the property is from prototype
  if(!obj.hasOwnProperty(prop)) continue;

  new ScrollMagic.Scene({
    triggerElement: '#' + prop,
    duration: $('section').height(),
    triggerHook: .025,
    reverse: true
  })
  .setClassToggle('#' + obj[prop], 'active')
  // .addIndicators()
  .addTo(controller);
}
}

// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

TweenMax.to(window, 0.5, {
  scrollTo : {
    y : target,
    autoKill : true // Allow scroll position to change outside itself
  },
  ease : Cubic.easeInOut
});

});

//  Bind scroll to anchor links using Vanilla JavaScript
var anchor_nav = document.querySelector('.anchor-nav');

anchor_nav.addEventListener('click', function(e) {
var target = e.target,
    id     = target.getAttribute('href');

if(id !== null) {
  if(id.length > 0) {
    e.preventDefault();
    controller.scrollTo(id);

    if(window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }
}
});

/* Bind scroll to anchor links using jQuery */

$(document).on("click", "a[href^=#]", function(e) {
var id = $(this).attr("href");

if($(id).length > 0) {
  e.preventDefault();

  // trigger scroll
  controller.scrollTo(id);

  // If supported by the browser we can also update the URL
  if (window.history && window.history.pushState) {
    history.pushState("", document.title, id);
  }
}
});

// makes "overlap from bottom effect"
new ScrollMagic.Scene ({
  duration: 100,
  offset: 50
})
.setPin("#section-6")
// .addIndicators()
.addTo(controller);
