<script>
import CounterList from './CounterList'

export default {
  data() {
    return {
      count: 0,
      count_list: [0],
    }
  },
  methods: {
    increment() {
      this.count += 1
      this.count_list = [...Array(this.count + 1).keys()]
    },
    decrement() {
      if (this.count > 0) {
        this.count -= 1
        this.count_list = [...Array(this.count + 1).keys()]
      }
    },
   },
   components: {CounterList},
}
</script>

<template>
  <div>
    <div>
      <button @click="decrement">-</button>
      <span>{{count}}</span>
      <button @click="increment">+</button>
    </div>
    <counter-list :count_list="count_list"/>
  </div>
</template>
