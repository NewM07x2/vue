<!-- Copyright (C) 2018 SOFTBANK Corp. All rights reserved. -->
<template >
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="cancel">
        <div class="modal-container" @click.stop>
          <ul class="dialog">
            <li class="dialog-icon">
              <i v-if="dialogData.alertType === 1" class="mdi help mdi-help-circle-outline"></i>
              <i v-if="dialogData.alertType === 2" class="mdi alert mdi-alert-circle"></i>
            </li>
            <li class="dialog-title" v-if="dialogData.dialogTitle!==''">{{dialogData.dialogTitle}}</li>
            <li class="dialog-message" v-if="dialogData.dialogMessage!==''">
              <p v-for="message in dialogData.dialogMessage" :key="message">{{message}}</p>
            </li>
            <li class="dialog-btn">
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
  props: ['dialogData'],
  methods: {
    ok: function () {
      this.$emit('ok')
      this.$parent.dialogData = null
    },
    cancel: function () {
      if (this.cancelFunc !== null) {
        this.$emit('cancel')
      }
      this.$parent.dialogData = null
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
  vertical-align: middle;
}

.modal-container {
  width: -webkit-fit-content;
  margin: 0px auto;
  transition: all 0.3s ease;
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
  width: 550px;
  padding: 10px 30px;
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
}
</style>
