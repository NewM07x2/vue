<!-- Copyright (C) 2018 SOFTBANK Corp. All rights reserved. -->
<template>
  <div>
    <alert-scroll v-if="this.$route.name === 'EquipmentCsvDownload'"
    :dangerAlerts="dangerAlerts"
    :warningAlerts="warningAlerts"
    :successAlerts="successAlerts"
    :infoAlerts="infoAlerts"
    @dismissedDanger="dismissedDanger"
    @dismissedWarning="dismissedWarning"
    @dismissedSuccess="dismissedSuccess"
    @dismissedInfo="dismissedInfo"
    >
    </alert-scroll>
    <div v-else>
      <b-alert variant="danger" dismissible show @dismissed="dismissedDanger" v-if="dangerAlerts.length > 0">
        <table class="alert-table">
          <tr>
            <th>
              <span class="mdi mdi-alert mdi-24px"></span>
            </th>
            <td>
              <li v-for="m in dangerAlerts" :key="m">
                <span>{{ m }}</span>
              </li>
            </td>
          </tr>
        </table>
      </b-alert>

      <b-alert variant="warning" dismissible show @dismissed="dismissedWarning" v-if="warningAlerts.length > 0">
        <table class="alert-table">
          <tr>
            <th>
              <span class="mdi mdi-alert mdi-24px"></span>
            </th>
            <td>
              <li v-for="m in warningAlerts" :key="m">
                <span>{{ m }}</span>
              </li>
            </td>
          </tr>
        </table>
      </b-alert>

      <b-alert variant="success" dismissible show @dismissed="dismissedSuccess" v-if="successAlerts.length > 0">
        <table class="alert-table">
          <tr>
            <th>
              <span class="mdi mdi-information-outline mdi-24px"></span>
            </th>
            <td>
              <li v-for="m in successAlerts" :key="m">
                <span>{{ m }}</span>
              </li>
            </td>
          </tr>
        </table>
      </b-alert>

      <b-alert variant="info" dismissible show @dismissed="dismissedInfo" v-if="infoAlerts.length > 0">
        <table class="alert-table">
          <tr>
            <th>
              <span class="mdi mdi-information-outline mdi-24px"></span>
            </th>
            <td>
              <li v-for="m in infoAlerts" :key="m">
                <span>{{ m }}</span>
              </li>
            </td>
          </tr>
        </table>
      </b-alert>
    </div>
  </div>
</template>
<script>
import store from '@/store'
import CONST from '@/constants'
import CommonAlertScroll from '@/components/common/CommonAlertScroll'
export default {
  components: {
    'alert-scroll': CommonAlertScroll
  },
  methods: {
    dismissedDanger () {
      store.dispatch(CONST.DELETE_DANGER_ALERTS)
    },
    dismissedWarning () {
      store.dispatch(CONST.DELETE_WARNING_ALERTS)
    },
    dismissedInfo () {
      store.dispatch(CONST.DELETE_INFO_ALERTS)
    },
    dismissedSuccess () {
      store.dispatch(CONST.DELETE_SUCCESS_ALERTS)
    }
  },
  mounted () {
    this.watcher = () => {
      store.watch(() => this.$store.state.dangerAlerts, alerts => {
        this.dangerAlerts = alerts
      })
      store.watch(() => this.$store.state.warningAlerts, alerts => {
        this.warningAlerts = alerts
      })
      store.watch(() => this.$store.state.successAlerts, alerts => {
        this.successAlerts = alerts
      })
      store.watch(() => this.$store.state.infoAlerts, alerts => {
        this.infoAlerts = alerts
      })
    }
    this.watcher()
  },
  data () {
    return {
      dangerAlerts: [],
      warningAlerts: [],
      successAlerts: [],
      infoAlerts: [],
      watcher: null
    }
  },
  beforeDestroy () {
    this.watcher()
  }
}
</script>
<style scoped>
.alert-table {
  width: 100%;
}
.alert-table th {
  width: 50px;
}

li {
  list-style: none;
  text-align: left;
}

span {
  white-space: pre-line;
}

.alert {
  padding: 0.25rem 1.25rem;
  margin: 0.5rem 0;
}
</style>
