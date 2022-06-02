<template>
  <div>
      <div class="map" ref="googleMap">
        <template v-if="Boolean(this.google) && Boolean(this.map)">
        <slot
          :google="google"
          :map="map"
        />
        </template>
      </div>
  </div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  props: {
    mapConfig: Object,
    apiKey: String
  },

  data () {
    return {
      google: null,
      map: null
    }
  },

  async mounted () {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap () {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
    }
  }
}

</script>
<style scoped>
#store{
  margin: 10px 0;
  height: 100px;
  border-bottom: 1px lightgray dashed;
  border-top: 1px lightgray dashed;
}
li {
  list-style: none;
}
.map {
  width: 100vw;
  height: 100vh;
}
</style>
