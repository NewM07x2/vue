<template>
  <div class="divider">
  </div>
</template>

<script>
export default {
  name: 'Divider',
  props: [],
  computed: {
  }
}
</script>

<style scoped>

.divider{
  border-top: 1px solid rgba(34,36,38,.15);
  border-bottom: 1px solid rgba(255,255,255,.1);
  font-size: 1rem;
  margin: 1rem 0;
  line-height: 1;
  height: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: rgba(0,0,0,.85);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

</style>
