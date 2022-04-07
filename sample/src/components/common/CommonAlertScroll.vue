<!-- Copyright (C) 2021 SOFTBANK Corp. All rights reserved. -->
<template>
  <div>
    <b-alert variant="danger" dismissible show @dismissed="dismissedDanger" v-if="dangerAlerts.length > 0">
      <div class="alert-table-all">
        <table class="alert-table">
          <tr>
            <th>
              <span class="mdi mdi-information-outline mdi-24px"></span>
            </th>
            <div :class="['alert-table', 'margin10', checkAlertScrollDanger]">
              <td>
                <li v-for="m in dangerAlerts" :key="m">
                  <span>{{ m }}</span>
                </li>
              </td>
            </div>
          </tr>
        </table>
      </div>
    </b-alert>
    <b-alert variant="warning" dismissible show @dismissed="dismissedWarning" v-if="warningAlerts.length > 0">
      <div class="alert-table-all">
        <table class="alert-table">
          <tr>
            <th>
              <span class="mdi mdi-information-outline mdi-24px"></span>
            </th>
            <div :class="['alert-table', 'margin10', checkAlertScrollWarning]">
              <td>
                <li v-for="m in warningAlerts" :key="m">
                  <span>{{ m }}</span>
                </li>
              </td>
            </div>
          </tr>
        </table>
      </div>
    </b-alert>
    <b-alert variant="info" fade dismissible show @dismissed="dismissedInfo" v-if="infoAlerts.length > 0">
      <div class="alert-table-all">
        <table class="alert-table">
          <tr>
            <th>
              <span class="mdi mdi-information-outline mdi-24px"></span>
            </th>
            <div :class="['alert-table', 'margin10', checkAlertScrollInfo]">
              <td>
                <li v-for="m in infoAlerts" :key="m">
                  <span>{{ m }}</span>
                </li>
              </td>
            </div>
          </tr>
        </table>
      </div>
    </b-alert>
    <b-alert variant="success" dismissible show @dismissed="dismissedSuccess" v-if="successAlerts.length > 0">
      <div class="alert-table-all">
        <table class="alert-table">
          <tr>
            <th>
              <span class="mdi mdi-information-outline mdi-24px"></span>
            </th>
            <div :class="['alert-table', 'margin10', checkAlertScrollSuccess]">
              <td>
                <li v-for="m in successAlerts" :key="m">
                  <span>{{ m }}</span>
                </li>
              </td>
            </div>
          </tr>
        </table>
      </div>
    </b-alert>
  </div>
</template>
<script>

export default {
  methods: {
    dismissedDanger () {
      this.$emit('dismissedDanger')
    },
    dismissedWarning () {
      this.$emit('dismissedWarning')
    },
    dismissedInfo () {
      this.$emit('dismissedInfo')
    },
    dismissedSuccess () {
      this.$emit('dismissedSuccess')
    }
  },
  props: {
    dangerAlerts: {
      type: Array, default: ''
    },
    warningAlerts: {
      type: Array, default: ''
    },
    successAlerts: {
      type: Array, default: ''
    },
    infoAlerts: {
      type: Array, default: ''
    }
  },
  computed: {
    checkAlertScrollDanger: function () {
      if (this.dangerAlerts.length > 4) {
        return 'alert-scroll'
      }
    },
    checkAlertScrollWarning: function () {
      if (this.warningAlerts.length > 4) {
        return 'alert-scroll'
      }
    },
    checkAlertScrollSuccess: function () {
      if (this.successAlerts.length > 4) {
        return 'alert-scroll'
      }
    },
    checkAlertScrollInfo: function () {
      if (this.infoAlerts.length > 4) {
        return 'alert-scroll'
      }
    }
  }
}
</script>
<style scoped>
.alert-table-all {
  width: 100%;
  padding-right: 25px;
}
.alert-table-all th {
  width: 50px;
}
.alert-table {
  width: 100%;
}
.margin10{
  margin: 5px 0;
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

.alert-scroll {
  height: 100px;
  overflow: auto;
}
</style>
