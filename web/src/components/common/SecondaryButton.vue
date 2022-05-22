<template>
  <b-button
    :disabled="disabled"
    type="button"
    @click="handleClick"
    variant="secondary"
  >
    <slot />
  </b-button>
</template>

<script>
export default {
  name: 'SecondaryButton',

  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    // `click`イベントを発行
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>
</style>
