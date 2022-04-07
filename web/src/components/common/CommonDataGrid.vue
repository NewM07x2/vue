<template>
  <div class="table-font-size">
    <HotTable :id="id" :ref="id" :settings="settings"></HotTable>
  </div>
</template>
<script>
import HotTable from '@handsontable/vue'
export default {
  name: 'common-data-grid',
  props: ['id', 'settings'],
  components: {
    HotTable
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.instance = this.$refs[this.id]
    window.addEventListener('resize', this.resizeRender, false)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeRender, false)
    this.instance = null
  },
  methods: {
    resizeRender () {
      if (this.instance !== null) {
        this.instance.hotInstance.render()
      }
    }
  }
}
</script>
<style scoped>
.table-font-size {
  font-size: 12px;
}
</style>
