<template>
  <div>
    <v-form>
        <NuxtLink to = "">
          <v-btn v-for="item in dashboardNav"
              :key="item.path"
              @click.prevent="handleBack(`${item.path}`)"
              :title="item.title"
              text 
              >{{ item.text }}
          </v-btn>
        </NuxtLink>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'
import Places from 'vue-places'
import * as Functions from '../plugins/functions.js'

export default {
  async mounted() {
    // const User = await axios.get(`http://localhost:8000/api/auth/login`, {withCredentials: true })
    // if(User.data.loggedIn){
    //     this.user.loggedIn = true
    //     this.user.userID = User.data.userID
    // }else {
    //     this.user.loggedIn = false
    // }
  },

  data: () => ({
      messages: [],
      user: {
        loggedIn: false,
        userID: null
      },
      sales: ['Mike Clarke', 'Mel Jacinto'],
      provinces: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'],
      province: '',
      salesRep: '',
      emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    numRules: [
      (v) => !!v || "Phone Number is required",
      (v) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(v) || "Phone Number must be valid",
    ],
    textString: [
      (v) => !!v || "This field is required",
      (v) => /[^A-Za-z0-9]/.test(v) || "Do not use special characters!"
    ],
    dashboardNav: [
      {
        path: 'users/manage',
        text: 'Manage Users',
        title: 'Back to Home page',
        active: true
      },
      {
        path: 'inventory/edit',
        text: 'Edit Data',
        title: 'Back to Home page',
        active: true
      },
    ]
  }),

  methods: {
    handleBack: Functions.handleBack,
  },
  components: {
    Places
  }

  // {{/*<ul><li v-for="(power, p) in this.selectedMachine[0]" :key="'D' + p">{{splitString(power.power_control)}}</li></ul><br>*/}}
  // {{/*<ul><li v-for="(motion, m) in this.selectedMachine[0]" :key="'C' + m">{{splitString(motion.motion_control)}}</li></ul><br> */}}
};
</script>
<style scoped>
</style>
