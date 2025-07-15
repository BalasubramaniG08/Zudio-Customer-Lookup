// Define Customer class
class Customer {
  constructor(name, mobile, offer,place) {
    this.name = name;
    this.mobile = mobile;
    this.offer = offer;
    this.place = place;
  }

  buyingClothes() {
    return `${this.name} bought clothes and received: ${this.offer}`;
  }
}

// Create 3 customer objects
const customers = [
  new Customer("Customer 1", "11111", "10% off on next purchase", "Chennai"),
  new Customer("Customer 2", "22222", "Buy 1 Get 1 Free", "Coimbatore"),
  new Customer("Customer 3", "33333", "Free cap with ₹1000+ shopping" , "Trichy")
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
      <div class="result-line"><strong>Place:</strong> ${customer.place}</div>
      <div class="result-line"><strong>Offer:</strong> ${customer.offer
      }</div>     
      <div class="result-line"><strong>Status:</strong> ${customer.buyingClothes()}</div>
    `;
  } else {
    resultDiv.innerHTML = `<div style="color:red;">Customer not found.</div>`;
  }
}

alert(customer.place);
