var SquareDancer = function(top, left, timeBetweenSteps) {
  this.partner = this.choosePartner(window.dancers);
  this.partnerTop = formatPixels($(this.partner.$node).css('top'));
  this.partnerLeft = formatPixels($(this.partner.$node).css('left'));

  this.top = {
    top: this.partnerTop - 110,
    left: this.partnerLeft - 40
  };
  this.right = {
    top: this.partnerTop - 40,
    left: this.partnerLeft + 30
  };
  this.bottom = {
    top: this.partnerTop + 30,
    left: this.partnerLeft - 40
  };
  this.left = {
    top: this.partnerTop - 40,
    left: this.partnerLeft - 110
  };
  this.currentPosition = this.top;

  Dancer.call(this, this.top.top, this.top.left, timeBetweenSteps);
  this.$node.addClass("cowboy");
  
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  
  if (this.currentPosition === this.top) {
    this.currentPosition = this.right;    
  } else if (this.currentPosition === this.right) {
    this.currentPosition = this.bottom;    
  } else if (this.currentPosition === this.bottom) {
    this.currentPosition = this.left;    
  } else if (this.currentPosition === this.left) {
    this.currentPosition = this.top;    
  }

  this.setPosition(this.currentPosition.top, this.currentPosition.left);

};

SquareDancer.prototype.lineUp = function() {
  var bodyHeight = $('body').height() * .5;
  var bodyWidth = $('body').width() * .5; 

  this.top = {
    top: bodyHeight - 110,
    left: bodyWidth - 40
  };
  this.right = {
    top: bodyHeight - 40,
    left: bodyWidth + 30
  };
  this.bottom = {
    top: bodyHeight + 30,
    left: bodyWidth - 40
  };
  this.left = {
    top: bodyHeight - 40,
    left: bodyWidth - 110
  };
  this.currentPosition = this.top;
  this.setPosition(this.currentPosition.top, this.currentPosition.left);
};

SquareDancer.prototype.choosePartner = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

var formatPixels = function(string) {
  return Number(string.substring(0, string.length - 2));
};