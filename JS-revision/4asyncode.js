//Async code takes a little bit time before being executed
//(even if it is a little bit short)

const fetchData = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve('Done!');
        }, 1500);    
    });
    return promise;
};
//promise is more like try catch
//resolve is try bolck, running when no errors occur
//reject is like catch, when error is caught
//we usually get promise block pre written

setTimeout(() => {
    console.log('Timer is Done!');
    fetchData().then( text => {
        console.log(text);
    })
} , 2000);

console.log('Hello executes before timer!');
console.log('even if the timer is 1ms.');
//this proves that control moves foreward even if the timer is running
//and returns just before it expires

//showint ladder made by then blocks:
setTimeout(() => {
    console.log('Nested');
    fetchData()
    .then( text => {
        console.log(text);
        return fetchData();
    })
    .then( text2 => {
        console.log(text2);
        return fetchData();
    });
} , 2000);