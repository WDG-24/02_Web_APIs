// console.log() funktioniert auch in Node als Output.
// Eine Alternative wäre process.stdout.write('Hello!\n');
console.log('Hallo vom Beispiel');

// Zugriff auf den userInput
// Wenn ein Node-Script ausgeführt wird, werden alle Argumente
// im Array process.argv gesammelt.
// Terminal:    node      my-script.js  userInput1 userInput2
// argv:   [path_to_node path-to_script userInput1 userInput2]
// const [, , ...userInput] = process.argv;
const userInput = process.argv.slice(2);

console.log(userInput);

// Argumente sind immer strings.
// Wenn ihr in der Argumentliste einen bestimmten Datentypen erwartet,
// z.B. eine Zahl an erster Stelle,
// müsst ihr selbst den Wert selbst konvertieren.
const someNumber = userInput[0];
const parsedNumber = parseInt(someNumber);

// Überprüfung, ob parsedNumber wirklich eine Zahl ist
// Alternative isNaN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
if (!Number.isFinite(parsedNumber)) {
  // return; // Beendet Script ohne Fehlercode
  process.exit(1); // Beendet Script mit Fehlercode
}

console.log('Weiterer Code');
