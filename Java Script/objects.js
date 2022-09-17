// In this section we we will work on the object we will create an object by constructor.
function print(...str) {
    console.log(...str)
}

function Student(name, age, height, bloodgroup) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.bloodgroup = bloodgroup;
}

let person = {
    name: "manish",
    greet: function () {
        return `Hello this is ${this.name} and how are you!...`
    }
}

// Now we need to add the prototype to that object.

Student.prototype.showInfo = function () {
    print(`Name: ${this.name}`)
    print(`Age: ${this.age}`)
    print(`Height: ${this.height}`)
    print(`BloodGroup: ${this.bloodgroup}`)
};

Student.prototype.toString = function () {
    return `Student(${this.name}, ${this.age}, ${this.height}, ${this.bloodgroup})`
}

let st = new Student("manish", 26, 5.6, "O-");


function Dog(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
}

const theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');