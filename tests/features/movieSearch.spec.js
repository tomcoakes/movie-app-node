module.exports = {
  'Searching for a movie by title displays a list of possible results' : function(browser) {
    browser
      .url('http://localhost:3000')
      .setValue('input.movie-search-field', 'Interstellar')
      .submitForm('form.submit')
      .assert.urlEquals('http://localhost:3000/search')
      .assert.containsText('.result-title', 'Interstellar')
      .end();
  }
}
