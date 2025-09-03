// 1.  **Select Elements and Log to Console**:

//     *   Select the `h1` element inside the `.hero-content`
//     *   div and log it to the console.
const headerH1 = document.querySelector('.hero-content h1');

//     *   Select all the `a` elements inside the `.nav-list`
//     *   and log them to the console.
// const navLinks = document.querySelectorAll('.nav-list li a');
const navLinks = document.querySelectorAll('.nav-list li a');
console.log(navLinks);

//     *   Select the `.btn` element and log it to the console.
// const button = document.getElementsByClassName('btn')[0];
const button = document.querySelector('.btn');
console.log(button);

// 2.  **Modify Styles**:

//     *   Change the background-color of the `.header`
//     *   element to `#b5651d`.
const bgColor = document.querySelector('.header');
bgColor.style.backgroundColor = '#b5651d';

//     *   Change the font size of the `h1` element inside the
//     *   `.hero-content` div to `3rem`.
headerH1.style.fontSize = '3rem';

//     *   Change the text color of all `a` elements inside the
//     *   `.nav-list` to `#faf0e6`.
[...navLinks].forEach((element) => {
  element.style.color = '#faf0e6';
});

// 3.  **Add Content**:

//     *   Select the `.hero-content` div and add a new `p`
//     *   element with the text "Open daily from 7 AM to 9 PM."
//     *   inside it.
const heroContentEl = document.querySelector('.hero-content');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Open daily from 7 AM to 9 PM.';
heroContentEl.appendChild(newParagraph);
