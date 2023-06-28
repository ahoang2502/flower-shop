const products = [
  {
    name: "flower pot",
    discount: "-10%",
    img: "./images/img-1.jpg",
    price: "$12.99",
    priceBefore: "$15.99",
  },
  {
    name: "flower pot",
    discount: "-10%",
    img: "./images/img-2.jpg",
    price: "$12.99",
    priceBefore: "$15.99",
  },
  {
    name: "flower pot",
    discount: "-10%",
    img: "./images/img-3.jpg",
    price: "$12.99",
    priceBefore: "$15.99",
  },
  {
    name: "flower pot",
    discount: "-15%",
    img: "./images/img-4.jpg",
    price: "$12.99",
    priceBefore: "$15.99",
  },
  {
    name: "flower pot",
    discount: "-5%",
    img: "./images/img-5.jpg",
    price: "$12.99",
    priceBefore: "$15.99",
  },
  {
    name: "flower pot",
    discount: "-20%",
    img: "./images/img-6.jpg",
    price: "$12.99",
    priceBefore: "$15.99",
  },
  {
    name: "flower pot",
    discount: "-17%",
    img: "./images/img-7.jpg",
    price: "$12.99",
    priceBefore: "$15.99",
  },
  {
    name: "flower pot",
    discount: "50%",
    img: "./images/img-8.jpg",
    price: "$12.99",
    priceBefore: "$15.99",
  },
  {
    name: "flower pot",
    discount: "-15%",
    img: "./images/img-9.jpg",
    price: "$12.99",
    priceBefore: "$15.99",
  },
];
const reviews = [
  {
    name: "john deo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibusarchitecto eveniet minima ratione repudiandae tenetur totam nullavoluptatibus nemo ipsum.",
    img: "./images/pic-1.png",
  },
  {
    name: "john deo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibusarchitecto eveniet minima ratione repudiandae tenetur totam nullavoluptatibus nemo ipsum.",
    img: "./images/pic-2.png",
  },
  {
    name: "john deo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibusarchitecto eveniet minima ratione repudiandae tenetur totam nullavoluptatibus nemo ipsum.",
    img: "./images/pic-3.png",
  },
  {
    name: "john deo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibusarchitecto eveniet minima ratione repudiandae tenetur totam nullavoluptatibus nemo ipsum.",
    img: "./images/pic-3.png",
  },
];

const boxContainer = document.querySelector(".box-container");
const boxReview = document.querySelector(".box-review");

window.addEventListener("DOMContentLoaded", function () {
  displayProducts(products);
  displayReviews(reviews);
});

function displayProducts(products) {
  let displayProduct = products.map(function (item) {
    return `<div class="box">
          <span class="discount">${item.discount}</span>
          <div class="image">
            <img src=${item.img} alt="" />
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="cart-btn">add to cart</a>
              <a href="#" class="fas fa-share"></a>
            </div>
          </div>

          <div class="content">
            <h3>${item.name}</h3>
            <div class="price">${item.price} <span>${item.priceBefore}</span></div>
          </div>
        </div>`;
  });

  displayProduct = displayProduct.join("");
  boxContainer.innerHTML = displayProduct;
}

function displayReviews(reviews) {
  let displayReview = reviews.map(function (review) {
    return `<div class="box">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p>
            ${review.text}
          </p>
          <div class="user">
            <img src=${review.img} alt="" />
            <div class="user-info">
              <h3>${review.name}</h3>
              <span>happy customer</span>
            </div>
          </div>
          <span class="fas fa-quote-right"> </span>
        </div>`;
  });

  displayReview = displayReview.join("");
  boxReview.innerHTML = displayReview;
}


// Functionality

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')

const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // navToggle.classList.toggle("show-links");
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav");



window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if(scrollHeight > 72){
    navToggle.classList.add('nav-toggle-show')
  }
  else{
    navToggle.classList.remove("nav-toggle-show");
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    //prevent default
    event.preventDefault();

    //navigate to specific spots
    //slice(1) - start from index of 1
    const id = event.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    //calculate the height to scroll exactly to the section
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 71) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.style.height = 0;
  });
});