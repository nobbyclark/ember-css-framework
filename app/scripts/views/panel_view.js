App.PanelView = App.RevealView .extend({
  classNames: ['reveal-panel'],

  actions: {
    toggleReveal: function() {
      this.toggleProperty('isOpen');
    }
  }
});