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
    // method 3


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