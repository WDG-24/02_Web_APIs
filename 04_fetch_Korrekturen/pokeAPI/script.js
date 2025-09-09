const pokeContainerEl = document.getElementById('pokemon-container');

const renderPokeCard = (data) => {
  const html = `
    <article class="bg-teal-900 text-stone-100 flex flex-col items-center rounded-xl shadow">
          <img src="${data.sprites.front_shiny}" alt="">
          <h2 class="font-semibold capitalize">${data.name}</h2>
          <div class="flex gap-2 items-center justify-between w-full px-3">
            <label for="hp">HP</label>
            <meter value="${data.stats[0].base_stat}" max="100" id="hp">HP</meter>
          </div>
          <div class="flex gap-2 items-center justify-between w-full px-3">
            <label for="attack">Attack</label>
            <meter class="[&::-webkit-meter-optimum-value]:bg-red-500" value="${data.stats[1].base_stat}" max="100" id="attack">Attack</meter>
          </div>
          <div class="flex gap-2 items-center justify-between w-full px-3 pb-3">
            <label for="defense">Defense</label>
            <meter class="[&::-webkit-meter-optimum-value]:bg-blue-500" value="${data.stats[2].base_stat}" max="100"
              id="defense">Defense</meter>
          </div>
        </article>
  `;

  pokeContainerEl.insertAdjacentHTML('beforeend', html);
};

// METHODE 1: For-Loop mit Promises (.then/.catch)
// for (let i = 1; i < 26; i++) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//     .then((res) => {
//       if (!res.ok) throw new Error('Fetching pokemon failed');
//       return res.json(); // Response zu JSON konvertieren
//     })
//     .then((data) => renderPokeCard(data)) // Pokemon-Karte rendern
//     .catch((error) => console.log(error)); // Fehlerbehandlung
// }

// METHODE 2: While-Loop mit async/await
// let i = 1;
// const fetchPokemon = async () => {
//   try {
//     while (i < 10) {
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//       const data = await res.json();
//       renderPokeCard(data); // Sofort rendern - Reihenfolge nicht garantiert
//       i++;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// METHODE 3: Sequenzielles Fetching mit korrekter Reihenfolge
// Array für 25 Pokemon erstellen (Index 0-24)
const pokeArr = Array(25).fill(0);

// Einzelnes Pokemon fetchen und im Array speichern
const fetchPokemonData = async (pokeId) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    const data = await res.json();
    // Pokemon an korrekter Position speichern (ID 1 = Index 0)
    pokeArr[data.id - 1] = data;
  } catch (error) {
    console.log(error);
  }
};

// Sequenziell alle Pokemon fetchen (einer nach dem anderen)
const fetchInLoop = async () => {
  for (let i = 1; i < 26; i++) {
    await fetchPokemonData(i); // Warten bis aktueller Request fertig ist
  }
};

// Erst alle Pokemon fetchen, dann alle gleichzeitig rendern
fetchInLoop().then(() => {
  pokeArr.forEach((p) => renderPokeCard(p));
});

// METHODE 4: Paralleles Fetching mit Promise.all (auskommentiert)
// Alle Requests gleichzeitig starten für bessere Performance
// try {
//     const pokemonPromises = [];
//     for (let i = 1; i <= 25; i++) {
//       pokemonPromises.push(fetch(`${API_URL}${i}`).then((res) => res.json()));
//     }
//
//     // Warten bis ALLE Requests fertig sind
//     const allPokemon = await Promise.all(pokemonPromises);
//     allPokemon.forEach((p) => renderPokeCard(p));
//   }
