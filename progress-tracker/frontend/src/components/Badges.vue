<template>
  <div class="px-6 py-4">
    <span
      :class="`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClass}`"
    >
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: "Badges",
  props: {
    color: {
      type: String,
      default: "committed",
    },
  },
  computed: {
    colorClass() {
      return {
        updated: "bg-yellow-100 text-yellow-800",
        committed: "bg-green-100 text-green-800",
      }[this.color];
    },
  },
};
</script>
