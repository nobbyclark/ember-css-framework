App.RevealMixin = Ember.Mixin.create({

  calculateHeight: function() {

    var revealContentSelector = '.' + this.revealContent,
        revealWrapSelector = '.' + this.revealWrap,
        el = this.$(revealContentSelector);

    if (this.get('isOpen')) {
      el.css('height', this.$(revealContentSelector + '>' + revealWrapSelector).outerHeight());
    } else {
      el.css('height', "");
    }

  },

  closeOnClickAway: function() {

    var self = this,
        isOpen = this.get('isOpen'), // must be stored BEFORE closing other dropdowns
        siblingViews = this.get('parentView.childViews');
    
    // allow only one dropdown to be open at a time
    siblingViews.forEach(function(view) {
      if (view.constructor === self.constructor) {
        view.set('isOpen', false);
      }
    });
    
    if (!isOpen) {
      this.toggleProperty('isOpen');
    }

  }

});

App.RevealView = Ember.View.extend(App.RevealMixin, {
  isOpen: false,
  classNameBindings: ['isOpen:open'],
  revealContent: 'reveal-content',
  revealWrap: 'wrap',
  revealToggle: 'reveal-toggle',
  text: "Text",
  subtext: "Subtext",

  actions: {
    toggleReveal: function() {
      this.toggleProperty('isOpen');
    }
  }
});