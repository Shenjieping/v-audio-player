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
