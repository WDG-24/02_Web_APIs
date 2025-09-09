// DOM-Elemente selektieren
const comicContainerEl = document.getElementById('comic-container');
const getComicBtn = document.getElementById('get-comic');

// Funktion zum Rendern eines Comics
const renderComic = (comicData) => {
  // Destructuring: Daten aus dem API-Response extrahieren
  const { img, alt, title, year, month, day } = comicData;

  const date = new Date(year, month, day);
  // Datum im deutschen Format formatieren
  const formattedDate = Intl.DateTimeFormat('de-DE').format(date);

  // HTML-String für den Comic zusammenbauen
  const html = `
  <figure class="h-full">
    <img class="h-full w-full" src="${img}"
      alt="${alt}">
    <figcaption class="contain-inline-size flex justify-between"><span>${title}</span>
      <time datetime="${year}-${month}-${day}">Published on ${formattedDate}</time>
    </figcaption>
  </figure>`;

  // HTML am Anfang des Containers einfügen
  comicContainerEl.insertAdjacentHTML('afterbegin', html);
};

// Funktion zum Anzeigen von Fehlermeldungen
const renderError = (message) => {
  // Container leeren (alle Kindelemente entfernen)
  comicContainerEl.replaceChildren();
  const html = `
  <p class="p-3 bg-slate-800 border border-b-red-500">${message}</p>
`;
  comicContainerEl.insertAdjacentHTML('afterbegin', html);
};

// PROMISE-KETTE (auskommentiert - klassischer .then()/.catch() Ansatz)
// fetch('https://xkcd-api-ridvanaltun.vercel.app/api/comics/random')
//   .then((response) => {
//     // Prüfen ob Request erfolgreich war
//     if (!response.ok) throw new Error('Failed to fetch. Try again');
//     return response.json(); // JSON parsen
//   })
//   .then((data) => renderComic(data)) // Comic rendern
//   .catch((err) => renderError(err.message)).finally(); // Fehler abfangen

// ASYNC/AWAIT - moderne Alternative zu Promise-Ketten
async function getComic() {
  // Container leeren vor neuem Request
  comicContainerEl.replaceChildren();
  // Button während Request deaktivieren (verhindert Doppelklicks)
  getComicBtn.disabled = true;

  try {
    // fetch() gibt immer ein Promise zurück - await wartet auf Auflösung
    const res = await fetch('https://xkcd-api-ridvanaltun.vercel.app/api/comics/random');

    // HTTP-Status prüfen (fetch wirft nur bei Netzwerkfehlern, nicht bei 404, 500 etc.)
    if (!res.ok) throw new Error('Failed to fetch. Try again');

    // JSON parsen - auch das ist asynchron, daher await
    const data = await res.json();

    // Comic mit den erhaltenen Daten rendern
    renderComic(data);
  } catch (err) {
    // Alle Fehler (Netzwerk, JSON-Parsing, HTTP-Status) hier abfangen
    renderError(err.message);
  } finally {
    // finally wird IMMER ausgeführt (bei Erfolg UND Fehler)
    // Button wieder aktivieren
    getComicBtn.disabled = false;
  }
}

// Beim Laden der Seite direkt einen Comic laden
getComic();

// Event Listener: Bei Klick auf Button neuen Comic laden
getComicBtn.addEventListener('click', getComic);

// Demonstriert: Synchroner Code läuft sofort (nicht blockierend)
console.log('console.log() im synchronen Code');

// PROMISE-BEISPIEL (zeigt wie Promises manuell erstellt werden)
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Im Timeout');
//
//     if (Math.random() < 0.9) reject('FEHLSCHLAG');
//
//     resolve('ERFOLG!');
//   }, 1000);
// });

// Promise verwenden mit .then() und .catch()
// console.log(myPromise); // Zeigt Promise-Objekt
// myPromise.then((data) => console.log(data)).catch((err) => console.error(err));
