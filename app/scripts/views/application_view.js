App.ApplicationView = Ember.View.extend({
  classNames: ['app'],

  click: function(e) {
    var childViews = this.get('childViews'),
        bubbles = $(e.target).data('bubbles');

    // prevent elements with data-bubbles="false" from closing
    if (typeof bubbles  === 'boolean' && bubbles === false) return false;
    
    // close all dropdowns when clicking away
    childViews.forEach(function(view) {
      if (view.constructor === App.DropdownView || view.constructor === App.PopupView) {
        view.set('isOpen', false);
      }
    });
  }
});