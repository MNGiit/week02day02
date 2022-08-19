// MENU [Brunch, Lunch, Dinner,Desert, Beverages Entrees,Appetizers]

let brunch = ["Egg Sandwich 1", "Egg Sandwich 2", "Egg Sandwich 3", "Egg Sandwich 4", "Egg Sandwich 5", "Egg Sandwich 6"]
let lunch = ["Pizza 1", "Pizza 2", "Pizza 3", "Pizza 4", "Pizza 5", "Pizza 6"]
let dinner = ["Burge 1", "Burge 2", "Burge 3", "Burge 4", "Burge 5", "Burge 6"]
let dessert = ["Cake 1", "Cake 2", "Cake 3", "Cake 4", "Cake 5", "Cake 6"]
let beverages = ["Juice 1", "Juice 2", "Juice 3", "Juice 4", "Juice 5", "Juice 6"]
let entrees = ["Chicken Wings 1", "Chicken Wings 2", "Chicken Wings 3", "Chicken Wings 4", "Chicken Wings 5", "Chicken Wings 6"]
let appetizers = ["Celery 1", "Celery 2", "Celery 3", "Celery 4", "Celery 5", "Celery 6"]

const MENU = {
    brunch,
    lunch,
    dinner,
    dessert,
    beverages,
    entrees,
    appetizers
}

console.log(".item" + (1 + 1));

const displayBrunchMenu = () => {
    console.log(MENU.brunch);
    let onMenu = [];
    MENU.brunch.forEach(e => onMenu.push(e));

    for(let i = 0; i < onMenu.length; i++) {
        changeInnerHTML(onMenu[i], (".item" + (i+1)));
    }
}

function changeInnerHTML(text, target) {
    let aim = document.querySelector(target);
    aim.innerHTML = text;
}