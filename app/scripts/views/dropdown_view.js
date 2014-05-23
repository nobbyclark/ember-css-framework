App.DropdownView = App.RevealView.extend({
  layoutName: 'layouts/dropdown_layout',
  classNames: ['reveal-dropdown'],

  onToggleReveal: function() {
    this.calculateHeight();
  }.observes('isOpen'),

  actions: {
    toggleReveal: function() {
      this.closeOnClickAway();
    }
  }
});