export function renderAbout(): HTMLElement{
    const div = document.createElement('div');
    div.innerHTML = `
        <main class="">
      <!-- Breadcrumb -->
      <div class="container mx-auto px-6 py-3">
        <div class="flex items-center text-sm">
          <a href="/" class="text-gray-500 hover:text-gray-800">Home</a>
          <span class="mx-2 text-gray-500">/</span>
          <span class="text-gray-800">About</span>
        </div>
      </div>

      <!-- Our Story Section -->
      <section class="container mx-auto px-6 py-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 pr-8" data-aos="fade-down-right">
            <h1 class="text-4xl font-bold mb-6">Our Story</h1>
            <p class="text-gray-700 mb-4">
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 millions customers across the region.
            </p>
            <p class="text-gray-700">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>
          <div class="md:w-1/2 mt-8 md:mt-0" data-aos="fade-up-left">
            <img
              src="https://cdn.dribbble.com/userupload/13121192/file/original-debc92111eefa2b479ff782039c60f1e.jpg?resize=400x0"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="container mx-auto px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Stat Card 1 -->
          <div
            class="stat-card bg-white rounded-lg shadow-md text-black  p-6 text-center duration-200 border border-blue-200 hover:border-no"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100  rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-3xl font-bold">10.5k</h3>
            <p>Sellers active our site</p>
          </div>
          <!-- Stat Card 2 -->
          <div
            class="stat-card bg-white rounded-lg shadow-md text-black  p-6 text-center duration-200 border border-blue-200 hover:border-no"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100  rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-3xl font-bold">33k</h3>
            <p>Monthly Productduct Sale</p>
          </div>
          <!-- Stat Card 3 -->
          <div
            class="stat-card bg-white rounded-lg shadow-md text-black p-6 text-center duration-200 border border-blue-200 hover:border-no"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-3xl font-bold">45.5k</h3>
            <p>Customer active in our site</p>
          </div>
          <!-- Stat Card 4 -->
          <div
            class="stat-card bg-white rounded-lg shadow-md text-black p-6 text-center duration-200 border border-blue-200 hover:border-no"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />                                                                              
            </div>
            <h3 class="text-3xl font-bold">25k</h3>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="container mx-auto px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div
            class="team-card bg-gray-50 rounded-lg p-6"
            data-aos="fade-up-right"
          >
            <div class="mb-4">
              <img
                src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?semt=ais_hybrid&w=740"
                alt="Team Member"
                class="w-full h-64 object-cover rounded-lg shadow"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-800">Tom Cruise</h3>
            <p class="text-gray-600 mb-3">Founder & Chairman</p>
            <div class="flex space-x-3">
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div
            class="team-card bg-gray-50 rounded-lg p-6"
            data-aos="fade-up-right"
          >
            <div class="mb-4">
              <img
                src="https://dy7glz37jgl0b.cloudfront.net/advice/images/39732cb0715c2a3b547785ccb83407e1-man-smiles-at-computer-hands-clasped_l.jpeg"
                alt="Team Member"
                class="w-full h-64 object-cover rounded-lg shadow"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-800">Emma Watson</h3>
            <p class="text-gray-600 mb-3">Managing Director</p>
            <div class="flex space-x-3">
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div
            class="team-card bg-gray-50 rounded-lg p-6"
            data-aos="fade-up-right"
          >
            <div class="mb-4">
              <img
                src="https://cdn.prod.website-files.com/64c90c3b6f011629401599b1/652d09aa1adab2cd93fde418_rodzaje-person-zakupowych.webp"
                alt="Team Member"
                class="w-full h-64 object-cover rounded-lg shadow"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-800">Will Smith</h3>
            <p class="text-gray-600 mb-3">Product Designer</p>
            <div class="flex space-x-3">
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="text-gray-600 hover:text-gray-800"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center mt-8 space-x-2">
          <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span class="w-2 h-2 bg-red-500 rounded-full"></span>
          <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </section>

      <!-- Services Section -->
      <section class="container mx-auto px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Service 1 -->
          <div
            class="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos="fade-down-left"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-lg font-bold text-gray-800 uppercase mb-2">
              Free and Fast Delivery
            </h3>
            <p class="text-gray-600">Free delivery for all orders over $140</p>
          </div>

          <!-- Service 2 -->
          <div
            class="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos="fade-down-right"
          >
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-lg font-bold text-gray-800 uppercase mb-2">
              24/7 Customer Service
            </h3>
            <p class="text-gray-600">Friendly 24/7 customer support</p>
          </div>

          <!-- Service 3 -->
          <div class="bg-white rounded-lg shadow-md p-6 text-center" data-aos="fade-up-left">
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"
            >
            <img
              src="https://i.pinimg.com/474x/e6/e4/df/e6e4df26ba752161b9fc6a17321fa286.jpg"
              alt="Two women shopping with bags on pink background"
              class="rounded-lg w-full h-auto shadow-lg"
            />
            </div>
            <h3 class="text-lg font-bold text-gray-800 uppercase mb-2">
              Money Back Guarantee
            </h3>
            <p class="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </section>
    </main>
    `
    return div;
}