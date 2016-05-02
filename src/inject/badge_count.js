/**
 * Created by Zhongyi on 4/12/16.
 */
"use strict";
const ipcRenderer = require('electron').ipcRenderer;

class BadgeCount {
  static init() {
    setInterval(() => {
      let count = 0;
      $(".icon.web_wechat_reddot_middle").each(function () {
        count += parseInt(this.textContent);
      });
      if (count > 0) {
        ipcRenderer.send("badge-changed", count.toString());
      } else {
        ipcRenderer.send("badge-changed", "");
      }
    }, 1500);
  }
}

module.exports = BadgeCount;