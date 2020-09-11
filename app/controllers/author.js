import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isEmpty } from '@ember/utils';

export default class AuthorController extends Controller {
    @tracked title;
    @tracked description;
    @tracked filter;

     //list authors by filter
     get filteredList() {
        let results = this.model.books;
        const query = this.filter;

        if (query) {
            const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
            // i: case insensitive, g: global
            const regex = new RegExp(regexString, 'ig');

            console.log('libros');

            results = results.filter((item) => item.title.match(regex));
        }   

        return results.sortBy('title');
    }

    @action
    addBook() {
        if (!this.validate()) {
            return;
        }

        const book = this.store.createRecord('book', {
            title: this.title,
            description: this.description,
            publishedAt: new Date(),
            author: this.model
        });

        book.save();
        this.title = "";
        this.description = "";
    }


    @action
    update(book) {
        if (isEmpty(book.title) || isEmpty(book.description)) {
            return;
        }

        this.store.findRecord('book', book.id).then(function (book) {
            book.title,
            book.description
        });

        book.set('isEditing', false);
    }

    @action
    delete(book) {
        const confirmation = confirm('Are you sure?');

        if (confirmation) {
            book.deleteRecord();
            book.save();
        }
    }

    validate(defaultResponse = true) {
        if (isEmpty(this.title)) {
            return false;
        }
        if (isEmpty(this.description)) {
            return false;
        }
        return defaultResponse
    }

    @action
    isEditing(book) {
        book.set('isEditing', true);
    }
}
