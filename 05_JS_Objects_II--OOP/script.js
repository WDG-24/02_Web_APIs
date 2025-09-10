// Einfaches Objekt-Literal (statische Eigenschaften)
// const marbleTrack = {
//   name: 'Marble Track',
//   price: 65.48,
//   url: 'marb.le',
//   notes: {
//     color: '#13e087',
//   },
// };

// console.log(marbleTrack.notes.color);

// Dynamisches Hinzufügen von Eigenschaften zu Objekten
// marbleTrack.myProperty = 42;
// console.log(marbleTrack);

// Dynamisches Hinzufügen von Methoden zu Objekten
// marbleTrack.prepare = function () {
//   console.log(`Preparing this ${this.name} as a gift`);
// };
// marbleTrack.prepare();

// Konstruktor-Funktion (Vorlage für mehrere Objekte)
// function Gift(name, price, url) {
//   this.name = name;
//   this.price = price;
//   this.url = url;
// }

// const marbleTrack = new Gift("Marble Track", 65.24, "marb.le")
// console.log(marbleTrack)

// ===== ES2025 (ES6) Klassen =====

// Klassen-Definition: Blueprint für Gift-Objekte
class Gift {
  // Private Eigenschaft (# macht sie von außen nicht zugreifbar)
  #price;

  // constructor: wird beim Erstellen eines neuen Objekts aufgerufen
  constructor(name, price, url) {
    this.name = name; // Öffentliche Eigenschaft
    this.#price = price; // Private Eigenschaft setzen
    this.url = url; // Öffentliche Eigenschaft
  }

  // Getter: kontrollierter Zugriff auf private Eigenschaft
  get price() {
    // return this.#price;  // Einfache Rückgabe
    // Formatierte Ausgabe als Euro-Währung
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.#price);
  }

  // Setter: kontrolliertes Setzen der privaten Eigenschaft
  set price(value) {
    const parsedVal = Number.parseFloat(value);
    // Validierung: nur Zahlen erlaubt
    if (Number.isNaN(parsedVal)) throw new TypeError('Price must be a number');
    this.#price = parsedVal;
  }

  // Methode: Aktion die das Objekt ausführen kann
  prepare() {
    console.log(`Preparing this ${this.name} as a gift`);
    return this; // Method Chaining ermöglichen
  }

  // Weitere Methode mit Berechnung
  wrap() {
    const paperAmount = this.url.length * this.name.length * (this.#price / 10);
    console.log(`Wrapping this ${this.name} in ${paperAmount}m² of paper!`);
    return this; // Method Chaining ermöglichen
  }

  // toString: wird automatisch beim String-Conversion aufgerufen
  toString() {
    return `
    ${this.name}: Price: ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.#price)}
    Found on: ${this.url}`;
  }
}

// Objekt-Instanziierung: Neues Gift-Objekt erstellen
const marbleTrack = new Gift('Marble Track', 65.24, 'marb.le');
console.log(marbleTrack);

// Einzelne Methodenaufrufe
// marbleTrack.prepare();
// marbleTrack.wrap();

// Method Chaining: Methoden hintereinander aufrufen
marbleTrack.prepare().wrap();

// Beispiel für Method Chaining aus anderen Bereichen
// [(1, 2, 4, 5)].map()
// .find()
// .join();

// Getter/Setter testen
console.log(marbleTrack.price); // Getter aufrufen

// marbleTrack.price = 'Hallo welt';  // Würde Error werfen
marbleTrack.price = 42; // Setter aufrufen
console.log(marbleTrack.price); // Getter aufrufen

// ===== Vererbung (Inheritance) =====

// Kindklasse: erbt von Basisklasse Gift und erweitert die Funktionalität
class BirthdayGift extends Gift {
  // Private Eigenschaft der Kindklasse
  #birthday;

  // Konstruktor der Kindklasse
  constructor(name, price, url, birthday) {
    super(name, price, url); // Basis-Konstruktor aufrufen
    this.#birthday = birthday;
  }

  // Method Override: Basis-Methode überschreiben
  prepare() {
    console.log(`Preparing this ${this.name} as a birthday gift for ${this.#birthday}`);
    return this;
  }

  // Neue Methode nur in der Kindklasse
  give() {
    console.log('Giving the birthday gift');
  }
}

// Instanz der Kindklasse erstellen
const drill = new BirthdayGift('Bohrer', 30, 'drill.com', new Date('2025-02-20'));
console.log(drill.prepare()); // Überschriebene Methode wird aufgerufen

// marbleTrack.give()  // Würde Error werfen - Methode existiert nur in BirthdayGift
// drill.give()        // Funktioniert - Methode der Kindklasse

// toString wird automatisch aufgerufen beim String-Conversion
console.log(`${marbleTrack}`);

// Weitere mögliche Vererbungsebene
// class BirthdayGiftForKids extends BirthdayGift {
//   constructor(name, price, url, birthday) {
//     super(name, price, url, birthday);
//   }
// }
