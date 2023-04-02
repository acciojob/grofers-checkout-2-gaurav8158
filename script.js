//your code here
// Get all the price elements from the table
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

// Initialize a variable to store the total price
let totalPrice = 0;

// Loop through each price element and add its value to the total price
priceElements.forEach((element) => {
  totalPrice += Number(element.textContent);
});

// Set the total price in the table
const totalElement = document.querySelector('[data-ns-test="grandTotal"]');
totalElement.textContent = totalPrice;