//* getting containers
const tbody = document.getElementById('tbody');
const totalCount = document.getElementById('total_count');
const totalPrice = document.getElementById('total_price');

//! sync
//* filling table
const fillTable = () => {

    //* cart
    const cart = [
        { name: 'iPad Air (64GB, Wi-Fi)', type: 'tablet', count: '1', price: '$600' },
        { name: 'HP Pavilion Laptop - 15t-eg100', type: 'laptop', count: '2', price: '$650' },
        { name: 'HP TABLET 11-BE0097NR', type: 'tablet', count: '2', price: '$550' }
    ];

    //* rows && cols
    cart.forEach(el => {

        const tr = document.createElement('tr');

        Object.entries(el).forEach(el => {

            const td = document.createElement('td');
            td.textContent = el[1];

            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    //* total
    const count = cart.map(el => +el.count).reduce((acc, curr) => acc + curr, 0);
    const price = cart.map(el => +el.price.slice(1)).reduce((acc, curr) => acc + curr, 0);

    totalCount.textContent = `count: ${count}`;
    totalPrice.textContent = `price: $${price}`;
};

fillTable()