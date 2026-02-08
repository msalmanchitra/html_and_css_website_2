let cart = [];

document.querySelectorAll(".product button, .product-card button").forEach(button => {
  button.addEventListener("click", function () {
    
    const card = this.closest(".product, .product-card");
    const name = card.querySelector("h3").innerText;
    const priceText = card.querySelector(".price") 
        ? card.querySelector(".price").innerText 
        : card.querySelector("p").innerText;

    const price = parseInt(priceText.replace(/\D/g, ""));

    const item = {
      name: name,
      price: price
    };

    cart.push(item);

    alert(name + " added to cart 🛒");

    console.log(cart);
  });
});

