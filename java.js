
// Get all the necessary elements
const items = document.querySelectorAll('.item');
const totalPriceElement = document.getElementById('total-price');

// Function to update the total price
function updateTotalPrice() {
    let totalPrice = 0;
    items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseInt(item.querySelector('.item-price').textContent.slice(1));
        totalPrice += quantity * price;
    });
    totalPriceElement.textContent = '$' + totalPrice;
}

// Attach event listeners to each item
items.forEach(item => {
    const subtractButton = item.querySelector('.subtract-btn');
    const addButton = item.querySelector('.add-btn');
    const deleteButton = item.querySelector('.delete-btn');
    const likeButton = item.querySelector('.like-btn');

    let quantity = parseInt(item.querySelector('.quantity').textContent);

    subtractButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            item.querySelector('.quantity').textContent = quantity;
            updateTotalPrice();
        }
    });

    addButton.addEventListener('click', () => {
        quantity++;
        item.querySelector('.quantity').textContent = quantity;
        updateTotalPrice();
    });

    deleteButton.addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
    });

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
    });
});
