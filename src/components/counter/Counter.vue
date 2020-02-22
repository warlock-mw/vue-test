<script>
import { mapGetters, mapActions } from 'vuex'
import CounterList from '@/components/counter/CounterList'

export default {
  computed: {
    ...mapGetters('counter', ['nowCount']),
  },
  methods: {
    ...mapActions('counter', ['plusClunt', 'minusCount']),
  },
  components: { CounterList },
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
