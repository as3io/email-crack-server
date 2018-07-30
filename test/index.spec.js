const index = require('../src/index');

describe('index', function() {
  it('should load.', async function() {
    expect(index).to.respondTo('close');
  });
  after(async function() {
    // Close the app.
    index.close();
  });
});
