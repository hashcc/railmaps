# What's this?
Railway maps of world's famous cities. Maps are created by Adobe illustrator, and are outputted as SVG.

- [You can view the TOKYO map here](http://www.railmaps.jp/tokyo).
- [Stories of making these maps](http://note.openvista.jp/2014/svg-rail-map).

# Caution
Outlining character with white color is implemented by "paint-order" property, not the SVG itself. This is SVG 2 property, but it's implemented by Gecko and Webkit browser. So, you can do this like following code (PHP):

```
text{
  <?php
  $ua = $_SERVER["HTTP_USER_AGENT"];
  if (strpos($ua, "AppleWebKit") !== false || strpos($ua, "Gecko") !== false){
    echo 'paint-order: stroke; stroke: #fff; stroke-width: 5px; stroke-linecap: round; stroke-linejoin: round;';
  } else{
    // Hack for other browser
    echo 'text-shadow: 0px 2px 0px white,0px 1px 0px white,1px 1px 0px white,1px 0px 0px white,2px 0px 0px white,1px -1px 0px white,1px -2px 0px white,0px -2px 0px white,-1px -2px 0px white,-2px -2px 0px white,-2px -1px 0px white,-2px 0px 0px white,-2px 1px 0px white,-1px 1px 0px white;';
  }
  ?>
}
```

# License

[CC0; Public domain](http://creativecommons.org/publicdomain/zero/1.0/deed.ja). Means you can use the file of repository you want to!
