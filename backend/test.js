const moment = require('moment');


const date = '2021-02-14T18:22:31Z';
console.log(moment(date).utc(-5).subtract('hour', 4));