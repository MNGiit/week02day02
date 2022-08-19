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

jollyRoger.forEach(e => console.log(e.name, e.favoriteItem, e.needsVitaminC));
blackPearl.forEach(e => console.log(e.name, e.favoriteItem, e.needsVitaminC));


// Create A Restaurant Site -[HTML,CSS,JS]
// Create the Following Objects:
// MENU [Brunch, Lunch, Dinner,Desert, Beverages Entrees,Appetizers]
// --> Each menu item must have MINIMUM 6items with at least 4attributes/properties..

class Menu {
    constructor(name, items) {
        this.name = name;
        this.items = items;
    }
    getMenuName() { return this.name; }
    getMenuItems() {
        let onMenu = [];
        // jollyRoger.forEach(e => console.log(e.name, e.favoriteItem, e.needsVitaminC));
        this.items.forEach(e => onMenu.push(e));
        return onMenu;
    }
}

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice(){
        return "$" + this.price;
    }
}

const WAFFLES = new Item("Waffles", "4.99");
const PANCAKES = new Item("Pancakes", "7.99");
const HASHBROWNS = new Item("Hashbrowns", "1.99");
const EGGSANDWICH = new Item("Egg sandwich", "2.49");

const FRENCHFRIES = new Item("French fries", "4.99");

const RATBURGER = new Item("Rat burger", "0.49");
const PIZZA = new Item("Pizza", "3.99");
const TACO = new Item("Taco", "6.99");
const TOMATO_SOUP = new Item("Tomato Soup", "7.99");
const PEA_SOUP = new Item("Pea Soup", "7.99");
const RAMEN = new Item("RAMEN", "7.99");

const COOKIES = new Item("Cookies", "7.99");
const CHOCOLATE_CAKE = new Item("Chocolate Cake", "12.99");
const STRAWBERRY_CAKE = new Item("Strawberry Cake", "10.99");
const JAWBREAKER = new Item ("Jawbreaker", "0.99");
const BUBBLEGUM = new Item("Bubblegum", "0.05");

const WATER = new Item("Water", "9.99");
const CHOCOLATE_MILK = new Item("Chocolate milk", "2.99");
const STRAWBERRY_MILK = new Item("Strawberry milk", "2.49");
const MILK = new Item("Milk", "2.49")
const TEA = new Item("Tea", "0.49");
const PEACH_SODA = new Item("Peach Soda", "10.99");

const MENU = [];

// MENU [Brunch, Lunch, Dinner,Desert, Beverages Entrees,Appetizers]

MENU.push(new Menu("Brunch", [WATER, COOKIES, PIZZA, HASHBROWNS, FRENCHFRIES, MILK]))
MENU.push(new Menu("Lunch", [RATBURGER, COOKIES, PIZZA, HASHBROWNS, FRENCHFRIES, MILK]))
MENU.push(new Menu("Dinner", [WATER, COOKIES, PIZZA, HASHBROWNS, FRENCHFRIES, MILK]))
MENU.push(new Menu("Dessert", [WATER, COOKIES, PIZZA, HASHBROWNS, FRENCHFRIES, MILK]))
MENU.push(new Menu("Beverages", [WATER, CHOCOLATE_MILK, STRAWBERRY_MILK, MILK, TEA, PEACH_SODA]))
MENU.push(new Menu("Entrees", [WATER, COOKIES, PIZZA, HASHBROWNS, FRENCHFRIES, MILK]))
MENU.push(new Menu("Appetizers", [WATER, COOKIES, PIZZA, HASHBROWNS, FRENCHFRIES, MILK]))
// console.log(MENU[0]);


const displaySpecials = () => {
    let mainTitle = document.querySelector(""); // put . inside "" if it's class
    // mainTitle.addEventListener("click", () => {
    //    mainTitle.innerText = MENU.Salad.small;
    // })
    // mainTitle.innerHTML = MENU.Salad.small
}

const doSomething = () => {
    // let target = document.querySelector('mag');
    // target.innerHTML = drinks.soda
}
