// **Objective**

// In this exercise, you will create a simple contact form and use JavaScript to handle the form submission, validate the fields, and display the submitted data.

// **Instructions:**

// * Add an event listener to handle form submission.
//     - Validate that all fields are not empty.
//     - If validation passes, output the form data to the console and display it in the `p` element as a list (`ul`)
//     - If not output an error message in the `p` element, style it as an error. Maybe something red and flashy?
//     - [Make sure to toggle the error and success styles](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)!
//     - Clear the form fields

const formEl = document.getElementById('contact-form');
const nameInputEl = document.getElementById('name');
const emailInputEl = document.getElementById('email');
const messageEl = document.getElementById('message');

const outputEl = document.getElementById('output');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  outputEl.innerHTML = '';
  outputEl.classList.remove('bg-green-500');
  outputEl.classList.remove('bg-red-500');

  const name = nameInputEl.value;
  const email = emailInputEl.value.trim();
  const message = messageEl.value;

  try {
    if (!name) throw new Error('Name is required');
    if (!email) throw new Error('Email is required');
    if (!message) throw new Error('Message is required');

    const outputHTML = `
    <li>${name}</li>
    <li>${email}</li>
    <li>${message}</li>
    `;
    outputEl.insertAdjacentHTML('afterbegin', outputHTML);
    outputEl.classList.add('bg-green-500');
    formEl.reset();
  } catch (error) {
    outputEl.textContent = error.message;
    outputEl.classList.add('bg-red-500');
  }
});
