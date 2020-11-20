function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(e){return(n="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)})(e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u=function t(){var e=this;o(this,t),r(this,"touchStart",(function(t){e.resetTouchStatus(),e.startX=t.touches[0].clientX,e.startY=t.touches[0].clientY})),r(this,"touchMove",(function(t){var i=t.touches[0];e.deltaX=i.clientX-e.startX,e.deltaY=i.clientY-e.startY,e.offsetX=Math.abs(e.deltaX),e.offsetY=Math.abs(e.deltaY)})),r(this,"resetTouchStatus",(function(){e.deltaX=0,e.deltaY=0,e.offsetX=0,e.offsetY=0})),this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0};function l(t,e){("boolean"!=typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&t.stopPropagation()}function c(t){return"function"==typeof t}function d(t){if("string"==typeof t&&(t=document.querySelector(t)),("object"===("undefined"==typeof HTMLElement?"undefined":n(HTMLElement))?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"===n(t)&&1===t.nodeType&&"string"==typeof t.nodeName})(t))return t;throw TypeError("el is not define")}var f=function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),r(this,"initHtml",(function(){e.el.style.background=e.options.inactiveColor,e.el.innerHTML='\n      <div class="v-slider-bar">\n        <div class="v-slider__button-wrapper">\n          <div class="v-slider__button"></div>\n        </div>\n      </div>\n    ',e.el.querySelector(".v-slider__button").style.width=e.options.buttonSize,e.el.querySelector(".v-slider__button").style.height=e.options.buttonSize,e.options.barHeight&&(e.el.style.height=e.options.barHeight,e.el.querySelector(".v-slider-bar").style.height=e.options.barHeight),e.disabled&&e.el.classList.add("v-slider-disabled")})),r(this,"updateValue",(function(t,i){t=e.format(t);var n=e.options.input,o=e.options.change;n&&(c(n)?n.call(e,t):console.warn("input is not a function")),i&&o&&(c(o)?o.call(e,t):console.warn("change is not a function")),e.value=t,e.render()})),r(this,"setValue",(function(t){""===e.dragStatus&&e.updateValue(t)})),r(this,"format",(function(t){return Math.round(Math.max(e.min,Math.min(t,e.max))/e.step)*e.step})),r(this,"onClick",(function(t){if(!e.disabled){t.stopPropagation();var i=e.el.getBoundingClientRect(),n=t.clientX-i.left,o=i.width,r=+e.min+n/o*e.scope;e.startValue=e.value,e.updateValue(r,!0)}})),r(this,"onTouchStart",(function(t){e.disabled||(e.touchMixin.touchStart(t),e.currentValue=e.value,e.startValue=e.format(e.value),e.dragStatus="start")})),r(this,"onTouchMove",(function(t){if(!e.disabled){var i=e.options.dragStart;"start"===e.dragStatus&&i&&(c(i)?i():console.warn("dragStart is not a function")),e.el.querySelector(".v-slider-bar").style.transition="none 0s ease 0s",l(t,!0),e.touchMixin.touchMove(t),e.dragStatus="draging";var n=e.el.getBoundingClientRect(),o=e.touchMixin.deltaX/n.width*e.scope;e.currentValue=e.startValue+o,e.updateValue(e.currentValue)}})),r(this,"onTouchEnd",(function(){if(!e.disabled){if("draging"===e.dragStatus){e.updateValue(e.currentValue,!0);var t=e.options.dragEnd;t&&(c(t)?t():console.warn("dragEnd is not a function"))}e.el.querySelector(".v-slider-bar").style.transition=null,e.dragStatus=""}})),r(this,"bindTouchEvent",(function(t){var i=e.onTouchStart,n=e.onTouchMove,o=e.onTouchEnd;t.addEventListener("touchstart",i),t.addEventListener("touchmove",n),o&&(t.addEventListener("touchend",o),t.addEventListener("touchcancel",o))})),r(this,"calcMainAxis",(function(){var t=e.value,i=e.min,n=e.scope;return"".concat(100*(t-i)/n,"%")})),r(this,"calcOffset",(function(){return e.value,e.min,e.scope,null})),r(this,"render",(function(){var t={width:e.calcMainAxis(),background:e.options.activeColor},i=e.el.querySelector(".v-slider-bar");i.style.width=t.width,i.style.background=t.background})),this.options=s({min:0,max:100,step:1,value:0,disabled:!1},i),this.min=this.options.min,this.max=this.options.max,this.step=this.options.step,this.value=this.options.value,this.disabled=this.options.disabled,this.el=d(this.options.el),this.dragStatus="",this.scope=this.max-this.min,this.initHtml(),this.updateValue(this.value);var n=this.el.querySelector(".v-slider__button-wrapper");this.bindTouchEvent(n),this.touchMixin=new u,this.el.addEventListener("click",this.onClick)};function h(e){if("string"==typeof e&&(e=document.querySelector(e)),("object"===("undefined"==typeof HTMLElement?"undefined":t(HTMLElement))?function(t){return t instanceof HTMLElement}:function(e){return e&&"object"===t(e)&&1===e.nodeType&&"string"==typeof e.nodeName})(e))return e;throw TypeError("el is not define")}var p=function t(){var n=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),i(this,"init",(function(){n.el.querySelector(".title").innerHTML=n.title,n.audioEl.setAttribute("src",n.url),n.getAudioInfo(),n.el.querySelector(".icon-audio").addEventListener("click",n.playAndPause)})),i(this,"initHtml",(function(){n.el.innerHTML='\n      <span class="icon icon-audio">\n        <span class="icon icon-loading"></span>\n      </span>\n      <div class="audio-info">\n        <div class="title"></div>\n        <div class="v-slider"></div>\n        <div class="audio-time">\n          <div class="audio-current">00:00</div>\n          <div class="audio-duration">00:00</div>\n        </div>\n      </div>\n      <audio class="audio-wapper" preload></audio>\n    '})),i(this,"initFixSlider",(function(){if(n.options.showFixed){var t=document.createElement("div");t.className="audio-player-fixed ".concat(n.options.fixedClass||"");var e='\n      <span class="icon icon-audio"></span>\n      <div class="audio-info">\n        <div class="title"></div>\n        <div class="v-slider"></div>\n        <div class="audio-time">\n          <div class="audio-current">'.concat(n.currentTime,'</div>\n          <div class="audio-duration">').concat(n.duration,'</div>\n        </div>\n      </div>\n      <span class="icon icon-close-btn"></span>\n    ');t.innerHTML=e,n.fixAudio=t,document.body.appendChild(t),n.fixAudio.querySelector(".title").innerHTML=n.title,n.fixAudio.querySelector(".icon-audio").addEventListener("click",n.playAndPause),n.fixAudio.querySelector(".icon-close-btn").addEventListener("click",n.closeFixSlider),n.fixSlider=new f({el:n.fixAudio.querySelector(".v-slider"),step:.1,value:n.currentTimeValue,buttonSize:n.options.buttonSize||"10px",activeColor:n.options.activeColor||"#F45E23",change:n.changeTime})}})),i(this,"closeFixSlider",(function(){n.fixAudio&&(n.fixAudio.parentNode.removeChild(n.fixAudio),n.fixAudio=null,n.audioPause())})),i(this,"initSlider",(function(){n.slider=new f({el:n.el.querySelector(".v-slider"),step:.1,buttonSize:n.options.buttonSize||"10px",activeColor:n.options.activeColor||"#F45E23",change:n.changeTime})})),i(this,"playAndPause",(function(){if(n.loading){n.play=!n.play,n.showPlayFixed=!0;var t=n.audioEl;n.play?(t.play(),n.initFixSlider()):t.pause(),n.options.playStatus&&n.options.playStatus(n.play,n.el.dataset.index)}})),i(this,"audioPause",(function(){n.showPlayFixed=!1,n.play=!1,n.audioEl.pause(),n.closeFixSlider()})),i(this,"changeTime",(function(t){var e=n.audioEl;e.currentTime=e.duration*t/100})),i(this,"getAudioInfo",(function(){var t=n.audioEl;t.addEventListener("loadedmetadata",(function(){n.loading=!0,n.duration=n.transTime(t.duration),n.el.querySelector(".audio-duration").innerHTML=n.duration;var e=n.el.querySelector(".icon-audio .icon-loading");e&&n.el.querySelector(".icon-audio").removeChild(e),n.fixAudio&&(n.fixAudio.querySelector(".audio-duration").innerHTML=n.duration)})),t.addEventListener("error",(function(){n.loading=!0;var t=n.el.querySelector(".icon-audio .icon-loading");t&&n.el.querySelector(".icon-audio").removeChild(t),n.options.error&&n.options.error()})),t.addEventListener("timeupdate",(function(){var e=Math.floor(t.currentTime)/Math.floor(t.duration)*100;n.currentTimeValue=parseInt(100*e)/100,n.currentTime=n.transTime(t.currentTime),n.slider.setValue(n.currentTimeValue),n.el.querySelector(".audio-current").innerHTML=n.currentTime,n.fixAudio&&(n.fixSlider.setValue(n.currentTimeValue),n.fixAudio.querySelector(".audio-current").innerHTML=n.currentTime)})),t.addEventListener("ended",(function(){n.play=!1,n.showPlayFixed=!1,t.pause(),n.currentTime="00:00",n.currentTimeValue=0,n.slider.setValue(n.currentTimeValue),n.el.querySelector(".audio-current").innerHTML=n.currentTime,n.fixAudio&&(n.fixSlider.setValue(n.currentTimeValue),n.closeFixSlider())}),!1)})),i(this,"transTime",(function(t){var e=parseInt(t),i=parseInt(e/60),n=e%60+"";return 0===i?i="00":i<10&&(i="0"+i),1===n.length&&(n="0"+n),i+":"+n})),this.options=o,this.url=this.options.url,this.title=this.options.title,this.el=h(this.options.el),this.initHtml(),this.duration="00:00",this.currentTime="00:00",this.currentTimeValue=0,this.play=!1,this.showPlayFixed=!1,this.audioEl=this.el.querySelector(".audio-wapper"),this.loading=!1,this.init(),this.initSlider()};export default p;
