"use strict";

var bszCaller, bszTag;
!function () {
  var c,
      d,
      _e,
      a = !1,
      b = [];

  ready = function ready(c) {
    return a || "interactive" === document.readyState || "complete" === document.readyState ? c.call(document) : b.push(function () {
      return c.call(this);
    }), this;
  }, d = function d() {
    for (var a = 0, c = b.length; c > a; a++) {
      b[a].apply(document);
    }

    b = [];
  }, _e = function e() {
    a || (a = !0, d.call(window), document.removeEventListener ? document.removeEventListener("DOMContentLoaded", _e, !1) : document.attachEvent && (document.detachEvent("onreadystatechange", _e), window == window.top && (clearInterval(c), c = null)));
  }, document.addEventListener ? document.addEventListener("DOMContentLoaded", _e, !1) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
    /loaded|complete/.test(document.readyState) && _e();
  }), window == window.top && (c = setInterval(function () {
    try {
      a || document.documentElement.doScroll("left");
    } catch (b) {
      return;
    }

    _e();
  }, 5)));
}(), bszCaller = {
  fetch: function fetch(a, b) {
    var c = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
    window[c] = this.evalCall(b), a = a.replace("=BusuanziCallback", "=" + c), scriptTag = document.createElement("SCRIPT"), scriptTag.type = "text/javascript", scriptTag.defer = !0, scriptTag.src = a, scriptTag.referrerPolicy = "no-referrer-when-downgrade", document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
  },
  evalCall: function evalCall(a) {
    return function (b) {
      ready(function () {
        try {
          a(b), scriptTag.parentElement.removeChild(scriptTag);
        } catch (c) {
          bszTag.hides();
        }
      });
    };
  }
}, bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback", function (a) {
  bszTag.texts(a), bszTag.shows();
}), bszTag = {
  bszs: ["site_pv", "page_pv", "site_uv"],
  texts: function texts(a) {
    this.bszs.map(function (b) {
      var c = document.getElementById("busuanzi_value_" + b);
      c && (c.innerHTML = a[b]);
    });
  },
  hides: function hides() {
    this.bszs.map(function (a) {
      var b = document.getElementById("busuanzi_container_" + a);
      b && (b.style.display = "none");
    });
  },
  shows: function shows() {
    this.bszs.map(function (a) {
      var b = document.getElementById("busuanzi_container_" + a);
      b && (b.style.display = "inline");
    });
  }
};