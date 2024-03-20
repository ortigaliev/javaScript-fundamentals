//1-challange

/* let animals = ["Dog", "Cat", "Elephant", "Lion"];
for (let i = 0; i < animals.length; i++) {
  console.log("Awesome " + animals[i] + ".");
}
console.log("That is all"); */

//2-challange
let alphabet = "abcdefghijklmnopqrstuvwxvy";
let randomString = "";

while (randomString.length < alphabet.length) {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  randomString += alphabet[randomIndex];
}

console.log("randomString is " + randomString);
