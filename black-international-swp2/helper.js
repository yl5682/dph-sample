// process items on the site to customize its appearance and behavior
var ecds_process = function() {
  // nth-child 9
  jQuery(
    "#ph_timeline_area1 > div > div.vis-panel.vis-center > div.vis-content > div > div.vis-foreground > div > div:nth-child(9) > div.vis-item-overflow > div > div > div > span"
  ).text("1914-1918");

  // nth-child 8
  jQuery(
    "#ph_timeline_area1 > div > div.vis-panel.vis-center > div.vis-content > div > div.vis-foreground > div > div:nth-child(8) > div.vis-item-overflow > div > div > div > span"
  ).text("1917-1931");

  // nth-child 6
  jQuery(
    "#ph_timeline_area1 > div > div.vis-panel.vis-center > div.vis-content > div > div.vis-foreground > div > div:nth-child(6) > div.vis-item-overflow > div > div > div > span"
  ).text("1900-1920");

  // nth-child 7
  jQuery(
    "#ph_timeline_area1 > div > div.vis-panel.vis-center > div.vis-content > div > div.vis-foreground > div > div:nth-child(7) > div.vis-item-overflow > div > div > div > span"
  ).text("1898-1905");

  // nth-child 5
  jQuery(
    "#ph_timeline_area1 > div > div.vis-panel.vis-center > div.vis-content > div > div.vis-foreground > div > div:nth-child(5) > div.vis-item-overflow > div > div > div > span"
  ).text("1910-1920");

  // nth-child 2
  jQuery(
    "#ph_timeline_area1 > div > div.vis-panel.vis-center > div.vis-content > div > div.vis-foreground > div > div:nth-child(2) > div.vis-item-overflow > div > div > div > span"
  ).text("1899-1922");

  // nth-child 3
  jQuery(
    "#ph_timeline_area1 > div > div.vis-panel.vis-center > div.vis-content > div > div.vis-foreground > div > div:nth-child(3) > div.vis-item-overflow > div > div > div > span"
  ).text("1885-1904");

  // nth-child 4
  jQuery(
    "#ph_timeline_area1 > div > div.vis-panel.vis-center > div.vis-content > div > div.vis-foreground > div > div:nth-child(4) > div.vis-item-overflow > div > div > div > span"
  ).text("1927-1934");

  // nth-child 1
  jQuery(
    "#ph_timeline_area1 > div > div.vis-panel.vis-center > div.vis-content > div > div.vis-foreground > div > div:nth-child(1) > div.vis-item-overflow > div > div > div > span"
  ).text("1915-1934");

  // disable mouse events
  var preventedEvents =
    "contextmenu dblclick mousemove mousewheel pointermove scroll";
  jQuery("*").bind(preventedEvents, function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
  });
};

// periodically check when the JS code inserts the timeline plugin
var existCondition = setInterval(function() {
  if (jQuery(".vis-item-content").length) {
    clearInterval(existCondition);
    ecds_process();
  }
}, 100);