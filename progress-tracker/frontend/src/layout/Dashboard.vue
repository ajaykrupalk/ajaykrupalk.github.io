<template>
  <div class="flex">
    <div class="flex-initial w-full h-screen">
      <div class="p-7 pb-3">
        <header class="text-3xl font-semibold">@ajaykrupalk</header>
      </div>
      <div class="p-7">
        <!-- <TestInput/> -->
        <InputTable />
      </div>
    </div>
  </div>
</template>

<script>
import InputTable from "../components/InputTable.vue";
import UserInput from "../components/UserInput.vue";
import TestInput from "../components/TestInput.vue";

export default {
  name: "Dashboard",
  components: {
    InputTable,
    UserInput,
    TestInput
  },
};
</script>
