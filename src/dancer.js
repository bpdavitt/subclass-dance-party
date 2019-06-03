// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.step(timeBetweenSteps);
  this.setPosition(top, left);

};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), this.timeBetweenSteps); //dont forget about whether this works!!!
};

Dancer.prototype.lineUp = function() {
  this.$node.css('left', 10);
};