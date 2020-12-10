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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
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

  function i(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2 ? i(Object(o), !0).forEach(function (e) {
        n(t, e, o[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
      });
    }

    return t;
  }

  var r = function t() {
    var i = this;
    e(this, t), n(this, "touchStart", function (t) {
      i.resetTouchStatus(), i.startX = t.touches[0].clientX, i.startY = t.touches[0].clientY;
    }), n(this, "touchMove", function (t) {
      var e = t.touches[0];
      i.deltaX = e.clientX - i.startX, i.deltaY = e.clientY - i.startY, i.offsetX = Math.abs(i.deltaX), i.offsetY = Math.abs(i.deltaY);
    }), n(this, "resetTouchStatus", function () {
      i.deltaX = 0, i.deltaY = 0, i.offsetX = 0, i.offsetY = 0;
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

  var l = function t() {
    var i = this,
        l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    e(this, t), n(this, "initHtml", function () {
      i.el.style.background = i.options.inactiveColor, i.el.innerHTML = '\n      <div class="v-slider-bar">\n        <div class="v-slider__button-wrapper">\n          <div class="v-slider__button"></div>\n        </div>\n      </div>\n    ', i.el.querySelector(".v-slider__button").style.width = i.options.buttonSize, i.el.querySelector(".v-slider__button").style.height = i.options.buttonSize, i.options.barHeight && (i.el.style.height = i.options.barHeight, i.el.querySelector(".v-slider-bar").style.height = i.options.barHeight), i.disabled && i.el.classList.add("v-slider-disabled");
    }), n(this, "updateValue", function (t, e) {
      t = i.format(t);
      var n = i.options.input,
          o = i.options.change;
      n && (s(n) ? n.call(i, t) : console.warn("input is not a function")), e && o && (s(o) ? o.call(i, t) : console.warn("change is not a function")), i.value = t, i.render();
    }), n(this, "setValue", function (t) {
      "" === i.dragStatus && i.updateValue(t);
    }), n(this, "format", function (t) {
      return Math.round(Math.max(i.min, Math.min(t, i.max)) / i.step) * i.step;
    }), n(this, "onClick", function (t) {
      if (!i.disabled) {
        t.stopPropagation();
        var e = i.el.getBoundingClientRect(),
            n = t.clientX - e.left,
            o = e.width,
            r = +i.min + n / o * i.scope;
        i.startValue = i.value, i.updateValue(r, !0);
      }
    }), n(this, "onTouchStart", function (t) {
      i.disabled || (i.touchMixin.touchStart(t), i.currentValue = i.value, i.startValue = i.format(i.value), i.dragStatus = "start");
    }), n(this, "onTouchMove", function (t) {
      if (!i.disabled) {
        var e = i.options.dragStart;
        "start" === i.dragStatus && e && (s(e) ? e() : console.warn("dragStart is not a function")), i.el.querySelector(".v-slider-bar").style.transition = "none 0s ease 0s", a(t, !0), i.touchMixin.touchMove(t), i.dragStatus = "draging";
        var n = i.el.getBoundingClientRect(),
            o = i.touchMixin.deltaX / n.width * i.scope;
        i.currentValue = i.startValue + o, i.updateValue(i.currentValue);
      }
    }), n(this, "onTouchEnd", function () {
      if (!i.disabled) {
        if ("draging" === i.dragStatus) {
          i.updateValue(i.currentValue, !0);
          var t = i.options.dragEnd;
          t && (s(t) ? t() : console.warn("dragEnd is not a function"));
        }

        i.el.querySelector(".v-slider-bar").style.transition = null, i.dragStatus = "";
      }
    }), n(this, "bindTouchEvent", function (t) {
      var e = i.onTouchStart,
          n = i.onTouchMove,
          o = i.onTouchEnd;
      t.addEventListener("touchstart", e), t.addEventListener("touchmove", n), o && (t.addEventListener("touchend", o), t.addEventListener("touchcancel", o));
    }), n(this, "calcMainAxis", function () {
      var t = i.value,
          e = i.min,
          n = i.scope;
      return "".concat(100 * (t - e) / n, "%");
    }), n(this, "calcOffset", function () {
      i.value, i.min, i.scope;
      return null;
    }), n(this, "render", function () {
      var t = {
        width: i.calcMainAxis(),
        background: i.options.activeColor
      },
          e = i.el.querySelector(".v-slider-bar");
      e.style.width = t.width, e.style.background = t.background;
    }), this.options = o({
      min: 0,
      max: 100,
      step: 1,
      value: 0,
      disabled: !1
    }, l), this.min = this.options.min, this.max = this.options.max, this.step = this.options.step, this.value = this.options.value, this.disabled = this.options.disabled, this.el = u(this.options.el), this.dragStatus = "", this.scope = this.max - this.min, this.initHtml(), this.updateValue(this.value);
    var c = this.el.querySelector(".v-slider__button-wrapper");
    this.bindTouchEvent(c), this.touchMixin = new r(), this.el.addEventListener("click", this.onClick);
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
      var html = "\n      <span class=\"icon icon-audio\">\n        <span class=\"icon icon-loading\"></span>\n      </span>\n      <div class=\"audio-info\">\n        <div class=\"title\"></div>\n        <div class=\"v-slider\"></div>\n        <div class=\"audio-time\">\n          <div class=\"audio-current\">00:00</div>\n          <div class=\"audio-duration\">00:00</div>\n        </div>\n      </div>\n      <audio class=\"audio-wapper\" preload></audio>\n    ";
      _this.el.innerHTML = html;
    });

    _defineProperty(this, "initFixSlider", function () {
      if (_this.isDestory) return;

      if (!_this.options.showFixed) {
        return;
      }

      var fixAudio = document.createElement('div');
      fixAudio.className = "audio-player-fixed ".concat(_this.options.fixedClass || '');
      var htmlFixed = "\n      <span class=\"icon icon-audio\"></span>\n      <div class=\"audio-info\">\n        <div class=\"title\"></div>\n        <div class=\"v-slider\"></div>\n        <div class=\"audio-time\">\n          <div class=\"audio-current\">".concat(_this.currentTime, "</div>\n          <div class=\"audio-duration\">").concat(_this.duration, "</div>\n        </div>\n      </div>\n      <span class=\"icon icon-close-btn\"></span>\n    ");
      fixAudio.innerHTML = htmlFixed;
      _this.fixAudio = fixAudio;
      document.body.appendChild(fixAudio);
      _this.fixAudio.querySelector('.title').innerHTML = _this.title;

      _this.fixAudio.querySelector('.icon-audio').addEventListener('click', _this.playAndPause);

      _this.fixAudio.querySelector('.icon-close-btn').addEventListener('click', _this.closeFixSlider); // this.fixAudio.querySelector('.audio-duration').innerHTML = this.duration;


      _this.fixSlider = new l(_objectSpread2(_objectSpread2({
        el: _this.fixAudio.querySelector('.v-slider'),
        step: 0.1,
        value: _this.currentTimeValue,
        buttonSize: '10px',
        activeColor: '#F45E23'
      }, _this.sliderOptions), {}, {
        change: _this.changeTime
      }));
    });

    _defineProperty(this, "closeFixSlider", function () {
      if (_this.isDestory) return;

      if (_this.fixAudio) {
        _this.fixAudio.parentNode.removeChild(_this.fixAudio);

        _this.fixAudio = null;

        _this.audioPause();
      }
    });

    _defineProperty(this, "initSlider", function () {
      if (_this.isDestory) return;
      _this.slider = new l(_objectSpread2(_objectSpread2({
        el: _this.el.querySelector('.v-slider'),
        step: 0.1,
        buttonSize: '10px',
        activeColor: '#F45E23',
        disabled: !_this.loading
      }, _this.sliderOptions), {}, {
        change: _this.changeTime
      }));
    });

    _defineProperty(this, "playAndPause", function () {
      if (_this.isDestory) return;

      if (!_this.loading) {
        return;
      }

      _this.play = !_this.play;
      _this.showPlayFixed = true;
      var audio = _this.audioEl;

      if (_this.play) {
        audio.play();

        _this.initFixSlider();
      } else {
        audio.pause(); // this.closeFixSlider();
      }

      _this.options.playStatus && _this.options.playStatus(_this.play, _this.el.dataset.index);
    });

    _defineProperty(this, "audioPause", function () {
      if (_this.isDestory) return;
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
        _this.loading = true;

        _this.initSlider();

        _this.duration = _this.transTime(audio.duration);
        _this.el.querySelector('.audio-duration').innerHTML = _this.duration;

        var loadingImg = _this.el.querySelector('.icon-audio .icon-loading');

        if (loadingImg) {
          _this.el.querySelector('.icon-audio').removeChild(loadingImg);
        }

        if (_this.fixAudio) {
          _this.fixAudio.querySelector('.audio-duration').innerHTML = _this.duration;
        }
      });
      audio.addEventListener('error', function () {
        _this.loading = true;

        var loadingImg = _this.el.querySelector('.icon-audio .icon-loading');

        if (loadingImg) {
          _this.el.querySelector('.icon-audio').removeChild(loadingImg);
        }

        _this.options.error && _this.options.error();
      });
      audio.addEventListener('timeupdate', function () {
        if (_this.isDestory) return;
        var value = Math.floor(audio.currentTime) / Math.floor(audio.duration) * 100;
        _this.currentTimeValue = parseInt(value * 100) / 100;
        _this.currentTime = _this.transTime(audio.currentTime);

        _this.slider.setValue(_this.currentTimeValue);

        _this.el.querySelector('.audio-current').innerHTML = _this.currentTime;

        if (_this.fixAudio) {
          _this.fixSlider.setValue(_this.currentTimeValue);

          _this.fixAudio.querySelector('.audio-current').innerHTML = _this.currentTime;
        }
      });
      audio.addEventListener('ended', function () {
        if (_this.isDestory) return;
        _this.play = false;
        _this.showPlayFixed = false;
        audio.pause();
        _this.currentTime = '00:00';
        _this.currentTimeValue = 0;

        _this.slider.setValue(_this.currentTimeValue);

        _this.el.querySelector('.audio-current').innerHTML = _this.currentTime;

        if (_this.fixAudio) {
          _this.fixSlider.setValue(_this.currentTimeValue);

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

    _defineProperty(this, "destory", function () {
      _this.audioPause();

      _this.isDestory = true;

      if (_this.fixAudio) {
        _this.fixAudio.parentNode.removeChild(_this.fixAudio);

        _this.fixAudio = null;
      }

      if (_this.el) {
        _this.el.parentNode.removeChild(_this.el);

        _this.el = null;
      }
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
    this.loading = false;
    this.isDestory = false;
    this.sliderOptions = options.sliderOptions || {};
    this.init();
    this.initSlider();
  };

  return AudioPlayer;

})));
//# sourceMappingURL=audioPlayer.js.map
