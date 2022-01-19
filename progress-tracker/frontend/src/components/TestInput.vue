<template>
  <div class="flex flex-col overflow-hidden">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="h-max shadow overflow-hidden border-b border-gray-200">
          <table class="table-fixed min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Day
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Repository
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Branch
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Language
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Comment
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Apply</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in people" :key="person.email">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    <UserInput class="w-14" v-model="day"/>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    <UserInput type="date" v-model="date"/>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <UserInput/>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <UserInput/>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <UserInput/>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <UserInput class="w-60"/>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900">Apply</a> -->
                  <button type="submit" class="text-indigo-600 bg-indigo-100 p-2 min-w-full font-semibold rounded hover:text-indigo-900" @click="handleInput">Apply</button>
                </td>
              </tr>
              <tr v-for="person in people" :key="person.email">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    {{person.day}}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    {{person.date}}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{person.repository}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{person.branch}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{person.language}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{person.comment}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInput from './UserInput.vue';
import SelectMenu from './SelectMenu.vue';

const people = [
  {
    day: 1,
    date: 'Jan 15 2022',
    repository: 'data-structures',
    branch: 'master',
    language: 'Python',
    action: 'Committed',
    comment:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  // More people...
]

export default {
  setup() {
    return {
      people,
    }
  },
  data(){
      return{
          day: '',
          date: '',
          option: ''
      };
  },
  components: {
    UserInput,
    SelectMenu,
  },
  methods: {
      handleInput(){
          console.log(this.day);
          console.log(this.date);
          console.log(this.option);
      }
  }
}
</script>