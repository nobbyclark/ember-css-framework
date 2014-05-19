App.RevealView = Ember.View.extend({
  isOpen: false,
  classNames: ['reveal'],
  classNameBindings: ['isOpen:open'],

  actions: {
    toggleReveal: function() {
      this.toggleProperty('isOpen');
    }
  }
});