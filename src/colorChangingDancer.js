var ColorChangingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorChangingDancer.prototype = Object.create(Dancer.prototype);
ColorChangingDancer.prototype.constructor = ColorChangingDancer;

ColorChangingDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.css('border-color', getRandomColor());
};

var getRandomColor = function() {
  var color = '#';
  var colorOptions = '1234567890abcdef';
  for (var i = 0; i < 6; i++) {
    color += colorOptions[Math.floor(Math.random() * 16)];
  }
  return color;
};