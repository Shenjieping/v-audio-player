function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(t){return(r="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)})(t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var c=function e(){var t=this;a(this,e),s(this,"touchStart",(function(e){t.resetTouchStatus(),t.startX=e.touches[0].clientX,t.startY=e.touches[0].clientY})),s(this,"touchMove",(function(e){var i=e.touches[0];t.deltaX=i.clientX-t.startX,t.deltaY=i.clientY-t.startY,t.offsetX=Math.abs(t.deltaX),t.offsetY=Math.abs(t.deltaY)})),s(this,"resetTouchStatus",(function(){t.deltaX=0,t.deltaY=0,t.offsetX=0,t.offsetY=0})),this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0};function d(e,t){("boolean"!=typeof e.cancelable||e.cancelable)&&e.preventDefault(),t&&e.stopPropagation()}function f(e){return"function"==typeof e}function h(e){if("string"==typeof e&&(e=document.querySelector(e)),("object"===("undefined"==typeof HTMLElement?"undefined":r(HTMLElement))?function(e){return e instanceof HTMLElement}:function(e){return e&&"object"===r(e)&&1===e.nodeType&&"string"==typeof e.nodeName})(e))return e;throw TypeError("el is not define")}var p=function e(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),s(this,"initHtml",(function(){t.el.style.background=t.options.inactiveColor,t.el.innerHTML='\n      <div class="v-slider-bar">\n        <div class="v-slider__button-wrapper">\n          <div class="v-slider__button"></div>\n        </div>\n      </div>\n    ',t.el.querySelector(".v-slider__button").style.width=t.options.buttonSize,t.el.querySelector(".v-slider__button").style.height=t.options.buttonSize,t.options.barHeight&&(t.el.style.height=t.options.barHeight,t.el.querySelector(".v-slider-bar").style.height=t.options.barHeight),t.disabled&&t.el.classList.add("v-slider-disabled")})),s(this,"updateValue",(function(e,i){e=t.format(e);var n=t.options.input,o=t.options.change;n&&(f(n)?n.call(t,e):console.warn("input is not a function")),i&&o&&(f(o)?o.call(t,e):console.warn("change is not a function")),t.value=e,t.render()})),s(this,"setValue",(function(e){""===t.dragStatus&&t.updateValue(e)})),s(this,"format",(function(e){return Math.round(Math.max(t.min,Math.min(e,t.max))/t.step)*t.step})),s(this,"onClick",(function(e){if(!t.disabled){e.stopPropagation();var i=t.el.getBoundingClientRect(),n=e.clientX-i.left,o=i.width,r=+t.min+n/o*t.scope;t.startValue=t.value,t.updateValue(r,!0)}})),s(this,"onTouchStart",(function(e){t.disabled||(t.touchMixin.touchStart(e),t.currentValue=t.value,t.startValue=t.format(t.value),t.dragStatus="start")})),s(this,"onTouchMove",(function(e){if(!t.disabled){var i=t.options.dragStart;"start"===t.dragStatus&&i&&(f(i)?i():console.warn("dragStart is not a function")),t.el.querySelector(".v-slider-bar").style.transition="none 0s ease 0s",d(e,!0),t.touchMixin.touchMove(e),t.dragStatus="draging";var n=t.el.getBoundingClientRect(),o=t.touchMixin.deltaX/n.width*t.scope;t.currentValue=t.startValue+o,t.updateValue(t.currentValue)}})),s(this,"onTouchEnd",(function(){if(!t.disabled){if("draging"===t.dragStatus){t.updateValue(t.currentValue,!0);var e=t.options.dragEnd;e&&(f(e)?e():console.warn("dragEnd is not a function"))}t.el.querySelector(".v-slider-bar").style.transition=null,t.dragStatus=""}})),s(this,"bindTouchEvent",(function(e){var i=t.onTouchStart,n=t.onTouchMove,o=t.onTouchEnd;e.addEventListener("touchstart",i),e.addEventListener("touchmove",n),o&&(e.addEventListener("touchend",o),e.addEventListener("touchcancel",o))})),s(this,"calcMainAxis",(function(){var e=t.value,i=t.min,n=t.scope;return"".concat(100*(e-i)/n,"%")})),s(this,"calcOffset",(function(){return t.value,t.min,t.scope,null})),s(this,"render",(function(){var e={width:t.calcMainAxis(),background:t.options.activeColor},i=t.el.querySelector(".v-slider-bar");i.style.width=e.width,i.style.background=e.background})),this.options=l({min:0,max:100,step:1,value:0,disabled:!1},i),this.min=this.options.min,this.max=this.options.max,this.step=this.options.step,this.value=this.options.value,this.disabled=this.options.disabled,this.el=h(this.options.el),this.dragStatus="",this.scope=this.max-this.min,this.initHtml(),this.updateValue(this.value);var n=this.el.querySelector(".v-slider__button-wrapper");this.bindTouchEvent(n),this.touchMixin=new c,this.el.addEventListener("click",this.onClick)};function y(t){if("string"==typeof t&&(t=document.querySelector(t)),("object"===("undefined"==typeof HTMLElement?"undefined":e(HTMLElement))?function(e){return e instanceof HTMLElement}:function(t){return t&&"object"===e(t)&&1===t.nodeType&&"string"==typeof t.nodeName})(t))return t;throw TypeError("el is not define")}var v=function e(){var n=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),i(this,"init",(function(){n.el.querySelector(".title").innerHTML=n.title,n.audioEl.setAttribute("src",n.url),n.getAudioInfo(),n.el.querySelector(".icon-audio").addEventListener("click",n.playAndPause)})),i(this,"initHtml",(function(){n.el.innerHTML='\n      <span class="icon icon-audio">\n        <span class="icon icon-loading"></span>\n      </span>\n      <div class="audio-info">\n        <div class="title"></div>\n        <div class="v-slider"></div>\n        <div class="audio-time">\n          <div class="audio-current">00:00</div>\n          <div class="audio-duration">00:00</div>\n        </div>\n      </div>\n      <audio class="audio-wapper" preload></audio>\n    '})),i(this,"initFixSlider",(function(){if(!n.isDestory&&n.options.showFixed){var e=document.createElement("div");e.className="audio-player-fixed ".concat(n.options.fixedClass||"");var t='\n      <span class="icon icon-audio"></span>\n      <div class="audio-info">\n        <div class="title"></div>\n        <div class="v-slider"></div>\n        <div class="audio-time">\n          <div class="audio-current">'.concat(n.currentTime,'</div>\n          <div class="audio-duration">').concat(n.duration,'</div>\n        </div>\n      </div>\n      <span class="icon icon-close-btn"></span>\n    ');e.innerHTML=t,n.fixAudio=e,document.body.appendChild(e),n.fixAudio.querySelector(".title").innerHTML=n.title,n.fixAudio.querySelector(".icon-audio").addEventListener("click",n.playAndPause),n.fixAudio.querySelector(".icon-close-btn").addEventListener("click",n.closeFixSlider),n.fixSlider=new p(o(o({el:n.fixAudio.querySelector(".v-slider"),step:.1,value:n.currentTimeValue,buttonSize:"10px",activeColor:"#F45E23"},n.sliderOptions),{},{change:n.changeTime}))}})),i(this,"closeFixSlider",(function(){n.isDestory||n.fixAudio&&(n.fixAudio.parentNode.removeChild(n.fixAudio),n.fixAudio=null,n.audioPause())})),i(this,"initSlider",(function(){n.isDestory||(n.slider=new p(o(o({el:n.el.querySelector(".v-slider"),step:.1,buttonSize:"10px",activeColor:"#F45E23",disabled:!n.loading},n.sliderOptions),{},{change:n.changeTime})))})),i(this,"playAndPause",(function(){if(!n.isDestory&&n.loading){n.play=!n.play,n.showPlayFixed=!0;var e=n.audioEl;n.play?(e.play(),n.initFixSlider()):e.pause(),n.options.playStatus&&n.options.playStatus(n.play,n.el.dataset.index)}})),i(this,"audioPause",(function(){n.isDestory||(n.showPlayFixed=!1,n.play=!1,n.audioEl.pause(),n.closeFixSlider())})),i(this,"changeTime",(function(e){var t=n.audioEl;t.currentTime=t.duration*e/100})),i(this,"getAudioInfo",(function(){var e=n.audioEl;e.addEventListener("loadedmetadata",(function(){n.loading=!0,n.initSlider(),n.duration=n.transTime(e.duration),n.el.querySelector(".audio-duration").innerHTML=n.duration;var t=n.el.querySelector(".icon-audio .icon-loading");t&&n.el.querySelector(".icon-audio").removeChild(t),n.fixAudio&&(n.fixAudio.querySelector(".audio-duration").innerHTML=n.duration)})),e.addEventListener("error",(function(){n.loading=!0;var e=n.el.querySelector(".icon-audio .icon-loading");e&&n.el.querySelector(".icon-audio").removeChild(e),n.options.error&&n.options.error()})),e.addEventListener("timeupdate",(function(){if(!n.isDestory){var t=Math.floor(e.currentTime)/Math.floor(e.duration)*100;n.currentTimeValue=parseInt(100*t)/100,n.currentTime=n.transTime(e.currentTime),n.slider.setValue(n.currentTimeValue),n.el.querySelector(".audio-current").innerHTML=n.currentTime,n.fixAudio&&(n.fixSlider.setValue(n.currentTimeValue),n.fixAudio.querySelector(".audio-current").innerHTML=n.currentTime)}})),e.addEventListener("ended",(function(){n.isDestory||(n.play=!1,n.showPlayFixed=!1,e.pause(),n.currentTime="00:00",n.currentTimeValue=0,n.slider.setValue(n.currentTimeValue),n.el.querySelector(".audio-current").innerHTML=n.currentTime,n.fixAudio&&(n.fixSlider.setValue(n.currentTimeValue),n.closeFixSlider()))}),!1)})),i(this,"transTime",(function(e){var t=parseInt(e),i=parseInt(t/60),n=t%60+"";return 0===i?i="00":i<10&&(i="0"+i),1===n.length&&(n="0"+n),i+":"+n})),i(this,"destory",(function(){n.audioPause(),n.isDestory=!0,n.fixAudio&&(n.fixAudio.parentNode.removeChild(n.fixAudio),n.fixAudio=null),n.el&&(n.el.parentNode.removeChild(n.el),n.el=null)})),this.options=r,this.url=this.options.url,this.title=this.options.title,this.el=y(this.options.el),this.initHtml(),this.duration="00:00",this.currentTime="00:00",this.currentTimeValue=0,this.play=!1,this.showPlayFixed=!1,this.audioEl=this.el.querySelector(".audio-wapper"),this.loading=!1,this.isDestory=!1,this.sliderOptions=r.sliderOptions||{},this.init(),this.initSlider()};export default v;
