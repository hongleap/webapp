export function renderService(): HTMLElement {
  const div = document.createElement('div');

  type Products = {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
  };

  async function fetchProducts(): Promise<Products[]> {
    try {
      const api = await fetch('https://dummyjson.com/products');
      if (!api.ok) {
        throw new Error(`HTTP error status! : ${api.status}`);
      }
      const data = await api.json();
      return data.products;
    } catch (error) {
      console.error('Error fetching products: ', error);
      return [];
    }
  }

  function renderCards(products: Products[]) {
    div.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] m-auto";

    products.forEach((product) => {
      const card = document.createElement('div');
      const imageUrl = product.images?.[0] || 'https://via.placeholder.com/300x200';

      card.innerHTML = `
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="p-8 rounded-t-lg" src="${product.images}" alt="product image" />
        </a>
        <div class="px-5 pb-5">
        <h1 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h1>
        <a href="#">
        
        <p class="text-xl py-4 font-semibold tracking-tight text-gray-900 dark:text-white">${product.description.slice(0,50)}...</p>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
        </div>
        </div>
      `;

      card.addEventListener('click', () => {
        showProductDetail(product);
      });

      grid.appendChild(card);
    });

    div.appendChild(grid);
  }

  // Create modal container once (outside renderCards)
  const modal = document.createElement('div');
  modal.className = "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 hidden";
  modal.innerHTML = `
    <div class="bg-white rounded-lg w-[90%] m-auto relative p-6">
      <button id="close-modal" class="absolute top-4 right-4 text-lg font-bold text-gray-700 hover:text-red-500">&times;</button>
      <div id="modal-content"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalContent = modal.querySelector('#modal-content')!;
  const closeModalBtn = modal.querySelector('#close-modal')!;

  function showProductDetail(product: Products) {
    modalContent.innerHTML = `
      <div class="max-w-7xl mx-auto lg:px-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src="${product.images?.[0] || ''}" alt="${product.title}" class="w-full h-auto rounded-lg" />
        </div>
        <div class="text-lg grid gap-2 p-6">
          <h1 class="font-bold text-3xl mb-2 text-blue-600">${product.title}</h1>
          <p class="mb-4">${product.description}</p>
          <p class="font-bold text-3xl mb-4 text-blue-600">Price: $${product.price}</p>
          <button class="bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700">Buy Now</button>
          <div class="">
            <div class="mb-4">
            <p class="font-medium mb-1">Size:</p>
            <div class="flex gap-2">
             <button class="border px-3 py-1 rounded hover:bg-gray-100">
               XS
              </button>
              <button class="border px-3 py-1 rounded hover:bg-gray-100">
              S
              </button>
              <button
              class="border px-3 py-1 rounded bg-secondary2 text-text"
            >
               M
            </button>
            <button class="border px-3 py-1 rounded hover:bg-gray-100">
            L
            </button>
            <button class="border px-3 py-1 rounded hover:bg-gray-100">
             XL
            </button>
            </div>
            </div>

            <!-- Quantity + Buy -->
                <div class="flex items-center gap-4 mb-4">
                  <input
                    type="number"
                    value="2"
                    min="1"
                    class="w-16 border rounded p-1 text-center"
                  />
                  <button
                    class="bg-secondary2 text-white px-6 py-2 rounded hover:bg-hover-button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
        </div>
      </div>
      
    `;
    modal.classList.remove('hidden');
  }

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  (async () => {
    try {
      const products = await fetchProducts();
      renderCards(products);
    } catch (error) {
      console.error("Error:", error);
    }
  })();

  return div;
}
