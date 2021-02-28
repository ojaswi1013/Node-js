//objects are refernece type, hence values in them are changable
//creating object
const Person = {
    name: 'Max',
    age: 29,
    greet ()  {
        //this refers to GLOBAL NODE RUNTIME SCOPE, hence does not access the local object variables
        //so we avoid using erold function synttax and use this in-stead
        console.log('Hi i am ' + this.name + ' , age ' + this.age);

    }
}
//console.log(Person);
Person.greet();

//using spread operator to copy person
const copiedPerson = {...Person};
console.log(copiedPerson);

//different ways to extract values from an object
//also called Object Destructuring
const printName = ({name}) => {
    console.log(name);
}
printName(Person);

const {name,age} = Person;//const or let depending on the requirement
console.log(name,age);