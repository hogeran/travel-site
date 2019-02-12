var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
    payTaxes(){
        console.log(this.name + ' kan betala skatt');
    }
}

alert('abc 321');

var john = new Person("john Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

$("h1").remove();