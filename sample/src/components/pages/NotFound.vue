<template>
<div class="not">
    <h1 class="text-center">{{ msg }}</h1>
    <h2 class="text-center">404 Not Found</h2>
    <ul>
      <li class="text-center">
        <router-link to="/">Go to home</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>
<style scoped>
.text-center{
  text-align: center;
}
ul, li {
  padding: 0;
  margin: 0;
}
li {
  list-style:none
}
</style>
