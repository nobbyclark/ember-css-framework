App.PopupView = App.DropdownView.extend({
  classNames: ['reveal-popup'],
  offset: 10,
  position: 'top-center',
  hasArrow: true,

  onToggleReveal: function() {
    
  },

  didInsertElement: function() {
    var toggle = this.$('.reveal-toggle'),
        toggleWidth = toggle.outerWidth(),
        toggleHeight = toggle.outerHeight(),

        content = this.$('.reveal-content'),
        contentWidth = 0,
        contentHeight = 0,

        arrowOffset = 12,
        arrowWidth = 24,

        offset = this.get('offset'),
        position = this.get('position').split('-'),
        a = position[0],
        b = position[1],
        xPos,
        yPos;

    if (this.get('hasArrow')) {
      content.addClass('arrow arrow-' + a + ' ' + b);
    }

    // get height AFTER hasArrow check otherwise
    // height wont take arrows height into account
    contentWidth = content.outerWidth();
    contentHeight = content.outerHeight();

    // Determine positon
    if (a === 'top' || a === 'bottom') {

      if (a === 'top') {
        yPos = -(contentHeight + offset);
      } else if (a === 'bottom') {
        yPos = toggleHeight + offset;
      }

      if (b === 'center') {
        xPos = -((contentWidth - toggleWidth) / 2);
      } else if (b === 'left') {
        xPos = 0;
      } else if (b === 'right') {
        xPos = toggleWidth - contentWidth;
      }

    }

    if (a === 'left' || a === 'right') {

      if (a === 'left') {
        xPos = -(contentWidth + offset);
      } else if (a === 'right') {
        xPos = toggleWidth + offset;
      }

      if (b === 'center') {
        yPos = -((contentHeight - toggleHeight) / 2);
      } else if (b === 'top') {
        yPos = 0;// - (arrowOffset + ((arrowWidth / 2) - (toggleHeight / 2)));
      } else if (b === 'bottom') {
        yPos = toggleHeight - contentHeight;
      }
      
    }

    // Set position
    content.css({
      top: yPos,
      left: xPos
    });

  }
});