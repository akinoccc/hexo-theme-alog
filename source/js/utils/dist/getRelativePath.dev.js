"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getUrlRelativePath;

function getUrlRelativePath() {
  var url = document.location.toString();
  var arrUrl = url.split("//");
  var start = arrUrl[1].indexOf("/");
  var relUrl = arrUrl[1].substring(start);

  if (relUrl.indexOf("?") != -1) {
    relUrl = relUrl.split("?")[0];
  }

  relUrl = relUrl.replace(/\//g, "");
  return relUrl;
}