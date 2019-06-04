var SquareDancer = function(top, left, timeBetweenSteps) {
  this.partner = this.choosePartner(window.dancers);
  this.partnerTop = formatPixels($(this.partner.$node).css('top'));
  this.partnerLeft = formatPixels($(this.partner.$node).css('left'));
  this.top = this.partnerTop - 30;
  this.left = this.partnerLeft; 

  Dancer.call(this, this.top, this.left, timeBetweenSteps);
  this.$node.addClass("cowboy");
  
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);

  var position = {
    top: this.top,
    left: this.left
  };
  
  if (this.top < this.partnerTop) {
    position.top = this.partnerTop;
    position.left = this.partnerLeft + 30;
  } else if (this.left > this.partnerLeft) {
    position.left = this.partnerLeft;
    position.top = this.partnerTop + 30;
  } else if (this.top > this.partnerTop) {
    position.top = this.partnerTop;
    position.left = this.partnerLeft - 30;
  } else if (this.left < this.partnerLeft) {
    position.left = this.partnerLeft;
    position.top = this.partnerTop - 30;
  }
  
  this.top = position.top;
  this.left = position.left;
  this.setPosition(this.top, this.left);
  //begin any direction
  //compare the dancer and the partner's top/left
  //kick you on around whenever you are exceeding your partner's top, left, !top, !left
};


SquareDancer.prototype.choosePartner = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

var formatPixels = function(string) {
  return Number(string.substring(0, string.length - 2));
};