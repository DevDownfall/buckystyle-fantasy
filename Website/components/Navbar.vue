<template>
  <div>
    <v-app-bar app color="white">
      <div class="trotec-image">
        <button @click="handleBack(`/`)">
          <img alt="25_trotec.5b99258d661fb" width="210" height="85" src="~/assets/svg/trotec.svg" />
        </button>
        <div class="md:hidden md:px-4">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </div>
      </div>

      <div v-if="user.loggedIn">
        <div v-if="user.role >= 3">
            <NuxtLink :to="{ path: 'quote/list'}" class="ml-2" prefetch><v-btn @click.prevent="handleBack(`/quote/list`)">Quote</v-btn></NuxtLink>
            <NuxtLink :to="{ name: 'orders'}" class="ml-2" prefetch><v-btn @click.prevent="handleBack(`/orders`)">Orders</v-btn></NuxtLink>
            <NuxtLink :to="{ name: 'dashboard'}" class="ml-2" prefetch><v-btn @click.prevent="handleBack(`/dashboard`)">Dashboard</v-btn></NuxtLink>
            <div class="text-right">
                <NuxtLink :to="{ path: `user/${user.userID}`}"><v-btn @click.prevent="handleBack(`user/${user.userID}`)">Profile</v-btn></NuxtLink>
            </div>
          <!-- <v-btn v-for="item in adminNav" :key="item.id" @click.prevent="handleBack(`/${item.icon}`)" :title="item.title" tyle>{{ item.text }}</v-btn> -->
          <!-- <NuxtLink :to="`user/${user.userID}`"><v-btn text absolute right top>Profile</v-btn></NuxtLink> -->
        </div>
        <div v-else>
          <v-btn v-for="item in loggedInNav" :key="item.id" @click.prevent="handleBack(`/${item.icon}`)" :title="item.title" tyle>{{ item.text }}</v-btn>
          <NuxtLink :to="`user/${user.userID}`"><v-btn text absolute right top>Profile</v-btn></NuxtLink>
        </div>
      </div>
      <div v-else>
        <v-btn v-for="item in nav" :key="item.id" @click.prevent="handleBack(`/${item.icon}`)" :title="item.title" tyle>{{ item.text }}</v-btn>
        <NuxtLink :to="`/login`"><v-btn text absolute right top>Login</v-btn></NuxtLink>
        <div class='float-right'>
            <NuxtLink :to="{ name: 'login'}" class="ml-2 absolute">Login</NuxtLink>
            <NuxtLink :to="{ name: 'register'}" class="ml-2 absolute">Sign Up</NuxtLink>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- <div class="flex flex-wrap">
                <NuxtLink :to="{ name: 'index'}" class="flex" >
                    <img src="~/assets/svg/trotec.svg" width="140">
                </NuxtLink>
                <nav class="flex-wrap flex">
                    <NuxtLink v-for="item in adminNav" :key="item.icon" :to="`/${item.icon}`">{{item.text}}</NuxtLink>
                </nav>
            </div> -->
    <!-- <nav class="flex flex-wrap items-center justify-between w-full py-0 md:py-0 px-4 text-lg text-gray-700 bg-white">
                <div>
                    <a href="/">
                        <img alt="25_trotec.5b99258d661fb" width="140" height="25" src="~/assets/svg/trotec.svg" />
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div class="hidden w-full md:flex md:items-center md:w-auto " id="menu">
                    <div v-if="user.loggedIn">
                        <div v-if="user.role >= 3">
                            <ul class="text-base text-black pt-4 md:flex md:justify-between md:pt-0">
                                <li v-for="item in adminNav" :key="item.icon">
                                    <NuxtLink :to="`/${item.icon}`"><a class="md:p-4 py-2 text-gray-700 block" href="#">{{item.text}}</a></NuxtLink>
                                </li>
                            </ul>
                            <NuxtLink :to="`user/${user.userID}`">Profile</NuxtLink>
                        </div>
                        <div v-else-if="user.role ">
                            
                        </div>
                    </div>
                    <div v-else>
                        <ul class="text-base text-black pt-4 md:flex md:justify-between md:pt-0">
                            <li v-for="item in nav" :key="item.icon">
                                <NuxtLink :to="`/${item.icon}`"><a class="md:p-4 py-2 block hover:text-purple-400" href="#">{{item.text}}</a></NuxtLink>
                            </li>
                        </ul>
                        <NuxtLink to="login">Log In</NuxtLink>
                        <NuxtLink to="register">Sign Up</NuxtLink>
                    </div>
                </div>
            </nav> -->
  </div>
</template>

<script>
import axios from "axios";
import * as Functions from "../plugins/functions.js";
import { APIPath } from "../plugins/variables.js";

export default {
  async mounted() {
        const User = await axios.get(`${APIPath}v1/auth/login`, { withCredentials: true });
        if (User.data.loggedIn) {
        this.user.loggedIn = true;
        this.user.userID = User.data.user[0].id;
        this.user.role = User.data.user[0].role;
        this.user.username = User.data.user[0].username;
        }
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },

  data() {
    return {
      profilePhoto: "https:tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png",
      dialog: false,
      drawer: false,
      group: null,
      user: {
        loggedIn: false,
        userID: 0,
        role: 1,
        username: "guest",
      },
      nav: [
      ],
      loggedInNav: [
        {
          icon: "summary",
          text: "Summary",
          title: "Brings you to quote page",
          active: true,
        },
        {
          icon: "quote/list",
          text: "Quote",
          title: "Brings you to quote page",
          active: true,
        },
        {
          icon: "orders",
          text: "Orders",
          title: "About this demo",
          active: false,
        },
      ],
      adminNav: [
        {
          icon: "quote/list",
          text: "Quote",
          title: "Brings you to quote page",
        },
        {
          icon: "orders",
          text: "Orders",
          title: "About this demo",
        },
        {
          icon: "dashboard",
          text: "Dashboard",
          title: "About this demo",
        },
      ],
    };
  },

  methods: {
    handleBack: Functions.handleBack,
  },
};
</script>
<style scoped>
.v-application a {
  color: #000000;
}
</style>
