const dropdown = document.getElementById('dropdown-container');
const content = document.getElementById('dropdown-content');
const navItems = document.querySelectorAll('#nav li[data-menu]');

const dropdownData = {
"shop-tea": [
    [
    `<strong><a href="#">Shop all Teas</a></strong>`,
    `<strong><a href="#">Top Sellers</a></strong>`
    ],
    [
    `<strong>By Category</strong>`,
    `<a href="#">Green Tea</a>`,
    `<a href="#">Herbal</a>`,
    `<a href="#">Black</a>`,
    `<a href="#">White</a>`,
    `<a href="#">Australian Grown</a>`
    ],
    [
    `<strong>Other Types</strong>`,
    `<a href="#">Shop all</a>`,
    `<a href="#">Chai</a>`,
    `<a href="#">Latte</a>`,
    `<a href="#">Hot chocolate</a>`
    ]
],
"tea-gifts": [
    [
    `<strong><a href="#">Shop All Gifts</a></strong>`
    ],
    [
    `<strong>Teaware</strong>`,
    `<a href="#">Tea bags</a>`,
    `<a href="#">Strainers</a>`,
    `<a href="#">Tea pots</a>`,
    `<a href="#">Tea flasks</a>`,
    `<a href="#">Handmade ceramics</a>`
    ],
    [
    `<strong>Occasions</strong>`,
    `<a href="#">Wedding gifts</a>`,
    `<a href="#">Gifts for family</a>`,
    `<a href="#">Gifts for friends</a>`
    ]
],
"about": [
    [
    `<strong>Our Identity</strong>`,
    `<a href="#">About us</a>`,
    `<a href="#">Media</a>`,
    `<a href="#">FAQs</a>`,
    `<a href="#">Sydney store</a>`
    ],
    [
    `<strong>Our Social</strong>`,
    `<a href="#">Community</a>`,
    `<a href="#">Tea blog</a>`,
    `<a href="#">Wedding Teas</a>`,
    ],
],
"contact": [
    [
    `<strong>Contact Us</strong>`,
    `<a href="#">E-Mail</a>`,
    `<a href="#">Phone</a>`,
    `<a href="#">Social Media</a>`
    ],
    [],
    []
]
};


let dropdownTimer;

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    clearTimeout(dropdownTimer);
    const key = item.getAttribute('data-menu');
    const columns = dropdownData[key];
    if (!columns) {
      dropdown.style.display = 'none';
      return;
    }
    content.innerHTML = columns.map(col =>
      `<div class="dropdown-column">${col.join('')}</div>`
    ).join('');
    dropdown.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    dropdownTimer = setTimeout(() => {
      dropdown.style.display = 'none';
    }, 100);
  });
});

dropdown.addEventListener('mouseenter', () => {
  clearTimeout(dropdownTimer);
  dropdown.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
  dropdown.style.display = 'none';
});

// On scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });