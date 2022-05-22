<template>
  <div>
    <b-form-select
      class="base-dropdown"
      v-model="selectedValue"
      :options="options"
      :text-field="textField"
      :value-field="valueField"
      :disabled="disabled"
    ></b-form-select>
  </div>
</template>
<script>
export default {
  name: 'BaseDropDown',
  model: {
    event: 'change'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array
    },
    textField: {
      type: String,
      default: ''
    },
    valueField: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    }

  },
  computed: {
    selectedValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  }
}
</script>
<style scoped>
.base-dropdown {
  outline: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position: calc(100% - 19px) calc(1em + 2px),
    calc(100% - 10px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 10px 10px, 10px 10px, 1px 1.5em;
  background-repeat: no-repeat;
  border: none;
  width: 100%;
}
.base-dropdown:focus {
  background-image: linear-gradient(45deg, green 50%, transparent 50%),
    linear-gradient(136deg, transparent 50%, green 50%);
  background-position: calc(100% - 10px) 1em, calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size: 10px 10px, 10px 10px, 1px 1.5em;
  background-repeat: no-repeat;
  border-color: green;
  outline: 0;
}
</style>
