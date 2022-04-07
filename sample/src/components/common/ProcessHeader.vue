<!-- Copyright (C) 2018 SOFTBANK Corp. All rights reserved. -->
<template>
  <b-navbar id="duke-pc-header" toggleable="md" type="dark">
    <!-- レスポンシブ対応 -->
    <b-dropdown class="navbar-toggler nav-dropdown" no-caret variant="link">
      <template slot="button-content">
        <i class="mdi mdi-menu mdi-36px toggle-list"></i>
      </template>
      <b-dropdown-item>
      </b-dropdown-item>
    </b-dropdown>

    <!-- 通常表示 -->
    <b-collapse is-nav id="sub_nav_collapse">
      <div class="d-inline-flex ml-auto text-left align-middle">
        <h5 class="">更新者：{{baseInf.siteId}}</h5>
        <h5 class="ml-3 text-left align-middle">会社名：{{baseInf.baseId}}</h5>
        <h5 class="ml-3 text-left align-middle">更新日時：YYYY/MM/DD hh:mm:ss</h5>
        <b-button v-if="isStrengthComputationEdit" class="ml-3 duke-btn long-btn">諸元取込</b-button>
      </div>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'ProcessHeader',
  props: [
  ],
  computed: {
    isStrengthComputationEdit: {
      get () {
        return (this.$route.name === 'strengthComputationEdit')
      },
      set () {}
    }
  },
  data () {
    return {
      baseInf: {
        baseId: 'base01',
        baseNm: 'テスト局',
        siteId: 'site01',
        specId: 'spec01',
        orderId: 'order01',
        bukken: 'テストセンター'
      },
      otherInf: {
        date: '2018/12/12',
        userNm: 'テス太郎',
        company: 'テスト社',
        memo: ''
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
#duke-pc-header {
  height: 55px;
  text-align: center;
  background-color: #e3e9eb;
}

#sub-menu {
  display: block;
  text-align: left;
  font-size: 0.8em;
  padding: 3px 10%;
  height: 70px;
  border-bottom: 1px solid #a3a3a3;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 1;
}

#sub-menu > li {
  display: inline-block;
  width: 10%;
  min-width: 140px;
  list-style: none;
}
#sub-menu > li > a {
  background: none;
  display: inline-block;
  text-decoration: none;
  line-height: normal;
  color: #222;
}
.nav-link {
  padding: 0.3rem 1rem;
}

.nav-link:hover > .link-name {
  color: #0070c9;
}

.select {
  color: #0070c9;
}

/* navbarのレスポンシブ対応部分*/
.nav-dropdown {
  border: 0px;
}

.toggle-list {
  color: #222;
}

.toggle-list:hover {
  color: #0070c9;
}

.duke-btn {
  font-size: 14px;
  color: #fff;
  background-color: #a4a4a4;
  border-color: #a4a4a4;
  box-shadow: 2px 2px 4px #bdbdbd;
}
.duke-btn:hover {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}
.duke-btn[disabled] {
  font-size: 14px;
  color: #a4a4a4;
  background-color: #f6f6f6;
  border-color: #f6f6f6;
  box-shadow: initial;
}
.duke-btn[disabled]:hover {
  box-shadow: initial;
}
.duke-submit-btn {
  font-size: 14px;
  color: #fff;
  background-color: #b40404;
  border-color: #b40404;
  box-shadow: 2px 2px 4px rgba(255, 0, 0, 0.5);
}
.duke-submit-btn:hover {
  background-color: #b40404;
  border-color: #b40404;
  box-shadow: initial;
}
.long-btn {
  min-width: 140px;
}
.short-btn {
  min-width: 70px;
}
.create-btn {
  position: absolute;
  right: 30px;
  bottom: 20px;
  margin: 3px 0;
}
</style>
