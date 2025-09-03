// Create the header element and its children
const header = document.createElement('header');

document.body.appendChild(header);

const navEl = document.createElement('nav');
header.appendChild(navEl);

const logoEl = document.createElement('a');
logoEl.textContent = 'Coffee Shop';
logoEl.href = '#';
logoEl.classList.add('logo');

navEl.appendChild(logoEl);

const ulEl = document.createElement('ul');
ulEl.classList.add('nav-list');

const navContent = ['Home', 'Menu', 'About', 'Contact'];

navContent.forEach((navText) => {
  const liEl = document.createElement('li');
  const aEl = document.createElement('a');

  liEl.style.marginLeft = '1.5rem';
  aEl.textContent = navText;

  liEl.appendChild(aEl);
  ulEl.appendChild(liEl);
});

navEl.appendChild(ulEl);

const menuLink = '/menu';

const heroHTML = `
<section class="hero">
<div class="hero-content">
<h1>Welcome to Our Coffee Shop</h1>
<p>Enjoy the best coffee in town.</p>
<a href="${menuLink}" class="btn">Explore Our Menu</a>
</div>
</section>
`;

console.log(document.querySelectorAll('p'));
document.body.insertAdjacentHTML('beforeend', heroHTML);

// document.body.innerHTML += heroHTML;

console.log(navEl);
