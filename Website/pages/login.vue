<template>
  <div>
    <Navbar />
    <section class="absolute w-full top-0">
      <div class="absolute top-0 w-full h-full " style="background-image:  background-size: 100%; background-repeat: no-repeat;"></div>
      <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
              <div class="w-full lg:w-4/12 px-4 pt-32">
                  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                      <div class="rounded-t mb-0 px-6 py-6">
                          <div class="text-center mb-3">
                              <h6 class="text-gray-600 text-sm font-bold">Sign in with</h6></div>
                          <div class="btn-wrapper text-center">
                              <button class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style="transition: all 0.15s ease 0s;"><img alt="..." class="w-5 mr-1" >Github</button>
                              <button class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style="transition: all 0.15s ease 0s;"><img alt="..." class="w-5 mr-1" >Google</button>
                          </div>
                          <hr class="mt-6 border-b-1 border-gray-400">
                      </div>
                      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                          <div class="text-gray-500 text-center mb-3 font-bold"><small>Or sign in with credentials</small></div>
                          <form>
                              <div class="relative w-full mb-3">
                                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Username</label>
                                  <input type="username" class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Username" style="transition: all 0.15s ease 0s;" v-model="username" required>
                              </div>
                              <div class="relative w-full mb-3">
                                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Password</label>
                                  <input type="password" class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Password" style="transition: all 0.15s ease 0s;" v-model="password" required>
                              </div>
                              <div>
                                  <label class="inline-flex items-center cursor-pointer">
                                    <input id="customCheckLogin" type="checkbox" class="form-checkbox text-gray-800 ml-1 w-5 h-5" style="transition: all 0.15s ease 0s;"><span class="ml-2 text-sm font-semibold text-gray-700">Remember me</span></label>
                              </div>
                              <div class="text-center mt-6">
                                  <button class="bg-red-600 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="button" style="transition: all 0.15s ease 0s;" @click="login()">Sign In</button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div class="flex flex-wrap mt-6">
                      <div class="w-1/2"><a href="#pablo" class="text-grey-700"><small>Forgot password?</small></a></div>
                      <div class="w-1/2 text-right"><a href="#pablo" class="text-gray-700"><small>Create new account</small></a></div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    
  </div>
</template>

<script>
import axios from 'axios'
import useValidate from '@vuelidate/core'
import { required, maxLength, minLength } from '@vuelidate/validators'
import { APIPath } from '../plugins/variables.js'
import { handleBack } from '~/plugins/functions.js'
import * as Functions from '../plugins/functions'


export default {
  data: () => ({
      v$: useValidate(),
      username: '', 
      password: '',
      handleBack: Functions.handleBack,
    //   textString: [
    //   (v) => !!v || "This field is required",
    //   // (v) => /^[!@#$%^&*()_-]+$/.test(v) || "Do not use special characters!"
    // ],
  }),

  validations() {
    return {
      username: { required, maxLength: maxLength(20) },
      password: { required, minLength: minLength(6)},
      checkbox: {
        checked (val) {
          return val
        },
      },
    }
  },

  async mounted() {
  },

  methods: {
    async login() {
      // this.v$.$validate()
      if(this.v$.error) return alert('error with form validate')
        await axios.post(`${APIPath}v1/auth/login`, {
          username: this.username,
          password: this.password
        }, {withCredentials: true}).then(response => {
          if(response.data){
            this.handleBack('/')
          }else {
            console.log('fail')
          }
        })
      // window.location.href=`/`
    },
  },
  

  // {{/*<ul><li v-for="(power, p) in this.selectedMachine[0]" :key="'D' + p">{{splitString(power.power_control)}}</li></ul><br>*/}}
  // {{/*<ul><li v-for="(motion, m) in this.selectedMachine[0]" :key="'C' + m">{{splitString(motion.motion_control)}}</li></ul><br> */}}
};
</script>
<style scoped>
</style>
