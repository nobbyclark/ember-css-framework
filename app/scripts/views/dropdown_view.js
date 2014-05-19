App.DropdownView = App.RevealView.extend({
  classNames: ['reveal-dropdown'],

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