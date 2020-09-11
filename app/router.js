import EmberRouter from '@ember/routing/router';
import config from 'dlr-library/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('books');
  this.route('authors');
  this.route('author', {path: 'authors/:author_id'} );
  // this.route('book', {path: 'books/:book_id'} );
});
