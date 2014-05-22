App.PopupView = App.DropdownView.extend({
  classNames: ['reveal-popup'],
  offset: 10,
  position: 'top-center',
  text: "Zoltan is a cool guy? No Nick is a way cooler dude bro. fnain nfianfa",

  onToggleReveal: function() {
    
  },

  didInsertElement: function() {
    var toggle = this.$('.reveal-toggle'),
        toggleWidth = toggle.outerWidth(),
        toggleHeight = toggle.outerHeight(),

        content = this.$('.reveal-content'),
        contentWidth = 0,
        contentHeight = 0,

        arrow = this.$('.reveal-content > .arrow'),
        arrowOffset = 0,
        arrowWidth = 0,
        arrowHeight = 0,

        // distance from toggle
        offset = this.get('offset'),

        position = this.get('position').split('-'),
        a = position[0],
        b = position[1],
        xPos,
        yPos;

    // Add correct arrow class
    content.addClass('arrow-' + a + ' ' + b);

    // get height AFTER arrow check otherwise
    // height wont take arrow height into account
    contentWidth = content.outerWidth();
    contentHeight = content.outerHeight();

    arrowWidth = arrow.outerWidth();
    arrowHeight = arrow.outerHeight();

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

        if (toggleWidth < contentWidth) {
          arrowOffset = arrow.position().left;
          xPos -= (arrowOffset + ((arrowWidth / 2) - (toggleWidth / 2)));
        }

      } else if (b === 'right') {
        xPos = toggleWidth - contentWidth;

        if (toggleWidth < contentWidth) {
          arrowOffset = contentWidth - arrow.position().left - arrowWidth;
          xPos += (arrowOffset + ((arrowWidth / 2) - (toggleWidth / 2)));
        }

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
        yPos = 0;

        if (toggleHeight < contentHeight) {
          arrowOffset = arrow.position().top;
          yPos -= (arrowOffset + ((arrowHeight / 2) - (toggleHeight / 2)));
        }

      } else if (b === 'bottom') {
        yPos = toggleHeight - contentHeight;

        if (toggleHeight < contentHeight) {
          arrowOffset = contentHeight - arrow.position().top - arrowHeight;
          yPos += (arrowOffset + ((arrowHeight / 2) - (toggleHeight / 2)));
        }
        
      }
      
    }

    content.css({
      top: yPos,
      left: xPos
    });

  }
});