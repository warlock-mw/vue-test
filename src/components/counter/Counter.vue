<script>
import { mapGetters } from 'vuex'
import CounterList from '@/components/counter/CounterList'

export default {
  computed: {
    ...mapGetters('counter', ['nowCount']),
  },
  methods: {
    plusCount() {
      return this.$store.dispatch('counter/plusCount')
    },
    minusCount() {
      return this.$store.dispatch('counter/minusCount')
    },
   },
   components: {CounterList},
}
</script>

<template>
  <div>
    <div>
      <button @click="minusCount">-</button>
      <span>{{ nowCount }}</span>
      <button @click="plusCount">+</button>
    </div>
    <counter-list/>
  </div>
</template>
