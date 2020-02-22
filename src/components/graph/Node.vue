<script>
import { mapState } from 'vuex'
import D3Network from 'vue-d3-network'

export default {
    computed: {
        ...mapState('graph', ['nodes', 'links', 'options'])
    },
    components: {
        'd3-network': D3Network
    }
}
</script>

<template>
    <div id="node">
        <d3-network :net-nodes="nodes" :net-links="links" :options="options"></d3-network>
    </div>
</template>

<style scoped>
  #node {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    transition: all 0.2s;
  }
</style>