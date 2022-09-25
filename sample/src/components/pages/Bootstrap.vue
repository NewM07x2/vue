<template>
  <div id="bootstrap">
    <h1>bootstrapについて</h1>
    <b-container fluid class="container-original">
      <h2>レイアウトとグリッド システム</h2>
      <b-row class="row-original" align-v="center">
        <b-col class="col-original col1" cols="12" md="8" lg="4">1</b-col>
        <b-col class="col-original col2" cols="12" md="4" lg="4">2</b-col>
        <b-col class="col-original col3" cols="12" md="12" lg="4">3</b-col>
      </b-row>
      <b-row class="row-original" align-v="center">
        <b-col class="col-original col4" cols="12" md="8" lg="4">4</b-col>
        <b-col class="col-original col5" cols="12" md="4" lg="4">5</b-col>
        <b-col class="col-original col6" cols="12" md="12" lg="4">6</b-col>
      </b-row>
      <b-row class="row-original" align-v="stretch">
        <b-col class="col-original col7" cols="12" md="8" lg="4">7</b-col>
        <b-col class="col-original col8" align-self="center" cols="12" md="4" lg="4">8</b-col>
        <b-col class="col-original col9" cols="12" md="12" lg="4">9</b-col>
      </b-row>
      <b-row>
        <b-col align-self="start col1">start</b-col>
        <b-col align-self="center col2">center</b-col>
        <b-col align-self="end col3">end</b-col>
      </b-row>
      <b-row align-h="start">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
      </b-row>

      <b-row align-h="center">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
      </b-row>

      <b-row align-h="end">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
      </b-row>

      <b-row align-h="around">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
      </b-row>

      <b-row align-h="between">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
      </b-row>
    </b-container>
    <b-container fluid class="container-original">
      <h2>calendar</h2>
      <b-row align-h="center">
        <b-col cols="5">
          <b-calendar v-model="calendarValue" @context="onCalendarContext" locale="en-US"></b-calendar>
        </b-col>
        <b-col cols="5">
          <p>Value: <b>'{{ calendarValue }}'</b></p>
          <p class="mb-0">Context:</p>
          <pre class="small">{{ calendarContext }}</pre>
        </b-col>
      </b-row>
      <b-row align-h="center">
      </b-row>
    </b-container>
    <b-container fluid class="container-original">
      <h2>checkbox</h2>
      <b-row align-h="center">
        <b-col cols="12">
          <b-form-checkbox-group
            v-model="selected"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-checkbox-group>
          <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="12">
          <div>
            <b-form-checkbox v-model="switchChecked" name="check-button" switches @click="onSwitchChecked">
              Switch Checkbox <b> (Checked: {{ switchChecked }}) </b>
            </b-form-checkbox>
            <b-form-checkbox switch>Small</b-form-checkbox>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="container-original">
      <h2>レイアウトとグリッド システム</h2>
      <b-row align-h="center">
        <b-col cols="12">
          test
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import '../../assets/css/common.css'
export default {
  name: 'Bootstrap',
  data () {
    return {
      count: 0,
      calendarValue: '',
      calendarContext: null,
      switchChecked: false,
      selected: [],
      options: [
        { item: 'A', name: 'Option A' },
        { item: 'B', name: 'Option B' },
        { item: 'D', name: 'Option C', notEnabled: true },
        { item: { d: 1 }, name: 'Option D' }
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    onCalendarContext (text) {
      this.calendarContext = text
    },
    onSwitchChecked () {
      this.switchChecked = !this.switchChecked
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeCreate')
  },
  updated () {
    console.log('created')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>
<style scoped>
.row {
  /* height: 100px; */
}
.col1 {
  background-color: pink;
}
.col2 {
  background-color: palegreen;
}
.col3 {
  background-color: gray;
}
.col4 {
  background-color: violet;
}
.col5 {
  background-color: lightseagreen;
}
.col6 {
  background-color: salmon;
}
.col7 {
  background-color: orange;
}
.col8 {
  background-color: azure;
}
.col9 {
  background-color: beige;
}
</style>
