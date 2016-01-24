module.exports = {
  'Server renders the heading text' : function(browser) {
    browser
      .url('http://localhost:1337')
      .waitForElementVisible('h1', 1000)
      .assert.containsText('h1', 'Movie Database App')
      .end();
  }
};
