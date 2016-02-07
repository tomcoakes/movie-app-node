module.exports = {
  'Find movie by title' : function(browser) {
    browser
      .url('http://localhost:3000/movie?title=inception')
      .assert.containsText('body', 'Inception')
      .end();
  }
};
