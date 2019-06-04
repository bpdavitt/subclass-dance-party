// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.step(timeBetweenSteps);
  this.setPosition(top, left);

  $('.dancer').on('mouseover', function(event) {
    if ($(this).css('border-width') === 0) {
      console.log(this);
      var newProps = {
        'height': (formatPixels($(this.partner.$node).css('height')) * 2) + 'px',
        'width': (formatPixels($(this.partner.$node).css('width')) * 2) + 'px'      
      };
    } else {
      var newProps = {
        'border-width': '20px',
        'border-radius': '20px'
      };
    }
    $(this).css(newProps);
  });

  $('.dancer').on('mouseout', function(event) {
    var newProps = {
      'border-width': '10px',
      'border-radius': '10px'
    };
    $(this).css(newProps);
  });  

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
  this.$node.addClass('lineup');
};