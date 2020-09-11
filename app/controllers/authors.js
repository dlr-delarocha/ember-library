import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { equal } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';

export default class AuthorsController extends Controller {
    @tracked queryParams = ['filter'];
    @tracked filter = '';
    @tracked limit = 'all';

    @tracked name;
    @tracked nationality;
    @tracked current;

    //flag 
    @equal('all', 'limit') limitAll;

    //list authors by filter
    get filteredList() {
        let results = this.model;
        const query = this.filter;

        if (query) {
            const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
            // i: case insensitive, g: global
            const regex = new RegExp(regexString, 'ig');       

            results = results.filter((item) => item.name.match(regex));
        }

        if (this.get('change')) {
            return results.sortBy('name').reverse();
        }

        return results.sortBy('name');
    }

    get angleDirection() {
        if (this.get('change')) {
            return 'angle-up';
        }
        return 'angle-down';
    }

    @action
    addAuthor() {
        if (isEmpty(this.name) || isEmpty(this.nationality)) {
            return;
        }

        const author = this.store.createRecord('author', {
            name: this.name,
            nationality: this.nationality,
        });

        author.save();
        this.name = "";
        this.nationality = "";

        this.transitionToRoute('authors');
    }

    @action
    update(author) {
        
        if (isEmpty(author.name) || isEmpty(author.nationality)) {
            console.log('empty');
            return;
        }
       
        this.store.findRecord('author', author.id).then(function (author) {
            author.name,
            author.natioanality
        });    
        
        author.set('isEditing', false);
  
    }

    @action
    delete(author) {
        const confirmation = confirm('Are you sure?');

        if (confirmation) {
            author.destroyRecord();
            author.save();
        }
    }

    //change arrow direction
    @action
    toggleAngleDirection(field) {
        this.set('change', !this.get('change'));
    }

    @action
    changeToEdit(author) {            
        author.set('isEditing', !author.get('isEditing'));
    }
}
