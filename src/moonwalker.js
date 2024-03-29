var Moonwalker = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, 0, timeBetweenSteps);
  this.$node.addClass('moonwalker');
};

Moonwalker.prototype = Object.create(Dancer.prototype);
Moonwalker.prototype.constructor = Moonwalker;

Moonwalker.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  
};

Moonwalker.prototype.lineUp = function() {
  this.setPosition(this.$node.css('top'), this.$node.css('left'));
  this.$node.addClass('lineup');
};