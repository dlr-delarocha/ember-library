import Application from 'motorcycle-shop/app';
import config from 'motorcycle-shop/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
