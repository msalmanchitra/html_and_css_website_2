// Add to cart alert
document.querySelectorAll(".product button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Product added to cart 🛒");
  });
});

// Search Filter
let search = document.querySelector(".search-box input");

if(search){
  search.addEventListener("keyup", function(){
    let value = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(p => {
      let name = p.querySelector("h3").innerText.toLowerCase();
      p.style.display = name.includes(value) ? "block" : "<script>
if(localStorage.getItem("isLoggedIn") !== "true"){
   window.location.href = "login.html";
}
</script>
none";
    });
  });
}
