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