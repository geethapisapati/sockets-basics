var moment = require('moment');
var now = moment();
// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.format('x'));
// console.log(now.valueOf());

var timestamp = 1472966418242;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mm A'));

// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mmA'));

