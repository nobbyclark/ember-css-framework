App.PanelView = App.RevealView .extend({
  classNames: ['reveal-panel'],

  onToggleReveal: function() {
    this.calculateHeight();
  }.observes('isOpen')
});