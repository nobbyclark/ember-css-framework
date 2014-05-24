App.PanelView = App.RevealView .extend({
  classNames: ['reveal-panel'],
  icon: '&blacktriangledown;',

  onToggleReveal: function() {
    this.calculateHeight();
  }.observes('isOpen')
});