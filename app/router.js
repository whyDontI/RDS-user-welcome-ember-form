import EmberRouter from '@ember/routing/router';
import config from 'rds-welcome-form/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('form');
  this.route('user-registration-form');
});
