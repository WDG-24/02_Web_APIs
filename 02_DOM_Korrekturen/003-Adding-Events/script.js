// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

const rndTask = () => tasks[Math.floor(Math.random() * tasks.length)];

// 1.  **HTML Structure**:
//     *   Use the provided HTML structure which includes three buttons
//       and an empty `ul` element.

// 2.  **JavaScript Tasks**:
//     *   Attach an event to the first button to create a new
//       `li` in the `ul` with a random task from the provided array.
//     *   Make sure you scroll to the last task so
//       the last one is always visible!

const addItemBtn = document.getElementById('add-item-btn');
const listEl = document.getElementById('item-list');

addItemBtn.addEventListener('click', () => {
  // const entry = document.createElement('li');
  // entry.textContent = rndTask();
  // listEl.appendChild(entry);
  // listEl.lastChild.scrollIntoView();
  // entry.scrollIntoView();

  // entry.addEventListener('click', () => {
  //   entry.remove();
  // });

  const liHTML = `<li class="font-semibold p-3 border shadow rounded-2xl">
  <span>Task: </span> 
  ${rndTask()}</li>`;

  listEl.insertAdjacentHTML('beforeend', liHTML);
  listEl.lastChild.scrollIntoView();
});

listEl.addEventListener('click', (event) => {
  const targetEl = event.target.closest('li');
  if (!targetEl) return;

  targetEl.remove();
});

//     *   Attach an event to the second button to
//       display an alert with a custom message.
document.getElementById('alert-btn').addEventListener('click', () => {
  alert('Sie haben Show Alert geklickt');
});

//     *   Attach an event to the third button to output a
//       custom message to the console.
document.getElementById('console-btn').addEventListener('click', () => {
  console.log(rndTask());
});
