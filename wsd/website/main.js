//sticky header
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
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