function Cat(name) {
    this.name = name;
    this.toys = ["string", "ball", "balloon"];
}

Cat.prototype.play = function meow() {
    this.toys.forEach(
        (toy) => {
            console.log(`${this.name} plays with ${toy}`);
        }
    );
};

let garfield = new Cat ('garfield');
// garfield.play();

let halfMyAge = myAge => (myAge / 2);

