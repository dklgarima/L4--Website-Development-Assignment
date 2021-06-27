//sticky header
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

//slider
let slideIndex = 0;
let slider = document.querySelector(".slider");
let slides = document.querySelector(".slides");
// alert(slides);
let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots span")

showslide();

function plusslide(position) {
    slideIndex += position;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = '-${slideIndex - 1}00%';
    dots[slideIndex - 1].classList.add("dot-active");
}

function currentslide(index) {
    if (index > slide.length) {
        index = 1;
    }
    else if (index < 1) {
        index = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = '-${index - 1}00%';
    dots[index - 1].classList.add("dot-active");

    slideIndex = index;
}

function showslide() {
    slideIndex++;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = '-${slideIndex - 1}00%';
    dots[slideIndex - 1].classList.add("dot-active");
}


let interval = setInterval(()=> {
    showslide();
} , 3000);   // Change every image after 3 seconds

slider.addEventListener("mouseover" , ()=> {
    clearInterval(interval);     // onHover Stop Changing every image after 3 seconds 
});

slider.addEventListener("mouseout" , ()=> {
    interval = setInterval(()=> {
        showslide();   
    } , 3000);    // on mouseout from slide then again start Changing every image after 3  seconds 
});

//password toggle
var state= false;
function toggle(){
    if(state){
	document.getElementById("password").setAttribute("type","password");
	document.getElementById("eye").style.color='#7a797e';
	state = false;
     }
     else{
	document.getElementById("password").setAttribute("type","text");
	document.getElementById("eye").style.color='#5887ef';
	state = true;
     }
}

//search filter
const btns = document.querySelectorAll('.store-btn');
const storeProducts = document.querySelectorAll('.store-product');

for (i = 0; i < btns.length; i++) { //using loop to look through all the buttons

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()

        const filter = e.target.dataset.filter;
        console.log(filter);

        storeProducts.forEach((product) => {
            if (filter === 'All') {
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

// SEARCH FILTER BY SEARCHING
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
// search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}