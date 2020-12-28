import Application from 'rds-welcome-form/app';
import config from 'rds-welcome-form/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
