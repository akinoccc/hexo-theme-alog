"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PV = function PV(options) {
  _classCallCheck(this, PV);

  this.options = options;
  AV.init({
    appId: options.appId,
    appKey: options.appKey
  });
  var query = new AV.Query('Counter');
  query.find().then(function (posts) {
    console.log(posts);
  });
};