module.exports = {
  'Server renders the heading text' : function(browser) {
    browser
      .url('http://localhost:3000')
      .assert.containsText('h1', 'Movie Database App')
      .end();
  }
};
