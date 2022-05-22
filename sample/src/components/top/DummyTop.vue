<template>
  <b-container fluid>
    <div class="mb-sm-3">
      <h2>TOP_Dummy</h2>
    </div>
    <table class="table table-bordered">
      <tbody>
        <tr class="header">
          <th>
            <h3>ツール一覧</h3>
          </th>
        </tr>
        <ul class="list-group">
          <tr class="mt-sm-3 ml-sm-3">
            <b-link to="/site-search">諸元検索</b-link>
          </tr>
          <tr class="mt-sm-3 ml-sm-3">
            <b-link to="/strength-computation">コン柱強度検討</b-link>
          </tr>
          <tr class="mt-sm-3 mb-sm-3  ml-sm-3">
            <b-link to="/power-capacity">電源容量確認</b-link>
          </tr>
        </ul>
      </tbody>
    </table>
  </b-container>
</template>

<script>
</script>
<style>
.header {
  background-color: #cecece;
}
</style>
