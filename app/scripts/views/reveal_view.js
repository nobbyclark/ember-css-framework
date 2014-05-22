App.RevealView = Ember.View.extend({
  isOpen: false,
  classNameBindings: ['isOpen:open'],

  onToggleReveal: function() {

    var el = this.$('.reveal-content');

    if (this.get('isOpen')) {
      el.css('height', this.$('.reveal-content > .wrap').outerHeight());
    } else {
      el.css('height', "");
    }

  }.observes('isOpen'),

  actions: {
    toggleReveal: function() {
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
  }
});