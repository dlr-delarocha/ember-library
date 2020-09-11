import Route from '@ember/routing/route';

export default class AuthorsRoute extends Route {
    queryParams = {
        limit: { refreshModel: true }
    };

    model(params) {    
        if (params.limit === 'all') {    
            return this.store.findAll('author');
        }    

        return this.store.query('author', {
            orderBy: 'name'   
        });
    }
}