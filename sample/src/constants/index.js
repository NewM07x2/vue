/**
 * this.$const.定数名で呼び出し
 * （例）this.$const.ALERT_SUCCESS
*/

import URL from "./url";

export default {
  BASES: {
    NONE: "0",
    WITHOUT: "1",
    GUY_ANCHOR: "2",
    ROOT_WRAP: "3",
  },

  /* メッセージ定数 */
  ALERT_SUCCESS: "success",
  ALERT_INFO: "info",
  ALERT_WARN: "warn",
  ALERT_WARNING: "warning",
  ALERT_DANGER: "danger",

  // actions
  UPDATE_DANGER_ALERTS: "UPDATE_DANGER_ALERTS",

  SC_MAX_FILE_SIZE: 10,
  URL,
};
