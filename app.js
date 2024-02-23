// select elements
const cartBtn = document.querySelector('.add-to-cart');
const wishlistBtn = document.querySelector('.add-to-wishlist')
const productImg = document.querySelector('.product-img');
const colourOptionImages = document.querySelectorAll('.colour-options img');

let isAddedToTheCart = false;
cartBtn?.addEventListener('click', () => {
    if (!isAddedToTheCart) {
        cartBtn.textContent = 'Added To The Cart'
        isAddedToTheCart = true;
    }
    else {
        cartBtn.textContent = 'Add To Cart'
        isAddedToTheCart = false;
    }
});

let isAddedToWishlist = false;
wishlistBtn?.addEventListener('click', () => {
    if (!isAddedToWishlist) {
        isAddedToWishlist = true;
        alert('Product added to the wishlist.')
    }
    else {
        isAddedToWishlist = false;
        alert('Product removed from the wishlist');
    }
});


// Function to change the main product image
function changeProductImage(e) {
    let imgSource;

    // find the correct classname to update main image
    e.target.classList.value.includes()
    if (e.target.classList.value.includes('colour-option-1')) {
        imgSource = 'https://m.media-amazon.com/images/I/81xR1D4PUtL._SY879_.jpg'
    }
    else if (e.target.classList.value.includes('colour-option-2')) {
        imgSource = 'https://m.media-amazon.com/images/I/81REz-3xxpL._SY879_.jpg'
    }
    else if (e.target.classList.value.includes('colour-option-3')) {
        imgSource = 'https://m.media-amazon.com/images/I/81kEKkYN1NL._SY879_.jpg'
    }
    else if (e.target.classList.value.includes('colour-option-4')) {
        imgSource = 'https://m.media-amazon.com/images/I/91pLaCj1TEL._SY879_.jpg'
    }

    // Update the main product image source
    productImg.src = imgSource; 
}

// Loop through all colour option images and add click event listeners
colourOptionImages.forEach(img => {
    img.addEventListener('mouseover', changeProductImage);
});
