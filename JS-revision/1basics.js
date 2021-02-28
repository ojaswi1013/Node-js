//starting withe the basics of javascript

/**///complete basics:
const name='ojaswi';
let age=18;
const hasHobbies=true;

age= 19;
//basic difference b/w var and let  is that datatype for var is not fixed
//whereas datatype for let is fixed when first initialized
//this helps avoid one of many errors that are caused while using var
//ALWAYS PREFER LET


//example of a general function->
function summarizeUser(userName , userAge , userhasHobbies){
    return( 'name is ' + userName
    + ', age is ' + userAge
    + ', has h hobbie: ' + userhasHobbies);
}
//see concept of annonymus functions (similar to dead objects)

//functions can be written as errol functions->
const add = (a,b) =>  a+b;

console.log(summarizeUser(name,age,hasHobbies));
console.log(add(1,2));/**/


