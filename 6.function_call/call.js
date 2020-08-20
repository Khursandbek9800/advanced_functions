function say(phrase) {
    alert(this.name + ': ' + phrase);
}

let user = { name: "John" };
let admin = {name: "Khursandbek"}

say.call(user, "Hello, Khursandbek"); 
say.call(admin, "whats up, dude?")
