<template>
    <div>
        <v-app>
            <Nuxt />
        </v-app>
    </div>
</template>

<script>
import axios from 'axios';
import { APIPath } from '../plugins/variables.js'

export default {
    async mounted() {
        // const User = await axios.get(`${APIPath}v1/auth/login`, { withCredentials: true });
        // if (User.data.loggedIn) {
        // this.user.loggedIn = true;
        // this.user.userID = User.data.user[0].id;
        // this.user.role = User.data.user[0].role;
        // this.user.username = User.data.user[0].username;
        // }
    },

    data(){
        return {
            user: {
            loggedIn: false,
            userID: 0,
            role: 1,
            username: "guest",
        },
        }
    },

    components: {
        Navbar: () => import(`~/components/Navbar.vue`)
        // QuoteTile: () => import('~/components/QuoteTile.vue'),
    },
};
</script>
