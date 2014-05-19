App.RevealView = Ember.View.extend({
  isOpen: false,
  classNames: ['reveal'],
  classNameBindings: ['isOpen:open'],

  onToggleReveal: function() {

    var el = this.$('.reveal-content');

    if (this.get('isOpen')) {
      el.css('height', this.$('.reveal-content-wrap').outerHeight());
    } else {
      el.css('height', "");
    }

  }.observes('isOpen'),

  actions: {
    toggleReveal: function() {
      this.toggleProperty('isOpen');
    }
  }
});