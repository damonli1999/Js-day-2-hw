// 1.
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.values(person3))


// 2. 
function people(name, age){
    this.name = name;
    this.age = age;

    // Method inside JS Prototype
    this.printInfo = (increase = ++age) =>  {
        console.log(`Their name is ${name} and they are ${increase} years old.`);
    }
}
let brandon = new people('Brandon', 3)

console.log(brandon.printInfo())
console.log(brandon.printInfo())

function people2(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = (by3 = age += 3) => {
        console.log(`${name} and they are ${by3} years old.`)
    }
}

let william = new people2('William', 8)

console.log(william.printInfo())
console.log(william.printInfo())


// 3.
const isLonger = (string) => {
    return new Promise( (resolve,reject) => {
        if(string.length >= 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isLonger('Koenigsegg')

.then( (result) => {
    console.log('Big word')
})

.catch( (error) => {
    console.log('Small number')
})



isLonger('auto')

.then( (result) => {
    console.log('Big word')
})
//Sad Reject path
.catch( (error) => {
    console.log('Small number')
})