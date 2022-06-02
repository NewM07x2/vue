<template>
  <div>
    <h1>google map</h1>
    <GoogleMapDetail
      :mapConfig="mapConfig"
      apiKey = apiKey
    />
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
      <GoogleMapLine
        v-for="line in lines"
        :key="line.id"
        :path.sync="line.path"
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script>
import GoogleMapDetail from './GoogleMapDetail'
// import { mapSettings } from '@/constants/mapSettings'

export default {
  components: {
    GoogleMapDetail
  },

  data () {
    return {
      apiKey: 'AIzaSyCa0ynbDhtxe_iGiajbpnOkFroNx852pxc'
    }
  },
  computed: {
    mapConfig () {
      return {
        // ...mapSettings,
        center: { lat: 0, lng: 0 }
      }
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
