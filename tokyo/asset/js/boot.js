(function() {
window.onload = function() {
  var initPos = [-1600, -1450], initZoom = 2 / 3;

  var zoom = d3.behavior.zoom()
      .scale(initZoom)
      .translate(initPos)
      .scaleExtent([8/27, 1.5])
      .on("zoom", zoomed);
  d3.select("body").call(zoom);

  d3.select("#zoom-in").on("click", function() { changeZoom(3/2); } );
  d3.select("#zoom-out").on("click", function() { changeZoom(2/3); } );

  var svg = d3.select("#viewport");
  zoomed();

  function changeZoom(factor) {
    var svg = d3.select("svg").node();
    var center = [svg.offsetWidth / 2, svg.offsetHeight / 2];

    // http://bl.ocks.org/mgold/c2cc7242c8f800c736c4
    var scale = zoom.scale(),
        extent = zoom.scaleExtent(),
        translate = zoom.translate(),
        x = translate[0], y = translate[1],
        targetScale = scale * factor;

    // If the factor is too much, scale it down to reach the extent exactly
    var clampedTargetScale = Math.max(extent[0], Math.min(extent[1], targetScale));
    if (clampedTargetScale != targetScale){
        targetScale = clampedTargetScale;
        factor = targetScale / scale;
    }

    // Center each vector, stretch, then put back
    console.log(translate, center, factor);
    x = (x - center[0]) * factor + center[0];
    y = (y - center[1]) * factor + center[1];

    // Transition to the new view over 350ms
    d3.transition().duration(350).tween("zoom", function () {
        var interpolateScale = d3.interpolate(scale, targetScale),
            interpolateTrans = d3.interpolate(translate, [x,y]);
        return function (t) {
            zoom.scale(interpolateScale(t))
                .translate(interpolateTrans(t));
            zoomed();
        };
    });
  }

  function zoomed() {
    //console.log(zoom.translate(), zoom.scale());
    svg.attr("transform", "translate(" + zoom.translate() + ") scale(" + zoom.scale() + ")");
  }
}
})();
