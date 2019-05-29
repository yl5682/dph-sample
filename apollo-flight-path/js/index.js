function pathPrepare($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $ascentLegs = [
  {
    path: $("path#leg-1"),
    trigger: $("section#trigger1")
  },
  {
    path: $("path#leg-2"),
    trigger: $("section#trigger2")
  }
];

var $descentLegs = [
  {
    path: $("path#leg-3"),
    trigger: $("section#trigger3")
  },
  {
    path: $("path#leg-4"),
    trigger: $("section#trigger4")
  }
];

var controller = new ScrollMagic.Controller();

// fadeAscent
var fadeAscent = new ScrollMagic.Scene({
  triggerElement: "#trigger-on-the-moon",
  duration: 200
})
  .on("enter", function(event) {
    console.log(event);
    if (event.scrollDirection === "FORWARD") {
      $.each($ascentLegs, function(index, segment) {
        segment.path.fadeTo("slow", 0.3);
      });
    }
  })
  .on("leave", function(event) {
    if (event.scrollDirection === "REVERSE") {
      $.each($ascentLegs, function(index, segment) {
        segment.path.fadeTo("slow", 1);
      });
    }
  })
  // .addIndicators()
  .addTo(controller);
// end fadeAcent

var onEarth = new ScrollMagic.Scene({
  triggerElement: "#trigger-on-earth",
  duration: $("#trigger-on-earth").innerHeight()
})
  .on("enter", function(event) {
    $(".flight-path").addClass("on-earth");
    $(".moon").addClass("on-earth");
    $(".earth").addClass("on-earth");
  })
  .on("leave", function(event) {
    $(".flight-path").removeClass("on-earth");
    $(".moon").removeClass("on-earth");
    $(".earth").removeClass("on-earth");
  })
  .addTo(controller);

var landOnMoon = new ScrollMagic.Scene({
  triggerElement: "#trigger-on-the-moon",
  duration: $("#trigger-on-the-moon").innerHeight()
})
  .on("enter", function(event) {
    $(".flight-path").addClass("on-moon");
    $(".moon").addClass("on-moon");
    $(".earth").addClass("on-moon");
  })
  .on("leave", function(event) {
    $(".flight-path").removeClass("on-moon");
    $(".moon").removeClass("on-moon");
    $(".earth").removeClass("on-moon");
  })
  .addTo(controller);

var showSurface = new ScrollMagic.Scene({
  triggerElement: "#trigger-show-surface",
  duration: $("#trigger-show-surface").innerHeight()
})
  .on("enter", function(event) {
    $(".surface").addClass("surface-show");
  })
  .on("leave", function(event) {
    $(".surface").removeClass("surface-show");
  })
  .addTo(controller);

function createTween(segment) {
  var lineLength = segment.path[0].getTotalLength();
  segment.path.css("stroke-dasharray", lineLength);
  segment.path.css("opacity", 1);
  segment.path.css("stroke-dashoffset", lineLength);
  return new TimelineMax().add(
    TweenMax.to(segment.path, 1, {
      strokeDashoffset: 1,
      ease: Linear.easeNone
    })
  );
}

function createLeg(segment, tween) {
  return (
    new ScrollMagic.Scene({
      triggerElement: `#${segment.trigger[0].id}`,
      duration: segment.trigger.innerHeight(),
      tweenChanges: false // seems to match speed with scroll speed
    })
      .setTween(tween)
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller)
  );
}

$.each($ascentLegs, function(index, segment) {
  var tween = createTween(segment);
  createLeg(segment, tween);
});

$.each($descentLegs, function(index, segment) {
  var tween = createTween(segment);
  createLeg(segment, tween);
});

AOS.init({
  once: false // whether animation should happen only once - while scrolling down
});

// UI Kit - UI Sticky Control
var sticky = UIkit.sticky("#navbar", {
  clsactive: "",
  clsinactive: ".uk-invisible"
});
