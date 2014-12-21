$(window).on("load", function() {
  // target to Imperial palaces
  window.scrollTo(2400, 1700);
  //initialize();
});

function initialize(){
  $("svg").panzoom({
    minScale: 0.3,
    maxScale: 2,
    increment: 0.2,
    duration: 600,
    transition: true,
    easing: "ease-in-out",
    cursor: "move",
  });

  $(".button.plus").on("click", function(){
    $("svg").panzoom("zoom", getScale() * 1.2);

  });

  $(".button.minus").on("click", function(){
    $("svg").panzoom("zoom", getScale() * 0.8);
  });

}

function getScale(){
  var scale = $("svg").panzoom("getMatrix")[0];
  return scale;
}