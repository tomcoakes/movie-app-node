module.exports = {
  'Find movie by title' : function(browser) {
    browser
      .url('http://localhost:3000/movie/childrenofmen')
      .assert.containsText('body', 'Children of Men')
      .end();
  }
};
