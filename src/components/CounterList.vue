<script>
export default {
  props: [
    'count_list',
  ],
}
</script>

<template>
  <table border="1">
    <tr>
      <td v-for="val in count_list">{{ val }}</td>
    </tr>
  </table>
</template>
