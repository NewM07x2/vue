<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td>
            <label size="large" class="mr-4">ステータス：
              <span v-if="instantCompData">{{STATUS.getText(computeStatus)}}</span>
            </label>
          </td>
          <td>
            <label size="large">地域：
              <span v-if="!newFlg && instantCompData && areaOptions" class="mr-4">{{this.setAreaName(instantCompData.area0)}}</span>
            </label>
          </td>
          <td>
            <multiselect
              v-if="newFlg"
              class="mr-4 area"
              v-bind:value="areaCd"
              :options="areaOptions"
              v-bind:disabled="!editFlg"
              label="text"
              placeholder=""
              track-by="value"
              selectLabel=""
              selectedLabel=""
              deselectLabel=""
              @input = setAreaCd
            ></multiselect>
          </td>
          <td>
            <label size="large" class="mr-4">簡易検討番号：
              <span v-if="instantCompId">{{instantCompId}}</span>
              <span v-else class="mr-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </label>
          </td>
          <td>
            <table>
              <tbody>
                <td>
                  <label size="large">簡易検討名称：</label>
                </td>
                <td>
                  <b-form-input
                  class="instantCompName"
                  v-bind:value="instantCompName"
                  v-bind:disabled="!editFlg"
                  maxlength="50"
                  @change ="compNameChange"
                  ></b-form-input>
                </td>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="vendorInfo" v-if="vendorFlg">
      <tbody>
        <tr>
          <td>
            <label size="large">元請会社：
            <span v-if="!newFlg && instantCompData && vendorOptions">{{this.setVendorName(instantCompData.vendorCd)}}</span>
            </label>
          </td>
          <td>
            <multiselect
              class="cmpVendor"
              v-if="newFlg"
              v-bind:value="vendorCd"
              :options="vendorOptions"
              label="text"
              placeholder=""
              track-by="value"
              selectLabel="選択"
              selectedLabel=""
              deselectLabel="削除"
              v-bind:disabled="!isInUser || !editFlg"
              @input = "setVendor"
            ></multiselect>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import api from '@/api'
import STATUS from '@/enums/compute_status'
import CONST from '@/constants/index'
export default {
  name: 'spec-info',
  props: {
    'dispPlaceInfo': { type: Boolean, required: false, default: false },
    'computeStatus': { type: String, required: false, default: null },
    'confirmDate': { type: String, required: false, default: null },
    'instantCompId': { type: String, required: false, default: null },
    'instantCompData': { type: Object, required: false, default: null },
    'editFlg': { type: Boolean, required: false, default: false },
    'newFlg': { type: Boolean, required: false, default: false },
    'instantCompName': { type: String, required: false, default: null },
    'vendorFlg': { type: Boolean, required: false, default: false },
    'areaOptions': { type: Array, required: false, default: false },
    'isInUser': { type: Boolean, required: false, default: false },
    'outVendorCd': { type: String, required: false, default: null }
  },
  mounted () {
    api.getVendors()
      .then(res => {
        const options = res.data.responseBody.map(entity => {
          return { value: entity.vendorCd, text: entity.vendorNm }
        })
        this.vendorOptions.push(...options)
      })
  },
  data () {
    return {
      areaCd: {},
      vendorCd: {},
      showCollapse: false,
      STATUS: STATUS,
      CONST: CONST,
      vendorOptions: [
        { value: '', text: '-' }
      ],
      inputInstantCompName: this.instantCompName,
      areaName: null,
      vendorName: null
    }
  },
  computed: {
    cmpVendor: function () {
      if (!this.isInUser) {
        return this.vendorOptions.find(e => e.value === this.outVendorCd)
      }
    }
  },
  watch: {
    vendorCd: {
      handler: function (val, oldVal) {
        if (val) {
          return this.$emit('vendorChange', val)
        }
      }
    },
    cmpVendor: {
      handler: function (val, oldVal) {
        if (!this.isInUser) {
          this.vendorCd = val
        }
        else {
          this.vendorCd = {}
        }
      }
    },
    instantCompData: {
      handler: function (val, oldVal) {
        this.areaCd = this.areaOptions.find(e => e.value === val.area0)
        if (!this.outVendorCd) {
          this.vendorCd = this.vendorOptions.find(e => e.value === val.vendorCd)
        }
      },
      deep: true
    }
  },
  methods: {
    compNameChange (value) {
      this.inputInstantCompName = value
      return this.$emit('compNameChange', this.inputInstantCompName)
    },
    setAreaName (areaCd) {
      return this.areaOptions.find((e) => e.value === areaCd).text
    },
    setVendorName (vendorCd) {
      if (vendorCd) {
        return this.vendorOptions.find((e) => e.value === vendorCd).text
      }
      else {
        return '-'
      }
    },
    setAreaCd (value) {
      this.areaCd = value
      return this.$emit('areaChange', value)
    },
    setVendor (value) {
      this.vendorCd = value
      return this.$emit('vendorChange', this.vendorCd)
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
.area{
  width: 110px;
  z-index: 200;
}
td{
  white-space: nowrap;
}
.instantCompName{
  width: 830px;
  font-size: 16px;
}
.cmpVendor{
  min-width: 500px;
  z-index: 150;
}
.multiselect{
}
.vendorInfo{
  margin-top: 2px;
  margin-bottom: 5px;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
