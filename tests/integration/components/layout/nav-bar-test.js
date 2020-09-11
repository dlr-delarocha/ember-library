import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Layout::NavBar />`);

    // Template block usage:

    await render(hbs`
      <Layout::NavBar>
        template block text
      </Layout::NavBar>
    `);


    const component = this.element.querySelector('.navbar');

    assert.dom(component).hasClass('navbar', 'loaded correctly');

  });

});
