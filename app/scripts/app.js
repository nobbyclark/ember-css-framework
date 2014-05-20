var App = window.App = Ember.Application.create();

require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/application_view');
require('scripts/views/reveal_view');
require('scripts/views/panel_view');
require('scripts/views/dropdown_view');
require('scripts/views/popup_view');
require('scripts/router');
