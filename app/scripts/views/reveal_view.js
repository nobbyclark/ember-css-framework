App.RevealMixin = Ember.Mixin.create({

  calculateHeight: function() {
    var contentSelector = '.' + this.contentClass,
        contentWrapSelector = '.' + this.contentWrapClass,
        el = this.$(contentSelector);

    if (this.get('isOpen')) {
      el.css('height', this.$(contentSelector + ' > ' + contentWrapSelector).outerHeight());
    } else {
      el.css('height', '');
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
  layoutName: 'layouts/reveal_layout',
  classNameBindings: ['isOpen:open'],
  attributeBindings: ['style'],

  isOpen: false,

  contentClass: 'content',
  contentWrapClass: 'wrap',
  toggleClass: 'toggle',
  toggleClasses: '',
  iconClasses: '',

  text: 'Toggle',
  style: '',

  actions: {
    toggleReveal: function() {
      this.toggleProperty('isOpen');
    }
  }
});