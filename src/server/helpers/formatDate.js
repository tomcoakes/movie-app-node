const moment = require('moment');

module.exports = (date) => {
  const parsedDate = new Date(date);
  return moment(parsedDate).format('Do MMMM YYYY');
}
