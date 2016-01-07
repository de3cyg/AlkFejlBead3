import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('subjects', function() {
    this.route('list');
    this.route('new');
    this.route('view', {path: '/:subject_id'});
    this.route('edit', {path: '/edit/:subject_id'});
  });
});

export default Router;
