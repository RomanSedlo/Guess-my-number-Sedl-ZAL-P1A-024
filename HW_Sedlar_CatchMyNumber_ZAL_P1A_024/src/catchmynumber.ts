
type RandIntType = (min: number, max: number) => number;

const randint: RandIntType = (min: number, max: number): number => {
    return min + Math.round(Math.random() * (max - min));
}

let a: number = 0;
let b = randint(0, 100)
console.log(b);

let Guess: function nguess(params: code) {
    a = Number(prompt("Zadej číslo: ", "0"));

    if (Number.isNaN(a)) {
        console.log("You entered a non-number");
    }
}

a = Number(prompt("Zadej číslo: ", "0"));

if (Number.isNaN(a)) {
    console.log("Zadali jste ne-číslo");
}

console.log(a);
do {
    if (a > b) {
        console.log("cislo je mensi")
        a = Number(prompt("Enter a number: ", "0"));

        if (Number.isNaN(a)) {
            console.log("You entered a non-number");
        }
    }
    else if (a < b) {
        console.log("cislo je vetsi")
        a = Number(prompt("Enter a number: ", "0"));

        if (Number.isNaN(a)) {
            console.log("You entered a non-number");
        }
    }

} while (a != b) if (a === b) {
    console.log("Zadali jste správné číslo na X. pokus!")
}