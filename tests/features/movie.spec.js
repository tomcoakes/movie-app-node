module.exports = {
  'Lookup movie information by title' : function(browser) {
    browser
      .url('http://localhost:3000/movie?title=inception')
      .assert.containsText('h1', 'Inception (2010)')
      .assert.containsText('.release-date', '16th July 2010')
      .end();
  }
};
