<template>
  <div>
    <b-row>
      <b-col xs="12" sm="6" md="4" lg="4" v-for="(data, index) in datas" :key="index">
        <b-card
          :bg-variant="(data.value === selected) ? 'primary' : ''"
          :text-variant="(data.value === selected) ? 'white' : ''"
          class="text-center clickable mb-2"
          :class="{'no-image' : !data.image}"
          @click="onClick(data.value)"
          :img-src="data.image"
          img-alt="Card image"
          img-bottom
        >
          <p class="card-text">{{data.text}}</p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'select-with-images',
  props: ['datas'],
  data () {
    return {
      selected: null
    }
  },
  methods: {
    onClick (value) {
      this.selected = value
      this.$emit('selected', this.selected)
    }
  }
}
</script>
<style scoped>
.clickable {
  cursor: pointer;
}
.no-image {
  height: fit-content;
}
</style>
