(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AudioPlayer = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function t(e) {
    return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(e);
  }

  function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function n(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function o(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      e && (o = o.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, o);
    }

    return n;
  }

  function i(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2 ? o(Object(i), !0).forEach(function (e) {
        n(t, e, i[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
      });
    }

    return t;
  }

  var r = function t() {
    var o = this;
    e(this, t), n(this, "touchStart", function (t) {
      o.resetTouchStatus(), o.startX = t.touches[0].clientX, o.startY = t.touches[0].clientY;
    }), n(this, "touchMove", function (t) {
      var e = t.touches[0];
      o.deltaX = e.clientX - o.startX, o.deltaY = e.clientY - o.startY, o.offsetX = Math.abs(o.deltaX), o.offsetY = Math.abs(o.deltaY);
    }), n(this, "resetTouchStatus", function () {
      o.deltaX = 0, o.deltaY = 0, o.offsetX = 0, o.offsetY = 0;
    }), this.deltaX = 0, this.deltaY = 0, this.offsetX = 0, this.offsetY = 0;
  };

  function a(t, e) {
    ("boolean" != typeof t.cancelable || t.cancelable) && t.preventDefault(), e && t.stopPropagation();
  }

  function s(t) {
    return "function" == typeof t;
  }

  function u(e) {
    if ("string" == typeof e && (e = document.querySelector(e)), ("object" === ("undefined" == typeof HTMLElement ? "undefined" : t(HTMLElement)) ? function (t) {
      return t instanceof HTMLElement;
    } : function (e) {
      return e && "object" === t(e) && 1 === e.nodeType && "string" == typeof e.nodeName;
    })(e)) return e;
    throw TypeError("el is not define");
  }

  var c = function t() {
    var o = this,
        c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    e(this, t), n(this, "initHtml", function () {
      o.el.style.background = o.options.inactiveColor, o.el.innerHTML = '\n      <div class="v-slider-bar">\n        <div class="v-slider__button-wrapper">\n          <div class="v-slider__button"></div>\n        </div>\n      </div>\n    ', o.el.querySelector(".v-slider__button").style.width = o.options.buttonSize, o.el.querySelector(".v-slider__button").style.height = o.options.buttonSize, o.options.barHeight && (o.el.style.height = o.options.barHeight, o.el.querySelector(".v-slider-bar").style.height = o.options.barHeight);
    }), n(this, "updateValue", function (t, e) {
      t = o.format(t);
      var n = o.options.input,
          i = o.options.change;
      n && (s(n) ? n.call(o, t) : console.warn("input is not a function")), e && i && (s(i) ? i.call(o, t) : console.warn("change is not a function")), o.value = t, o.render();
    }), n(this, "format", function (t) {
      return Math.round(Math.max(o.min, Math.min(t, o.max)) / o.step) * o.step;
    }), n(this, "onClick", function (t) {
      t.stopPropagation();
      var e = o.el.getBoundingClientRect(),
          n = t.clientX - e.left,
          i = e.width,
          r = +o.min + n / i * o.scope;
      o.startValue = o.value, o.updateValue(r, !0);
    }), n(this, "onTouchStart", function (t) {
      o.touchMixin.touchStart(t), o.currentValue = o.value, o.startValue = o.format(o.value), o.dragStatus = "start";
    }), n(this, "onTouchMove", function (t) {
      var e = o.options.dragStart;
      "start" === o.dragStatus && e && (s(e) ? e() : console.warn("dragStart is not a function")), o.el.querySelector(".v-slider-bar").style.transition = "none 0s ease 0s", a(t, !0), o.touchMixin.touchMove(t), o.dragStatus = "draging";
      var n = o.el.getBoundingClientRect(),
          i = o.touchMixin.deltaX / n.width * o.scope;
      o.currentValue = o.startValue + i, o.updateValue(o.currentValue);
    }), n(this, "onTouchEnd", function () {
      if ("draging" === o.dragStatus) {
        o.updateValue(o.currentValue, !0);
        var t = o.options.dragEnd;
        t && (s(t) ? t() : console.warn("dragEnd is not a function"));
      }

      o.el.querySelector(".v-slider-bar").style.transition = null, o.dragStatus = "";
    }), n(this, "bindTouchEvent", function (t) {
      var e = o.onTouchStart,
          n = o.onTouchMove,
          i = o.onTouchEnd;
      t.addEventListener("touchstart", e), t.addEventListener("touchmove", n), i && (t.addEventListener("touchend", i), t.addEventListener("touchcancel", i));
    }), n(this, "calcMainAxis", function () {
      var t = o.value,
          e = o.min,
          n = o.scope;
      return "".concat(100 * (t - e) / n, "%");
    }), n(this, "calcOffset", function () {
      o.value, o.min, o.scope;
      return null;
    }), n(this, "render", function () {
      var t = {
        width: o.calcMainAxis(),
        background: o.options.activeColor
      },
          e = o.el.querySelector(".v-slider-bar");
      e.style.width = t.width, e.style.background = t.background;
    }), this.options = i({
      min: 0,
      max: 100,
      step: 1,
      value: 0
    }, c), this.min = this.options.min, this.max = this.options.max, this.step = this.options.step, this.value = this.options.value, this.el = u(this.options.el), this.dragStatus = "", this.scope = this.max - this.min, this.initHtml(), this.updateValue(this.value);
    var l = this.el.querySelector(".v-slider__button-wrapper");
    this.bindTouchEvent(l), this.touchMixin = new r(), this.el.addEventListener("click", this.onClick);
  };

  function getDom(el) {
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }

    var isDOM = (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? function (el) {
      return el instanceof HTMLElement;
    } : function (el) {
      return el && _typeof(el) === 'object' && el.nodeType === 1 && typeof el.nodeName === 'string';
    };

    if (isDOM(el)) {
      return el;
    } else {
      throw TypeError('el is not define');
    }
  }

  var AudioPlayer = function AudioPlayer() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AudioPlayer);

    _defineProperty(this, "init", function () {
      _this.el.querySelector('.title').innerHTML = _this.title;

      _this.audioEl.setAttribute('src', _this.url);

      _this.getAudioInfo();

      _this.el.querySelector('.icon-audio').addEventListener('click', _this.playAndPause);
    });

    _defineProperty(this, "initHtml", function () {
      var html = "\n      <span class=\"icon icon-audio\"></span>\n      <div class=\"audio-info\">\n        <div class=\"title\"></div>\n        <div class=\"v-slider\"></div>\n        <div class=\"audio-time\">\n          <div class=\"audio-current\">00:00</div>\n          <div class=\"audio-duration\">00:00</div>\n        </div>\n      </div>\n      <audio class=\"audio-wapper\" preload></audio>\n    ";
      _this.el.innerHTML = html;
    });

    _defineProperty(this, "initFixSlider", function () {
      if (!_this.options.showFixed) {
        return;
      }

      var fixAudio = document.createElement('div');
      fixAudio.className = 'audio-player-fixed';
      var htmlFixed = "\n      <span class=\"icon icon-audio\"></span>\n      <div class=\"audio-info\">\n        <div class=\"title\"></div>\n        <div class=\"v-slider\"></div>\n        <div class=\"audio-time\">\n          <div class=\"audio-current\">00:00</div>\n          <div class=\"audio-duration\">00:00</div>\n        </div>\n      </div>\n      <span class=\"icon icon-close-btn\"></span>\n    ";
      fixAudio.innerHTML = htmlFixed;
      _this.fixAudio = fixAudio;
      document.body.appendChild(fixAudio);
      _this.fixAudio.querySelector('.title').innerHTML = _this.title;

      _this.fixAudio.querySelector('.icon-audio').addEventListener('click', _this.playAndPause);

      _this.fixAudio.querySelector('.icon-close-btn').addEventListener('click', _this.closeFixSlider);

      _this.fixAudio.querySelector('.audio-duration').innerHTML = _this.duration;
      _this.fixSlider = new c({
        el: _this.fixAudio.querySelector('.v-slider'),
        step: 0.1,
        value: _this.currentTimeValue,
        buttonSize: _this.options.buttonSize || '10px',
        activeColor: _this.options.activeColor || '#F45E23',
        change: _this.changeTime
      });
    });

    _defineProperty(this, "closeFixSlider", function () {
      if (_this.fixAudio) {
        _this.fixAudio.parentNode.removeChild(_this.fixAudio);

        _this.fixAudio = null;

        _this.audioPause();
      }
    });

    _defineProperty(this, "initSlider", function () {
      _this.slider = new c({
        el: _this.el.querySelector('.v-slider'),
        step: 0.1,
        buttonSize: _this.options.buttonSize || '10px',
        activeColor: _this.options.activeColor || '#F45E23',
        change: _this.changeTime
      });
    });

    _defineProperty(this, "playAndPause", function () {
      _this.play = !_this.play;
      _this.showPlayFixed = true;
      var audio = _this.audioEl;

      if (_this.play) {
        audio.play();

        _this.initFixSlider();
      } else {
        audio.pause();

        _this.closeFixSlider();
      }

      _this.options.playStatus && _this.options.playStatus(_this.play, _this.el.dataset.index);
    });

    _defineProperty(this, "audioPause", function () {
      _this.showPlayFixed = false;
      _this.play = false;

      _this.audioEl.pause();

      _this.closeFixSlider();
    });

    _defineProperty(this, "changeTime", function (val) {
      var audio = _this.audioEl;
      audio.currentTime = audio.duration * val / 100;
    });

    _defineProperty(this, "getAudioInfo", function () {
      var audio = _this.audioEl;
      audio.addEventListener('loadedmetadata', function () {
        _this.duration = _this.transTime(audio.duration);
        _this.el.querySelector('.audio-duration').innerHTML = _this.duration;

        if (_this.fixAudio) {
          _this.fixAudio.querySelector('.audio-duration').innerHTML = _this.duration;
        }
      });
      audio.addEventListener('timeupdate', function () {
        var value = Math.floor(audio.currentTime) / Math.floor(audio.duration) * 100;
        _this.currentTimeValue = parseInt(value * 100) / 100;
        _this.currentTime = _this.transTime(audio.currentTime);

        _this.slider.updateValue(_this.currentTimeValue);

        _this.el.querySelector('.audio-current').innerHTML = _this.currentTime;

        if (_this.fixAudio) {
          _this.fixSlider.updateValue(_this.currentTimeValue);

          _this.fixAudio.querySelector('.audio-current').innerHTML = _this.currentTime;
        }
      });
      audio.addEventListener('ended', function () {
        _this.play = false;
        _this.showPlayFixed = false;
        audio.pause();
        _this.currentTime = '00:00';
        _this.currentTimeValue = 0;

        _this.slider.updateValue(_this.currentTimeValue);

        _this.el.querySelector('.audio-current').innerHTML = _this.currentTime;

        if (_this.fixAudio) {
          _this.closeFixSlider();
        }
      }, false);
    });

    _defineProperty(this, "transTime", function (time) {
      var duration = parseInt(time);
      var minute = parseInt(duration / 60);
      var sec = duration % 60 + '';
      var isM0 = ':';

      if (minute === 0) {
        minute = '00';
      } else if (minute < 10) {
        minute = '0' + minute;
      }

      if (sec.length === 1) {
        sec = '0' + sec;
      }

      return minute + isM0 + sec;
    });

    this.options = options;
    this.url = this.options.url;
    this.title = this.options.title;
    this.el = getDom(this.options.el);
    this.initHtml();
    this.duration = '00:00';
    this.currentTime = '00:00';
    this.currentTimeValue = 0;
    this.play = false;
    this.showPlayFixed = false;
    this.audioEl = this.el.querySelector('.audio-wapper');
    this.init();
    this.initSlider();
  };

  return AudioPlayer;

})));
//# sourceMappingURL=audioPlayer.js.map
