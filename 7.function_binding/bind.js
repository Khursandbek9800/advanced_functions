let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};

let sayHi = user.sayHi.bind(user); 


sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!