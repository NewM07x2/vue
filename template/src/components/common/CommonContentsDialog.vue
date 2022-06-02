<!-- Copyright (C) 2018 SOFTBANK Corp. All rights reserved. -->
<template >
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper align-middle" @click="cancel">
        <div class="modal-container" @click.stop>
          <ul class="dialog">
            <li>
              <slot name="contents"></slot>
            </li>
            <divider />
            <li v-if="closeOnly" class="dialog-btn">
              <button @click="cancel" class="btn duke-btn">閉じる</button>
              <button v-if="createReportFlg" @click="createReport" class="btn duke-btn">帳票出力</button>
            </li>
            <li v-else class="dialog-btn">
              <button @click="cancel" class="btn duke-btn">キャンセル</button>
              <button @click="ok" class="btn duke-submit-btn">OK</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    'closeOnly': { type: Boolean, required: false, default: false },
    'createReportFlg': { type: Boolean, required: false, default: false }
  },
  methods: {
    ok: function () {
      this.$emit('ok')
    },
    cancel: function () {
      if (this.cancelFunc !== null) {
        this.$emit('cancel')
      }
    },
    createReport: function () {
      if (this.createReportFunc !== null) {
        this.$emit('createReport')
      }
    }
  }
}
</script>

<style scoped>
/********************************
 モーダルアニメーション
 ********************************/
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
}

.modal-container {
  max-width: 80%!important;
  max-height: 80%!important;
  margin: 0px auto;
  transition: all 0.3s ease;
  background-color: #FFFFFF;
  z-index: 9999;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/********************************
 ダイアログ
 ********************************/
ul.dialog {
  padding: 10px 10px;
  color: #333;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  word-break: break-all;
}

ul.dialog li {
  list-style: none;
}

ul.dialog li.dialog-icon {
  text-align: center;
  height: 130px;
  line-height: 1.2;
}

ul.dialog li.dialog-icon .mdi {
  font-size: 120px;
  display: block;
}

ul.dialog li.dialog-icon .help {
  color: #0070c9;
}

ul.dialog li.dialog-icon .alert {
  color: #ffcb84;
}

ul.dialog li.dialog-title {
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  margin: 15px 0;
}

ul.dialog li.dialog-message {
  max-height: 90px;
  overflow-y: auto;
  color: #616161;
  font-size: 18px;
  margin: 15px 0;
  text-align: center;
}
ul.dialog p {
  margin: 0;
}

ul.dialog .btn {
  width: 100px;
  margin: 5px 10px;
}

ul.dialog li.dialog-btn {
  text-align: center;
  margin: auto;
}
</style>
