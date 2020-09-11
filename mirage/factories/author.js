import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    name() {
        return faker.name.firstName() + ' ' + faker.name.lastName();
    },
    nationality() {
        return faker.address.country();
    },

    afterCreate(author, server) {
        server.createList('book', 10, { author });
      }
});
