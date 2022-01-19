<template>
  <div class="flex flex-col overflow-hidden">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="h-max shadow overflow-hidden border-b border-gray-200">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Day
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Repository
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Branch
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Language
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Comment
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Apply</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    <UserInput class="w-14" />
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    <UserInput type="date" />
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <UserInput />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <UserInput />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <UserInput />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <UserInput class="w-60" />
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                  "
                >
                  <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900">Apply</a> -->
                  <button type="submit" class="text-indigo-600 bg-indigo-100 p-2 min-w-full font-semibold rounded hover:text-indigo-900" @click="fetchData">
                    Apply
                  </button>
                </td>
              </tr>
              <tr v-for="value in rows" :key="value.day">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ value.day }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ value.date }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ value.repository }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ value.branch }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ value.language }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ value.comment }}
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
import { Row } from '../services';

export default {
  data(){
    return {
      rows: [],
      row: {
        day: '',
        date: '',
        repository: '',
        branch: '',
        language: '',
        comment:'',
      }, 
      row_id: '',
    };
  },
  created(){
    this.fetchData();
  },
  props: {
    schema: {
      type: Array,
      required: true,
      default:[],
    }
  },
  methods: {
    fetchData(){
      // this.row.row_id = this.$route.params.id;
      console.log(this.row);
      Row.create(this.row).catch((err) => {
        console.log(err);
      }).then((res) => {
        if(res.status == 201) {
          this.$toast.success('Row Created');
          this.schema[0].rows.push(res.data.id);
          this.row.push(res.data.id);
          this.row.day = '',
          this.row.date = '',
          this.row.repository = '',
          this.row.branch = '',
          this.row.language = '',
          this.row.comment = '',
          this.$emit('Row-added', this.schema);
        } else {
          this.$toast.error('Something went wrong.');
        }
      });
    }
  },
  components: {
    UserInput,
    SelectMenu,
  }
}
</script>