module.exports = {
  'Server renders the heading text' : function(browser) {
    browser
      .url('http://localhost:3000')
      .assert.containsText('body', 'Movie Database App')
      .end();
  }
};
