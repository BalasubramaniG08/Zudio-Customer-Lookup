// Define Customer class
class Customer {
  constructor(name, mobile, offer) {
    this.name = name;
    this.mobile = mobile;
    this.offer = offer;
  }

  buyingClothes() {
    return `${this.name} bought clothes and received: ${this.offer}`;
  }
}

// Create 3 customer objects
const customers = [
  new Customer("Customer 1", "11111", "10% off on next purchase"),
  new Customer("Customer 2", "22222", "Buy 1 Get 1 Free"),
  new Customer("Customer 3", "33333", "Free cap with ₹1000+ shopping"),
];

// Search function
function findCustomer() {
  const input = document.getElementById("mobileInput").value.trim();
  const resultDiv = document.getElementById("result");

  const customer = customers.find((c) => c.mobile === input);

  if (customer) {
    resultDiv.innerHTML = `
      <div class="result-line"><strong>Name:</strong> ${customer.name}</div>
      <div class="result-line"><strong>Mobile:</strong> ${customer.mobile}</div>
      <div class="result-line"><strong>Offer:</strong> ${customer.offer}</div>
      <div class="result-line"><strong>Status:</strong> ${customer.buyingClothes()}</div>
    `;
  } else {
    resultDiv.innerHTML = `<div style="color:red;">Customer not found.</div>`;
  }
}
