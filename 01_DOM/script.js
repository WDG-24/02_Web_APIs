// Element mit CSS-Selektor auswählen
const legendEl = document.querySelector('legend');

// console.dir(legendEl);
// alert('Stop');

// Textinhalt eines Elements ändern
legendEl.textContent = 'Hallo, Leute';
// Inline-Styles setzen
legendEl.style.color = 'red';

// CSS-Klasse hinzufügen
legendEl.classList.add('font-bold');

// const formEl = document.querySelector('#number-guess-form');
// Element über ID auswählen (Alternative zu querySelector)
const formEl = document.getElementById('number-guess-form');
// console.dir(formEl);

// Alle div-Elemente auswählen - verschiedene Methoden
const nodeList = document.querySelectorAll('div');
const htmlCollection = document.getElementsByTagName('div');

// Neues Element erstellen und zum DOM hinzufügen
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

// console.log(nodeList);
// console.log(htmlCollection);

const datalistEl = document.getElementById('possible-numbers');

// Schleife: Mehrere Elemente dynamisch erstellen
for (let i = 1; i <= 100; i++) {
  const newOption = document.createElement('option');
  newOption.value = i;
  // Neues Element als Kind anhängen
  datalistEl.appendChild(newOption);
}

// console.dir(formEl.children[0].children[3]);
// console.log(formEl.querySelector('datalist'));
// console.log(document.querySelector('form fieldset > datalist'));
// console.log(document.querySelector('div'));

const resultEl = document.getElementById('result');

// Event Listener für Klick-Events hinzufügen
resultEl.addEventListener('click', () => {
  // alert('Geklickt');
  // Textinhalt erweitern mit +=
  resultEl.textContent += '?';

  // Toast-Nachricht erstellen
  const toast = document.createElement('div');
  // Mehrere CSS-Klassen auf einmal hinzufügen
  toast.classList.add('border-4', 'p-4', 'border-b-red-600', 'rounded', 'shadow', 'bg-indigo-950', 'text-white');
  toast.textContent = 'Justus Jonas';

  // View Transition (Animation) beim Hinzufügen (neue Browser API)
  document.startViewTransition(() => {
    document.getElementById('toast-container').appendChild(toast);
  });

  // Toast nach 3 Sekunden wieder entfernen
  setTimeout(() => {
    document.startViewTransition(() => {
      toast.remove();
    });
  }, 3000);
});

// const numberToGuess = 25;
const numberToGuess = Math.floor(Math.random() * 99) + 1; // Zufallszahl von 1-100

// Event Listener für Formular-Abschicken
formEl.addEventListener('submit', (event) => {
  // Standard-Formular-Verhalten verhindern (Seite neu laden)
  event.preventDefault();

  // Eingabewert aus Formular lesen und zu Zahl konvertieren
  const userInput = parseInt(event.target.elements['number-input'].value);
  console.log(typeof userInput);

  // Früher Ausstieg wenn falsche Zahl (Guard-Clause)
  if (userInput !== numberToGuess) return;

  // Gewinn-Nachricht anzeigen
  resultEl.textContent = numberToGuess;

  // Erfolgs-Toast erstellen
  const toast = document.createElement('div');
  toast.classList.add('border-4', 'p-4', 'border-b-green-600', 'rounded', 'shadow', 'bg-indigo-950', 'text-white');
  toast.textContent = 'You WON! 🎉';

  // Toast mit Transition hinzufügen
  document.startViewTransition(() => {
    document.getElementById('toast-container').appendChild(toast);
  });
});
