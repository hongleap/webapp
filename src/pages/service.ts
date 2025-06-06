export function renderService():HTMLElement{
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
      const response = await fetch('https://https://fakestoreapi.in/api/products.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched service data:', data);
      return data.products as Products[];
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  }
// Set initial loading state
  div.innerHTML = `<p>Loading services...</p>`;

  function renderCards(products: Products[]) {
    console.log('Rendering products:', products);

  // Clear previous content and create a grid container
  div.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] m-auto";

  products.forEach((product) => {
    console.log(product.description);
    const card = document.createElement('div');
    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.title}" width="300" height="350" />
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>Price: ${product.price}$</p>
    `;
    grid.appendChild(card);
  });

  div.appendChild(grid);
}

  // Main execution
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