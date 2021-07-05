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

//Login Form Validation
function Loginvalidate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == null || password == "") {
        alert("Username and password must be filled out");
        return false;
    }
}

//Signup Form Validation

function SignupValidate() {
    var fullname = document.getElementById("fullname").value;
    var lusername = document.getElementById("lusername").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var contact = document.getElementById("contact").value;
    var lpassword = document.getElementById("lpassword").value;
    var cfpassword = document.getElementById("cfpassword").value;

    if (fullname == null || fullname == "") {
        alert("Please provide your full name");
        return false;
    }
    
    if (lusername == null || lusername == "") {
        alert("Username must be filled out");
        return false;
    }
    
    if (email == null || email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (address == null || address == "") {
        alert("Address must be filled out");
        return false;
    }

    if (contact == null || contact == "") {
        alert("Contact must be filled out");
        return false;
    }
    
    if (password == null || password == "") {
        alert("Password must be filled out");
        return false;
    }

    if (lpassword == null || lpassword == "") {
        alert("Password must be filled out");
        return false;
    }

    if (cfpassword == null || cfpassword == "") {
        alert("Please confirm your password");
        return false;
    }
}