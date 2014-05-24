App.DropdownView = App.RevealView.extend({
  classNames: ['reveal-dropdown'],
  icon: '&blacktriangledown;',

  onToggleReveal: function() {
    this.calculateHeight();
  }.observes('isOpen'),

  actions: {
    toggleReveal: function() {
      this.closeOnClickAway();
    }
  }
});