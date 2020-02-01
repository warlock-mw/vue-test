<script>
export default {
  computed: {
    nowCountList() {
      return this.$store.getters.nowCountList
    },
  }
}
</script>

<template>
  <table border="1">
    <tr>
      <td v-for="val in nowCountList">{{ val }}</td>
    </tr>
  </table>
</template>
