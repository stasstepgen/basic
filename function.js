// example with "this"
const person = {
    name: "Agur",
    greetRegular: function() {
        //"this" - here this object person
        console.log(`Hello from ${this.name} (regilar)`);
    },
    greetArrow: () => {
        console.log(`Hello from ${this.name} (arrow)`);
    }
}
person.greetRegular();
person.greetArrow();

// "FUNCTION PARAMETRS"

console.log("---FUNCTION PARAMETRS---");
// default parametres
function greet(name = "Somebody") {
    console.log(`welcome ${name}!`);
}
greet("Anna");
greet();


//REST-params
function sumALL (...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
   return total;
}

console.log("Summa 1,2,3,4: ", sumAll(1,2,3,4));

console.log("---замыкания---");
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
        return count;
    };
}
const counter1 = createCounter();
counter1();
counter1();

const counter2 = createCounter();
counter2();

console.log("--- самовызывающая функция ---");

(function() {
    const secretMessage = "This message not available globally";
    console.log(secretMessage);
})();