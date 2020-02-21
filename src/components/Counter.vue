<script>
import CounterList from './CounterList'

export default {
  data() {
    return {
        isError: 0
    }
  },
  computed: {
    nowCount() {
      return this.$store.getters.nowCount
    },
  },
  methods: {
    plusCount() {
      return this.$store.dispatch('plusCount').catch(error => {
          this.isError = 1

          console.log(this.isError)
      })
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
