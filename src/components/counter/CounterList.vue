<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('counter', ['nowCountList']),
  }
}
</script>

<template>
  <table border="1">
    <tr>
      <td v-for="(val, key) in nowCountList" :key="key">{{ val }}</td>
    </tr>
  </table>
</template>
