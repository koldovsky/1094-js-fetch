const products = [
    {
        id: 1,
        title: 'Baby Yoda',
        description: 'This is a high-quality vinyl sticker featuring Grogu, also known as Baby Yoda, from the popular TV series. Perfect for decorating laptops, notebooks, and more.',
        price: 10.99,
        image: 'img/baby-yoda.svg'
    },
    {
        id: 2,
        title: 'Banana',
        description: 'A fun and vibrant banana sticker, ideal for adding a touch of whimsy to your personal items. Made of durable material, great for indoor and outdoor use.',
        price: 11.99,
        image: 'img/banana.svg'
    },
    {
        id: 3,
        title: 'Girl',
        description: 'Artistic sticker featuring an illustrated girl in a unique style. This sticker adds a personal and artistic touch to any surface it\'s applied to.',
        price: 12.99,
        image: 'img/girl.svg'
    },
    {
        id: 4,
        title: 'Viking',
        description: 'Embrace your inner warrior with this Viking-themed sticker. Ideal for history buffs and fans of Norse mythology, it\'s a great way to personalize your gear.',
        price: 13.99,
        image: 'img/viking.svg'
    }
];


function renderProducts(products) {
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
                    Buy - ${product.price}
                </button>
            </div>
        </article>`;
    }
    productsContainer.innerHTML = productsHtml;
}

renderProducts(products);