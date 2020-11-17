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

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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

  !function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Slider = e();
  }(undefined, function () {

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function r(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function s(e, t) {
      var n,
          o = Object.keys(e);
      return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), o.push.apply(o, n)), o;
    }

    function a() {
      var e = this;
      o(this, a), r(this, "touchStart", function (t) {
        e.resetTouchStatus(), e.startX = t.touches[0].clientX, e.startY = t.touches[0].clientY;
      }), r(this, "touchMove", function (t) {
        t = t.touches[0];
        e.deltaX = t.clientX - e.startX, e.deltaY = t.clientY - e.startY, e.offsetX = Math.abs(e.deltaX), e.offsetY = Math.abs(e.deltaY);
      }), r(this, "resetTouchStatus", function () {
        e.deltaX = 0, e.deltaY = 0, e.offsetX = 0, e.offsetY = 0;
      }), this.deltaX = 0, this.deltaY = 0, this.offsetX = 0, this.offsetY = 0;
    }

    function u(t) {
      return "function" == typeof t;
    }

    return function t() {
      var i = this,
          e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      o(this, t), r(this, "initHtml", function () {
        i.el.style.background = i.options.inactiveColor, i.el.innerHTML = '\n      <div class="v-slider-bar">\n        <div class="v-slider__button-wrapper">\n          <div class="v-slider__button"></div>\n        </div>\n      </div>\n    ', i.el.querySelector(".v-slider__button").style.width = i.options.buttonSize, i.el.querySelector(".v-slider__button").style.height = i.options.buttonSize, i.options.barHeight && (i.el.style.height = i.options.barHeight, i.el.querySelector(".v-slider-bar").style.height = i.options.barHeight);
      }), r(this, "updateValue", function (t, e) {
        t = i.format(t);
        var n = i.options.input,
            o = i.options.change;
        n && (u(n) ? n.call(i, t) : console.warn("input is not a function")), e && o && (u(o) ? o.call(i, t) : console.warn("change is not a function")), i.value = t, i.render();
      }), r(this, "format", function (t) {
        return Math.round(Math.max(i.min, Math.min(t, i.max)) / i.step) * i.step;
      }), r(this, "onClick", function (t) {
        t.stopPropagation();
        var e = i.el.getBoundingClientRect(),
            t = t.clientX - e.left,
            e = e.width,
            e = +i.min + t / e * i.scope;
        i.startValue = i.value, i.updateValue(e, !0);
      }), r(this, "onTouchStart", function (t) {
        i.touchMixin.touchStart(t), i.currentValue = i.value, i.startValue = i.format(i.value), i.dragStatus = "start";
      }), r(this, "onTouchMove", function (t) {
        var e,
            n = i.options.dragStart;
        "start" === i.dragStatus && n && (u(n) ? n() : console.warn("dragStart is not a function")), i.el.querySelector(".v-slider-bar").style.transition = "none 0s ease 0s", e = !0, "boolean" == typeof (n = t).cancelable && !n.cancelable || n.preventDefault(), e && n.stopPropagation(), i.touchMixin.touchMove(t), i.dragStatus = "draging";
        t = i.el.getBoundingClientRect(), t = i.touchMixin.deltaX / t.width * i.scope;
        i.currentValue = i.startValue + t, i.updateValue(i.currentValue);
      }), r(this, "onTouchEnd", function () {
        var t;
        "draging" === i.dragStatus && (i.updateValue(i.currentValue, !0), (t = i.options.dragEnd) && (u(t) ? t() : console.warn("dragEnd is not a function"))), i.el.querySelector(".v-slider-bar").style.transition = null, i.dragStatus = "";
      }), r(this, "bindTouchEvent", function (t) {
        var e = i.onTouchStart,
            n = i.onTouchMove,
            o = i.onTouchEnd;
        t.addEventListener("touchstart", e), t.addEventListener("touchmove", n), o && (t.addEventListener("touchend", o), t.addEventListener("touchcancel", o));
      }), r(this, "calcMainAxis", function () {
        var t = i.value,
            e = i.min,
            n = i.scope;
        return "".concat(100 * (t - e) / n, "%");
      }), r(this, "calcOffset", function () {
        i.value, i.min, i.scope;
        return null;
      }), r(this, "render", function () {
        var t = {
          width: i.calcMainAxis(),
          background: i.options.activeColor
        },
            e = i.el.querySelector(".v-slider-bar");
        e.style.width = t.width, e.style.background = t.background;
      }), this.options = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(n), !0).forEach(function (t) {
            r(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }

        return e;
      }({
        min: 0,
        max: 100,
        step: 1,
        value: 0
      }, e), this.min = this.options.min, this.max = this.options.max, this.step = this.options.step, this.value = this.options.value, this.el = function (t) {
        if ("string" == typeof t && (t = document.querySelector(t)), ("object" === ("undefined" == typeof HTMLElement ? "undefined" : n(HTMLElement)) ? function (t) {
          return t instanceof HTMLElement;
        } : function (t) {
          return t && "object" === n(t) && 1 === t.nodeType && "string" == typeof t.nodeName;
        })(t)) return t;
        throw TypeError("el is not define");
      }(this.options.el), this.dragStatus = "", this.scope = this.max - this.min, this.initHtml(), this.updateValue(this.value);
      e = this.el.querySelector(".v-slider__button-wrapper");
      this.bindTouchEvent(e), this.touchMixin = new a(), this.el.addEventListener("click", this.onClick);
    };
  });

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

  var AudioPlayer = /*#__PURE__*/function () {
    function AudioPlayer() {
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

      _defineProperty(this, "initSlider", function () {
        _this.slider = new Slider({
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
        } else {
          audio.pause();
        }

        _this.options.playStatus && _this.options.playStatus(_this.play, _this.el.dataset.index);
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
        });
        audio.addEventListener('timeupdate', function () {
          var value = Math.floor(audio.currentTime) / Math.floor(audio.duration) * 100;
          _this.currentTimeValue = parseInt(value * 100) / 100;
          _this.currentTime = _this.transTime(audio.currentTime);

          _this.slider.updateValue(_this.currentTimeValue);

          _this.el.querySelector('.audio-current').innerHTML = _this.currentTime;
        });
        audio.addEventListener('ended', function () {
          _this.play = false;
          _this.showPlayFixed = false;
          audio.pause();
          _this.currentTime = '00:00';
          _this.currentTimeValue = 0;

          _this.slider.updateValue(_this.currentTimeValue);

          _this.el.querySelector('.audio-current').innerHTML = _this.currentTime;
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
    }

    _createClass(AudioPlayer, [{
      key: "audioPause",
      value: function audioPause() {
        this.showPlayFixed = false;
        this.play = false;
        this.audioEl.pause();
      }
    }]);

    return AudioPlayer;
  }();

  return AudioPlayer;

})));
//# sourceMappingURL=audioPlayer.js.map
