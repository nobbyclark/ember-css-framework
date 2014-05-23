App.PanelView = App.RevealView .extend({
  layoutName: 'layouts/panel_layout',
  classNames: ['reveal-panel'],

  onToggleReveal: function() {
    this.calculateHeight();
  }.observes('isOpen')
});