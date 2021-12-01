<template>
  <div>
    <Navbar />
      <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-gray-100">
        <div class="bg-gray-100 inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 bg-gray-200">
          <svg class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice">
            <path d="M50 0H100L50 100H0L50 0Z"></path>
          </svg>
          <img
            class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl ">
          <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ">
            <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-red-600 sm:text-4xl sm:leading-none">
              Everything you<br class="hidden md:block" />
              can imagine
              <span class="inline-block text-deep-purple-accent-400">is real</span>
            </h2>
            <p class="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
            </p>
            <div class="flex items-center">
              <a
                href="/"
                class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-red-600  focus:shadow-outline focus:outline-none"
                :style="{color: '#fff'}"
              >
                Get started
              </a>
              <a href="/" aria-label="" class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-red-600">Learn more</a>
            </div>
          </div>
        </div>
      </div>

      <section class="w-full bg-red-400">
          <div class="container px-4 mx-auto">
              <div class="grid grid-cols-1 my-10 lg:grid-cols-2">
                <div class="text-center text-white my-auto mx-4">
                  <h1 class="font-GT-Pressura-Regular font-bold text-3xl">WANT DISCOUNTS?</h1>
                  <h2 class="font-GT-Pressura-Regular text-xl">Join our mail list for news & coupons</h2>
                </div>
                <div class="py-2 mx-4 lg:py-10">
                  <div class="rounded-full bg-white shadow flex w-full">
                    <input
                      type="text"
                      placeholder="Enter your email to join our mailing list"
                      class="w-full rounded-tl-full rounded-bl-full py-2 px-4" />
                    <button class="bg-yellow-400 rounded-tr-full rounded-br-full hover:bg-red-300 py-2 px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
          </div>
      </section>
      
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78 py-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
              <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" class="w-full align-middle rounded-t-lg">
              <blockquote class="relative p-8 mb-4">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                  <polygon points="-30,95 583,95 583,65" class="text-pink-500 fill-current"></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Great for your awesome project
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div>

          <div class="w-full md:w-6/12 px-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-sitemap"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">CSS Components</h6>
                    <p class="mb-4 text-blueGray-500">
                      Notus JS comes with a huge number of Fully Coded CSS
                      components.
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-drafting-compass"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      JavaScript Components
                    </h6>
                    <p class="mb-4 text-blueGray-500">
                      We also feature many dynamic components for React, NextJS,
                      Vue and Angular.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-newspaper"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Pages</h6>
                    <p class="mb-4 text-blueGray-500">
                      This extension also comes with 3 sample pages. They are
                      fully coded so you can start working instantly.
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-file-alt"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Documentation</h6>
                    <p class="mb-4 text-blueGray-500">
                      Built by developers for developers. You will love how easy
                      is to to work with Notus JS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
  </div>
  
</template>

<script>
export default {
  async mounted() {

  },

  data: () => ({
    currentMachine: "",
    currentPower: "",
    information: [],
    machines: [],
    options: [],
    additions: [],
    powers: [],
    totalMachineCost: 0,
    totalOptionCost: 0,
    totalCost: 0,
    selectedMachine: [],
    checkedOptions: [],
    selectedAddition: [],
    messages: {},
    quantity: "1",
    educationalDiscount: false,
    additionPrice: [],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    numRules: [
      (v) => !!v || "Phone Number is required",
      (v) =>
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(v) ||
        "Phone Number must be valid",
    ],
    partHeaders: [
      { text: "Laser System", value: "name" },
      { text: "Power", value: "power" },
      { text: "Unit Price", value: "price" },
      { text: "Quantity", value: "quantity" },
      { text: "Total", value: "total" },
    ],
    additionHeaders: [
      { text: "Name", value: "name" },
      { text: "Power", value: "power" },
      { text: "Price", value: "price" },
      { text: "", value: "" },
      { text: "Total", value: "total" },
    ],
    discountHeaders: [
      { text: "Item", value: "item" },
      { text: "Discount", value: "discount" },
      { text: "", value: "" },
      { text: "Total", value: "total " },
    ],
    components: {
      Navbar: () => import('~/components/Navbar.vue'),
      Footer: () => import('~/components/Footer.vue'),
    }

  }),

  methods: {
    selectMachine() {
      const machines = this.machines.filter(
        (i) => i.name == this.currentMachine
      );
      this.powers = machines.map((i) => i.power);
    },
    selectPower() {
      var machine = this.machines.filter(
        (i) => i.name == this.currentMachine && i.power == this.currentPower
      );
      var machine = machine.filter((i) => (i.quantity = `<input type="text">`));

      this.selectedMachine = machine;
    },
    addCommas(nStr) {
      nStr += "";
      var x = nStr.split(".");
      var x1 = x[0];
      var x2 = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
      }
      return x1 + x2;
    },
    setTotal(price, quantity, options) {
      const reducedCost =
        parseInt(price * quantity) +
        parseInt(
          options
            .map((i) => i.price)
            .reduce((x, y) => parseInt(x) + parseInt(y))
        );
      this.totalCost = reducedCost;
      return this.addCommas(reducedCost);
    },

    addAddition(id, price) {
      const exist = this.additionPrice.filter((i) => i.id == id);
      if (exist[0]) {
        this.additionPrice = this.additionPrice.filter((i) => i.id != id);
      } else {
        this.additionPrice.push({ id: id, price: price });
      }
    },

    splitString() {
      return
      console.log(this.selectedMachine[0])
      var fixedString = string;
      var fixedString = fixedString.split(':');
      let i = 0
      fixedString.forEach(s => {
        console.log(s)
        i++
        return s
      })
    }
  },

  // {{/*<ul><li v-for="(power, p) in this.selectedMachine[0]" :key="'D' + p">{{splitString(power.power_control)}}</li></ul><br>*/}}
  // {{/*<ul><li v-for="(motion, m) in this.selectedMachine[0]" :key="'C' + m">{{splitString(motion.motion_control)}}</li></ul><br> */}}
};
</script>
<style scoped>
  .v-application a {
    color: #374151
  }
</style>
