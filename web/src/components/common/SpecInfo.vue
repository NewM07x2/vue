<template>
  <div v-if="specInfo">
    <div
      class="d-inline-flex mb-2 toggle"
      @click="showCollapse = !showCollapse"
    >
      <div class="ml-3">
        <h4 style="display:inline;"><i :class="showCollapse ? 'mdi mdi-chevron-down' : 'mdi mdi-chevron-right'" />基本情報</h4>&emsp;&emsp;<span
          v-if="dispFlg"
          style="background-color:#FF0000; color:#FFFFFF"
        >&emsp;機器の変更あり&emsp;</span>
      </div>
    </div>
    <table class="table table-noborder table-sm" style="width:30%">
      <tr>
        <td>ステータス：{{STATUS.getText(computeStatus)}}</td>
        <td v-if="confirmDate">工程連携日：{{confirmDate}}</td>
        <td>サイトID：{{specInfo.siteId}}</td>
        <td>諸元番号：<a target="_blank" :href="specUrl" v-b-tooltip.hover title="設計諸元閲覧画面へ遷移">{{specInfo.specId}}</a></td>
      </tr>
      <tr>
        <td>5GJサイトステータス：{{dispG5jSiteStatus(specInfo.g5jSiteSts)}}</td>
        <td>5GJサイトID：{{specInfo.g5jSiteId}}</td>
        <td>5GJ幹事区分：{{dispG5jSiteLeadcorp(specInfo.g5jSiteLeadcorp)}}</td>
      </tr>
    </table>
    <b-collapse
      id="collapse1"
      class="mt-3"
      v-model="showCollapse"
    >
      <div class="orders">
        <div
          v-for="(order) in specInfo.orders"
          :key="order.orderId"
        >
          <label size="large">オーダーID：<a
              target="_blank"
              :href="processUrl + order.orderId"
              v-b-tooltip.hover
              title="オーダー進捗画面へ遷移"
              class="mr-4"
              size="large"
            >{{order.orderId}}</a></label>
          <label class="mr-4" size="large">5GJ工事フラグ：{{dispG5jCommonFlg(order.g5jOrderFlg)}}</label>
        </div>
        <div
          v-for="(base) in specInfo.bases"
          :key="base.baseId"
        >
          <div class="d-inline-flex mb-1">
            <label size="large">基地局番号：{{base.baseNumber}}</label>
            <label size="large" class="mx-4">基地局名：{{base.baseName}}</label>
            <label size="large" class="mx-4">MORAN有無：{{dispG5jCommonFlg(base.g5jMoranFlg)}}</label>
            <label size="large" class="mx-4">5GJ基地局フラグ：{{dispG5jCommonFlg(base.g5jBaseFlg)}}</label>
          </div>
        </div>
      </div>
    </b-collapse>
    <div
      class="mt-3"
      v-if="dispPlaceInfo"
    >
      <label size="large">{{specInfo.prefName + ' ' + specInfo.cityName}}</label>
    </div>
  </div>
</template>
<script>
import STATUS from '@/enums/compute_status'
import CONST from '@/constants/index'
import specStatus from '@/enums/spec_status'
export default {
  name: 'spec-info',
  props: {
    'dispPlaceInfo': { type: Boolean, required: false, default: false },
    'computeStatus': { type: String, required: false, default: null },
    'confirmDate': { type: String, required: false, default: null },
    'specInfo': { type: Object, required: false, default: null },
    'dispFlg': { type: Boolean, required: false, default: false }
  },
  data () {
    return {
      showCollapse: false,
      STATUS: STATUS,
      CONST: CONST
    }
  },
  computed: {
    specUrl () {
      const specSts = this.specInfo.specSts === specStatus.actual().value ? 'actual' : 'design'
      return `/spec-edit/${specSts}-spec-edit?spec-id=` + this.specInfo.specId
    },
    processUrl () {
      return '/process/order-progress/'
    }
  },
  methods: {
    dispG5jSiteStatus: function (val) {
      if (val === '0') return '進行中'
      if (val === '1') return '中止'
      if (val === '2') return '完了'
      return null
    },
    dispG5jSiteLeadcorp: function (val) {
      if (val === '0') return 'S幹事'
      if (val === '1') return 'K幹事'
      return null
    },
    dispG5jCommonFlg: function (val) {
      if (val === '0') return '無'
      if (val === '1') return '有'
      return null
    }
  }
}
</script>
<style scoped>
.toggle {
  cursor: pointer;
  user-select: none;
}
.orders {
  max-height: 90px;
  width: fit-content;
  overflow-y: scroll;
}
table,th,td  {
  border-style: none !important;
}
</style>
