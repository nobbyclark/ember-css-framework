App.Router.map(function () {
  this.route('type');
  this.route('buttons');
  this.route('forms');
  this.route('icons');
  this.resource('reveals', function() {
    this.route('panels');
    this.route('dropdowns');
    this.route('popups');
  });
});
