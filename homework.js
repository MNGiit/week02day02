class Cat {
    constructor(name, owner, meow = "Meow") {
        this.name = name;
        this.owner = owner;
        this.meow = meow;
    }

    whatIsName() {
        console.log("Meow. My name is", this.name)
    }

    talk() {
        console.log(this.meow);
    }

    whoIsOwner() {
        console.log("Meow. My owner is", this.owner)
    }
}

class Pirate {
    constructor(name = " No name", favoriteItem = "Gold", needsVitaminC = false) {
        this.name = name;
        this.favoriteItem = favoriteItem;
        this.needsVitaminC = needsVitaminC;
    }

    whatIsName() {
        return "My name is " + this.name;
    }

    whatIsFavoriteItem() {
        return "Arrrgh, my favorite thing to take is: " + this.favoriteItem;
    }

    needOranges() {
        // return this.needsVitaminC ? str = "I walk the plank for apple juice" : str = "I need to buy some oranges" 
        return this.needsVitaminC ? "I walk the plank for apple juice" : "I need to buy some oranges" 
    }
}


let cat1 = new Cat("Garfield", "Jon", "I never met a lasagna I didn't like.");
let cat2 = new Cat("Stray Cat", "David Bowie", "Hsssssss");

console.log(cat1)
console.log(cat2)

cat1.whatIsName();
cat2.whatIsName();

cat1.whoIsOwner();
cat2.whoIsOwner();

cat1.talk();
cat2.talk();

// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

let jollyRoger = [];
let blackPearl = [];

// name, favoriteItem, needsVitaminC

jollyRoger.push(new Pirate("Coldsteel", "Nintendo Switch", false));
jollyRoger.push(new Pirate("Monkey", "Adventure", false));
jollyRoger.push(new Pirate("Samuel", "Socks", true));

blackPearl.push(new Pirate("Goldtooth", "Cupcakes", true));
blackPearl.push(new Pirate("Dr. Aye", "Medicine", false));
blackPearl.push(new Pirate("President of the World", "Mars", false));

// console.log(piratesOfBlackPearl.length);
// console.log(piratesOfJollyRoger[0].needOranges());
// console.log(piratesOfJollyRoger[2].needOranges());

// const letters = ["a","b","c"];
// for (const x of letters) {
//   // code block to be executed
// }

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }

// const readProperties = (item) => {
//     console.log(item);
// readProperties(piratesOfBlackPearl[0])

// } // doesn't work when using .foreach

// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));

jollyRoger.forEach(e => console.log(e));
blackPearl.forEach(e => console.log(e));
