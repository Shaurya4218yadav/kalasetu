document,addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("products-container");
    const form = Document.getElementByID("sell-product-form");

    let products = [];
    
    function renderProducts() {
        productContainer.innerHTML = "";
        products.forEach((product, index) =>{
            const productElement = document.createElement("div");
            productElement.ClassList.add("product");
            productElement.innerHTML = '<img src="${product.image}" alt="${product.name}"> <h3> ${product.name}</h3> <p>Price: $${product.price}</p><button onclick="removeProduct(${index})">Remove</button>';
            productContainer.appendChild(productElement);
      });
    }

    form.AddEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementByid("product-name").value;
        const price = document.getElementByid("product-price").value;
        const image = document.getElementByid("product-image").value;

        const newProduct = {name,price,image};
        products.push(newProduct);
        renderProducts();
        form.reset();
    })

    window.removeproduct = (index) => {
        products.splice(index, 1);
        renderProducts();
    };
});