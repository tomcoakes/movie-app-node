module.exports = {
  'Searching for Children of Men' : function(browser) {
    browser
      .url('http://localhost:3000/search?q=childrenofmen')
      .assert.containsText('body', 'Children of Men')
      .end();
  }
};
