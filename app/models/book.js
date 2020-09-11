import Model,  { attr, belongsTo } from '@ember-data/model';

export default class BookModel extends Model {
    @attr title 
    @attr description 
    @attr('date') publishedAt;
    @belongsTo author;
}
