"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randerService = randerService;
function randerService() {
    const div = document.createElement('div');
    function fetchProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = yield response.json();
                console.log('Fetched service data:', data);
                return data.products;
            }
            catch (error) {
                console.error('Fetch error:', error);
                return [];
            }
        });
    }
    div.innerHTML = `<p>Loading services...</p>`;
    function renderCards(products) {
        console.log('Rendering products:', products);
        div.innerHTML = '';
        const grid = document.createElement('div');
        grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] m-auto";
        products.forEach((product) => {
            console.log(product.description);
            const card = document.createElement('div');
            card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.title}" width="300" height="300" />
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>Price: ${product.price}$</p>
    `;
            grid.appendChild(card);
        });
        div.appendChild(grid);
    }
    (() => __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield fetchProducts();
            renderCards(products);
        }
        catch (error) {
            console.error("Error:", error);
        }
    }))();
    return div;
}
