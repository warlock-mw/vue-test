<script>
import CounterList from './CounterList'

export default {
  computed: {
    nowCount() {
      return this.$store.getters.nowCount
    },
  },
  methods: {
    plusCount() {
      return this.$store.dispatch('plusCount')
    },
    minusCount() {
      return this.$store.dispatch('minusCount')
    },
   },
   components: {CounterList},
}
</script>

<template>
  <div>
    <div>
      <button @click="minusCount">-</button>
      <span>{{nowCount}}</span>
      <button @click="plusCount">+</button>
    </div>
    <counter-list/>
  </div>
</template>
