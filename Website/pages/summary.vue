<template>
  <div>
      <div v-if='!user.loggedIn'>
        <h1>You must be logged in in order to create a summary! Log in <a href='/login'>here</a></h1>
      </div>
      <div v-else>
        <v-form ref='form'>
            <v-row>
              <v-col cols="3">
                <p>Business Name:</p>
                <v-text-field
                  solo
                  label="Business Name"
                  :rules="textString"
                  :fullWidth="false"
                  v-model="messages.receiver"
                  placeholder="Business Name"
                />
              </v-col>
              <v-col cols="3">
                <p>First Name:</p>
                <v-text-field
                  solo
                  label="First Name"
                  :fullWidth="false"
                  :rules="textString"
                  v-model="messages.first"
                  placeholder="First Name"
                />
              </v-col>
              <v-col cols="3">
                <p>Last Name:</p>
                <v-text-field
                  solo
                  label="Last Name"
                  :fullWidth="false"
                  v-model="messages.last"
                  placeholder="Last Name"
                  :rules="textString"
                />
              </v-col>
              <v-row>
                  <v-col cols="3">
                  <p>Street Address:</p>
                  <v-text-field
                      solo
                      label="Street"
                      :fullWidth="false"
                      v-model="messages.street"
                      placeholder="Street"
                      :rules="textString"
                  />
                  </v-col>
                  <v-col cols="3">
                  <p>City:</p>
                  <v-text-field
                      solo
                      label="City"
                      :fullWidth="false"
                      v-model="messages.city"
                      placeholder="City"
                      :rules="textString"
                  />
                  </v-col><v-col cols="3">
                  <p>Postal Code:</p>
                  <v-text-field
                      solo
                      label="Postal Code"
                      :fullWidth="false"
                      v-model="messages.postal"
                      placeholder="Postal Code"
                      :rules="postalRules"
                  />
                  </v-col><v-col cols="3">
                  <p>Province:</p>
                  <v-select 
                      :items="provinces"
                      label="Province"
                      dense
                      v-model="province"
                      :rules="dropRules"
                    />
                  </v-col>
              </v-row>
            </v-row>
                  <v-row>
              <v-col cols="3">
                <p>Phone Number:</p>
                <v-text-field
                  solo
                  label="Phone Number"
                  :rules="numRules"
                  :fullWidth="false"
                  v-model="messages.phone_number"
                  placeholder="Business Phone Number"
                />
              </v-col>
              <v-col cols="3">
                <p>Email:</p>
                <v-text-field
                  solo
                  label="Email"
                  :rules='emailRules'
                  :fullWidth="false"
                  v-model="messages.email"
                  placeholder="Email Address"
                />
              </v-col>
            </v-row>
            <v-row>
                <v-col cols='3'>
                    <v-select 
                      :items="items"
                      label="Sales Rep"
                      dense
                      v-model="salesRep"
                      :rules="dropRules"
                    />
                </v-col>
            </v-row>
            <v-btn absolute center color='primary' @click="submit()">Submit</v-btn>
          </v-form>
        </div>
      <!-- <div>
        <h1>You must be logged in to continue</h1>
        <v-btn absolute center color='primary' @click="redirect('/login')">Login</v-btn>
      </div> -->
    </div>
    
</template>

<script>
import axios from 'axios'
import Places from 'vue-places'

export default {
  async mounted() {
    const data = await axios.get(``)
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
      sales: '',
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
      // (v) => /[^A-Za-z0-9]/.test(v) || "Do not use special characters!"
    ],
    dropRules: [
      (v) => !!v || "This dropdown is required"
    ],
    postalRules: [
      (v) => !!v || "This field is required", 
      (v) => /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(v) || "Invalid Postal Code"
    ],
    items: ['Mike', 'Mel']
  }),

  methods: {
    async submit() {
      if(!this.$refs.form.validate()) return
      const province = await this.abbreviation(this.province)
      const Address = this.messages.street + ' ' + this.messages.city + ', ' + province + ' ' + this.messages.postal
      await axios.post('http://localhost:8000/api/quote/new', {
          receiver: this.messages.receiver,
          first: this.messages.first,
          last: this.messages.last,
          address: Address,
          businessNumber: this.messages.business_number,
          mobileNumber: this.messages.mobile_number,
          email: this.messages.email,
          invoiced_by: this.user.userID,
          salesRep: this.salesRep
      }, {withCredentials: true })
      redirect(`/`)
      // window.location.href=`/`
    },
    redirect(path){
        window.location.href=`${path}`
    },
    
  },

  // {{/*<ul><li v-for="(power, p) in this.selectedMachine[0]" :key="'D' + p">{{splitString(power.power_control)}}</li></ul><br>*/}}
  // {{/*<ul><li v-for="(motion, m) in this.selectedMachine[0]" :key="'C' + m">{{splitString(motion.motion_control)}}</li></ul><br> */}}
};
</script>
<style scoped>
</style>
