<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Games Played
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wins
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Losses
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shots
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Goals
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Saves
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assists
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Average Score
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MVPS
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Demos
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Demos
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="player in information" :key="player.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">{{ player.username }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.games }}</div></td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.wins }}</div></td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.losses }}</div></td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.shots }}</div></td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.goals }}</div></td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.saves }}</div></td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.assists }}</div></td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.average_score }}</div></td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.mvps }}</div></td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.demos }}</div></td>
                <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ player.demos_taken }}</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Places from 'vue-places'
import * as Functions from '../plugins/functions.js'

export default {
  async mounted() {
    const Info = await axios.get(`http://localhost:3001/api/v1/stats/user`, {withCredentials: true })
    this.information = Info.data.stats
  },

  data: () => ({
      information: []
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
