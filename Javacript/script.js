function displayProducts(products) {
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = products.map(product => `
        <div>
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <img src="${product.image}" alt="${product.title}" width="100">
            <br>
             <input type="number" id="quantity-${index}" value="1" min="1" style="width: 50px;"> <br>
        <button onclick="addToCart('${product.title}')">Add to Cart</button> <br>
        </div>
    `).join('');
}

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => displayProducts(products))
    .catch(error => console.error('Error fetching products:', error));