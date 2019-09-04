var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // public username: string;
    // if you add the "public" (or whatever property) as below to username, dont need to define above and set below
    function Person(name, username) {
        this.username = username;
        this.name = name;
        // this.username = username;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        // have to use "this" keyword to access properties or methods of an object youre inside of
        this.setType("Cool person");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
// using a class by instantiating it (instantiate it by using new keyword)
var person = new Person("Kat", "kat");
console.log(person);
console.log(person.name, person.username);
person.printAge();
// Inheritance
//inherit everything from the parent class except private properties and private methods; can override or extend by writing own logic
var Kat = /** @class */ (function (_super) {
    __extends(Kat, _super);
    // name = "Kat";
    function Kat(username) {
        var _this = _super.call(this, "Kat", username) || this;
        _this.age = 28;
        return _this;
    }
    return Kat;
}(Person));
var kat = new Kat("kat");
console.log(kat);
// getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); //logs "Default"
plant.species = "AB";
console.log(plant.species); //logs "Default" too
plant.species = "Green Plant";
console.log(plant.species); //logs "Green Plant"
// static properties and methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// abstract classes; these cannot be instantiated directly, must inherit
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject); //logs object with projectName = "Default"
newProject.changeName("Super IT Project");
console.log(newProject); //logs object with projectName = "Super IT Project"
// private constructors
// this is a singleton class, where you only want one instance during runtime
// an example would be if you need to have an array and it has to be consistant throughout the entire app (ie a shopping cart)
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    // can do below to make name readable outside the method, but not changeable
    // private constructor(public readonly name: string) {}
    // can also do this for read only:
    /*
    public readonly name: string;
    private constructor(public readonly name: string) {
        this.name = name;
    }
    */
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne("The Only One");  //wrong, gives error at compile
var right = OnlyOne.getInstance();
console.log(right.name);
right.name = "Something else";
// tsc solutions.ts - t ES5 (this compiles to ES5. properties are set up to do this for the project, but if we run just one project we need to do this)
