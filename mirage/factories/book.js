import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    title() {
        return faker.company.companyName();
    },
    description() {
        return faker.commerce.productDescription();
    },

    // picture() {
    //     return  'https://picsum.photos/id/'+ faker.random.number  +'/80/80.jpg'
    // },

    publishedAt() {
        return faker.date.past();
    }
});
