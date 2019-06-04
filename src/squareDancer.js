var SquareDancer = function(top, left, timeBetweenSteps) {
  this.partner = this.choosePartner(window.dancers);
  this.partnerTop = formatPixels($(this.partner.$node).css('top'));
  this.partnerLeft = formatPixels($(this.partner.$node).css('left'));
  //this.top = this.partnerTop - 30;
  //this.left = this.partnerLeft; 
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

  // if (this.top < this.partnerTop) {
  //   position.top = this.partnerTop;
  //   position.left = this.partnerLeft + 30;
  // } else if (this.left > this.partnerLeft) {
  //   position.left = this.partnerLeft;
  //   position.top = this.partnerTop + 30;
  // } else if (this.top > this.partnerTop) {
  //   position.top = this.partnerTop;
  //   position.left = this.partnerLeft - 30;
  // } else if (this.left < this.partnerLeft) {
  //   position.left = this.partnerLeft;
  //   position.top = this.partnerTop - 30;
  // }
  
  // this.top = position.top;
  // this.left = position.left;
  this.setPosition(this.currentPosition.top, this.currentPosition.left);
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