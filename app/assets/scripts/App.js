var $ = require('jquery');
var Person = require('./modules/Person');

alert('abc 321');

var john = new Person("john Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

$("h1").remove();