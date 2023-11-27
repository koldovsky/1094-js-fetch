const response = await fetch('api/products.json');
const products = await response.json();

function renderProducts(products, rate = 1) {
    let productsHtml = '';
    const productsContainer = document.querySelector('.products__list');
    for (const product of products) {
        productsHtml += `<article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${(product.price * rate).toFixed(2)}
                </button>
            </div>
        </article>`;
    }
    productsContainer.innerHTML = productsHtml;
}

let rates;
async function changeCurrency() {
    if (!rates) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        rates = (await response.json()).rates;
    }
    const selectedCurrency = document.querySelector('.products__currency').value;
    renderProducts(products, rates[selectedCurrency]);
}

document.querySelector('.products__currency').addEventListener('change', changeCurrency);


renderProducts(products);