class Person {
    constructor(fullName, favColor){
        this.name = fullName;
        this.favColor = favColor;
    }
    
    greet(){
        console.log("hi, my name is " + this.name + " and my favorite color is " + this.favColor + ".");
    }
}

export default Person;