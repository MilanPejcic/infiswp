class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get age() {
        return this.#age;
    }
    greet() {
        console.log(
            `Hello, my name is ${this.#name} and I am ${this.#age} years old.`,
        );
    }
}
const barbara = new Person("Barbara", 15);
const anton = new Person("Anton", 16);
barbara.greet();
anton.greet();
console.log(`Gemeinsames Alter: ${barbara.age + anton.age}`);

const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("fragen.json");
const jsonData = JSON.parse(decoder.decode(data));
console.log(jsonData);

// Deno.readFileSync("fragen.json", "utf-8").then((data) => {
//     const jsonData = JSON.parse(data);
//     const questions = jsonData.fragen.map((frage) => {
//         return {
//             question: frage.frage,
//             options: frage.optionen,
//             answer: frage.antwort
//         };
//     });
//     console.log(questions);
// }).catch((error) => {
//     console.error("Error reading file:", error);
// });
