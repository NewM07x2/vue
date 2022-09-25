<template>
  <div id="times">
    <div id="time">
      <p class="text-center times">{{ times }}</p>
      <p class="text-center days">{{ days }}</p>
    </div>
  </div>
</template>

<script>
import '../../assets/css/Times.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
      times: '23:59:59',
      days: '2022/06/01'
    }
  },
  methods: {
    updateTime () {
      let date = new Date()
      this.times = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      this.days = date.getFullYear() + ' / ' + date.getMonth() + ' / ' + date.getDate()
    },
    zeroPadding (num, len) {
      let zero = ''
      for (var i = 0; i < len; i++) {
        zero += '0'
      }
      return (zero + num).slice(-len)
    }
  },
  mounted () {
    this.setDate()
    setInterval(() => this.setDate(), 1000)
  }
}
</script>
<style scoped>
.text-center{
  text-align: center;
  color: #fff;
  font-family: 'Wawati SC',cursive;
}

#times{
  background-color: black;
  position: relative;
}

#time{
  background-color: black;
  position: absolute;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 200px; /*上下左右中央に*/
  height: 100%; /*heightの指定は必須*/
}

p {
  margin: 0;
  padding: 0;
}

.times {
  font-size: 18vw;
}

.days {
  font-size: 8vw;
}
</style>
