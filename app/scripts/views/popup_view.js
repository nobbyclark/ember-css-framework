App.PopupView = App.RevealView.extend({
  layoutName: 'layouts/popup_layout',
  classNames: ['reveal-popup'],

  arrowClass: 'arrow',
  popupStyle: 'popup-default',

  offset: 6,
  popupAlign: 'top',
  arrowAlign: 'center',

  text: '',

  didInsertElement: function() {

    var toggle = this.$('.' + this.toggleClass),
        toggleWidth = toggle.outerWidth(),
        toggleHeight = toggle.outerHeight(),

        content = this.$('.' + this.contentClass),
        contentWidth = content.outerWidth(),
        contentHeight = content.outerHeight(),

        arrow = this.$('.' + this.contentClass + ' > .' + this.get('arrowClass')),
        arrowOffset = 0,
        arrowWidth = arrow.outerWidth(),
        arrowHeight = arrow.outerHeight(),

        offset = this.get('offset'),

        a = this.get('popupAlign'),
        b = this.get('arrowAlign'),

        xPos = 0,
        yPos = 0;

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

    } else if (a === 'left' || a === 'right') {

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

  },

  actions: {
    toggleReveal: function() {
      this.closeOnClickAway();
    }
  }
});