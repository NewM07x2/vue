<template>
  <b-table
    :items="items"
    :fields="fields"
    responsive
    autoWidth
    sticky-header="69vh"
    head-variant="light"
  >
    <template #cell(actions)="data">
      <SecondaryButton
        :disabled="data.item.disabledDownload"
        @click="click(data.item)"
      >DL</SecondaryButton>
    </template>
  </b-table>
</template>

<script>
import SecondaryButton from '@/components/common/SecondaryButton.vue'
export default {
  name: 'CommonTable',

  components: {
    SecondaryButton
  },

  props: {
    items: {
      type: Array,
      default: []
    },
    fields: {
      type: Array,
      default: []
    }
  },

  methods: {
    // `click`イベントを発行
    click (data) {
      this.$emit('click', data.downloadFileId, data.fileName)
    }
  }
}
</script>

<style scoped>
</style>
