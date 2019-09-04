class Person {
    // public name: string;  //can do this too. default is public
    name: string;
    private type: string;
    protected age: number; //available in child classes
    // public username: string;
    // if you add the "public" (or whatever property) as below to username, dont need to define above and set below
    constructor(name: string, public username: string) {
        this.name = name;
        // this.username = username;
    }
 
    printAge() {
        console.log(this.age);
        // have to use "this" keyword to access properties or methods of an object youre inside of
        this.setType("Cool person");
    }
 
    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}

// using a class by instantiating it (instantiate it by using new keyword)
const person = new Person("Kat", "kat");
console.log(person);
console.log(person.name, person.username);
person.printAge();

 
// Inheritance
//inherit everything from the parent class except private properties and private methods; can override or extend by writing own logic
class Kat extends Person {
    // name = "Kat";
    constructor(username: string) {
        super("Kat", username); //super calls the constructor of the parent class; dont need to define username as public because its already setup as a property in the parent class
        this.age = 28;
    }
}

const kat = new Kat("kat");
console.log(kat);

 
// getters and setters
class Plant {
    private _species: string; //typically, dont want to prefix private with _, just using it for an example

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}
let plant = new Plant();
console.log(plant.species); //logs "Default"
plant.species = "AB";
console.log(plant.species); //logs "Default" too
plant.species = "Green Plant";
console.log(plant.species); //logs "Green Plant"

 
// static properties and methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number) : number {
        return this.PI * diameter;
   }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
 

// abstract classes; these cannot be instantiated directly, must inherit
abstract class Project {
    projectName: string = "Default";
    budget: number;

    abstract changeName(name: string): void;  //this means once we extend the class, we need to implement a changeName method and we need to write the logic

     calcBudget() {
        return this.budget * 2;
    }

}

class ITProject extends Project {
    changeName(name: string) : void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject); //logs object with projectName = "Default"
newProject.changeName("Super IT Project");
console.log(newProject); //logs object with projectName = "Super IT Project"


// private constructors
// this is a singleton class, where you only want one instance during runtime
// an example would be if you need to have an array and it has to be consistant throughout the entire app (ie a shopping cart)
class OnlyOne {
    private static instance: OnlyOne;
 
    private constructor(public name: string) {}
    // can do below to make name readable outside the method, but not changeable
    // private constructor(public readonly name: string) {}

     // can also do this for read only:
    /*
    public readonly name: string;
    private constructor(public readonly name: string) {
        this.name = name;
    }
    */
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne("The Only One");  //wrong, gives error at compile
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = "Something else";
 

// tsc solutions.ts - t ES5 (this compiles to ES5. properties are set up to do this for the project, but if we run just one project we need to do this)