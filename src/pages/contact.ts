export function renderContact(): HTMLElement{
    const div = document.createElement('div');
    div.innerHTML = `
    <main class="">
      <!-- Breadcrumb -->
      <div class="container mx-auto px-6 py-3">
        <div class="flex items-center text-sm">
          <a href="/" class="text-gray-500 hover:text-gray-800">Home</a>
          <span class="mx-2 text-gray-500">/</span>
          <a href="./contact.html" class="text-gray-800">Contact</a>
        </div>
      </div>

      <!-- Contact Section -->
      <section class="container mx-auto px-6 py-10">
        <div
          class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8"
        >
          <!-- Contact Info Card -->
          <div class="md:w-1/3 bg-white p-8 rounded-lg shadow-md" data-aos="fade-down-right">
            <!-- Call To Us -->
            <div class="mb-10">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-secondary2 rounded-full flex items-center justify-center mr-4"
                >
                  <i class="fas fa-phone text-white"></i>
                </div>
                <h3 class="text-xl font-bold">Call To Us</h3>
              </div>
              <p class="text-gray-600 mb-3">
                We are available 24/7, 7 days a week.
              </p>
              <p class="text-gray-600 mb-3">Phone: +8801611112222</p>
              <div class="border-t border-gray-200 my-6"></div>
            </div>

            <!-- Write To US -->
            <div>
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-secondary2 rounded-full flex items-center justify-center mr-4"
                >
                  <i class="fas fa-envelope text-white"></i>
                </div>
                <h3 class="text-xl font-bold">Write To US</h3>
              </div>
              <p class="text-gray-600 mb-3">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p class="text-gray-600 mb-2">Emails: customer@exclusive.com</p>
              <p class="text-gray-600">Emails: support@exclusive.com</p>
            </div>
          </div>

          <!-- Contact Form -->
          <div
            class="md:w-2/3 bg-white p-8 rounded-lg shadow-md border border-blue-100"
            data-aos="fade-up-left"
          >
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    class="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secbg-secondary2"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email *"
                    class="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secbg-secondary2"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone *"
                    class="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secbg-secondary2"
                  />
                </div>
              </div>
              <div>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  class="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secbg-secondary2"
                ></textarea>
              </div>
              <div class="flex justify-end">
                <button
                  type="submit"
                  class="bg-secondary2 text-white px-8 py-3 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
    `
    return div
}