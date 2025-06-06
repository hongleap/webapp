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
        <div class="rounded-md gap-4 shadow-sm cursor-pointer hover:shadow-md transition">
          <div class="bg-gray-200">
            <img src="${imageUrl}" alt="${product.title}" width="300" height="200" />
          </div>
          <div class="px-4 py-2">
            <h2 class="text-blue-600 font-bold">${product.title.slice(0, 15)}...</h2>
            <p>${product.description.slice(0, 50)}...</p>
            <p class="text-blue-600 font-bold">Price: ${product.price}$</p>
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
