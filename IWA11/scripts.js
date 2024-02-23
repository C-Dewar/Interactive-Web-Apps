// // script.js

// // Unedited code:

// const 1-root = document(order1),
// const 1-biscuits: document(biscuits),
// const 1-donuts: document(donuts),
// const 1-pancakes: document(pancakes),
// const 1-status: document(status)

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending

const html = {
    orders: {
        1: {
            root: document.querySelector('[data-key="order1"]'),
            biscuits: document.querySelector('[data-key="order1"] .biscuits .count'),
            donuts: document.querySelector('[data-key="order1"] .donuts .count'),
            pancakes: document.querySelector('[data-key="order1"] .pancakes .count'),
            status: document.querySelector('[data-key="order1"] .status dd')
        },   
        2: {
            root: document.querySelector('[data-key="order2"]'),
            biscuits: document.querySelector('[data-key="order2"] .biscuits .count'),
            donuts: document.querySelector('[data-key="order2"] .donuts .count'),
            pancakes: document.querySelector('[data-key="order2"] .pancakes .count'),
            status: document.querySelector('[data-key="order2"] .status dd')
        }, 
        3: {
            root: document.querySelector('[data-key="order3"]'),
            biscuits: document.querySelector('[data-key="order3"] .biscuits .count'),
            donuts: document.querySelector('[data-key="order3"] .donuts .count'),
            pancakes: document.querySelector('[data-key="order3"] .pancakes .count'),
            status: document.querySelector('[data-key="order3"] .status dd')
        }, 
    },
}

const data = {
    1: {
        biscuits: parseInt(html.orders[1].root.dataset.biscuits),
        donuts: parseInt(html.orders[1].root.dataset.donuts),
        pancakes: parseInt(html.orders[1].root.dataset.pancakes),
        status: html.orders[1].root.dataset.delivered === 'true' ? 'Delivered' : 'Pending',
    }, 
    2: {
        biscuits: parseInt(html.orders[2].root.dataset.biscuits),
        donuts: parseInt(html.orders[2].root.dataset.donuts),
        pancakes: parseInt(html.orders[2].root.dataset.pancakes),
        status: html.orders[2].root.dataset.delivered === 'true' ? 'Delivered' : 'Pending',
    }, 
    3: {
        biscuits: parseInt(html.orders[3].root.dataset.biscuits),
        donuts: parseInt(html.orders[3].root.dataset.donuts),
        pancakes: parseInt(html.orders[3].root.dataset.pancakes),
        status: html.orders[3].root.dataset.delivered === 'true' ? 'Delivered' : 'Pending',
    }, 
}

html.orders[1].biscuits.innerText = data[1].biscuits,
html.orders[1].donuts.innerText = data[1].donuts,
html.orders[1].pancakes.innerText = data[1].pancakes,
html.orders[1].status.innerText = data[1].status,

html.orders[2].biscuits.innerText = data[2].biscuits,
html.orders[2].donuts.innerText = data[2].donuts,
html.orders[2].pancakes.innerText = data[2].pancakes,
html.orders[2].status.innerText = data[2].status,

html.orders[3].biscuits.innerText = data[3].biscuits,
html.orders[3].donuts.innerText = data[3].donuts,
html.orders[3].pancakes.innerText = data[3].pancakes,
html.orders[3].status.innerText = data[3].status