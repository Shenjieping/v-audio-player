// const Slider = require('./slider.min.js');
import Slider from './slider.es.js';
import { getDom } from "./util";

class AudioPlayer {
  constructor (options = {}) {
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
  init = () => {
    this.el.querySelector('.title').innerHTML = this.title;
    this.audioEl.setAttribute('src', this.url);
    this.getAudioInfo();
    this.el.querySelector('.icon-audio').addEventListener('click', this.playAndPause);
  }
  initHtml = () => {
    const html = `
      <span class="icon icon-audio"></span>
      <div class="audio-info">
        <div class="title"></div>
        <div class="v-slider"></div>
        <div class="audio-time">
          <div class="audio-current">00:00</div>
          <div class="audio-duration">00:00</div>
        </div>
      </div>
      <audio class="audio-wapper" preload></audio>
    `;
    this.el.innerHTML = html;
  }
  initFixSlider = () => {
    if (!this.options.showFixed) {
      return;
    }
    let fixAudio = document.createElement('div');
    fixAudio.className = 'audio-player-fixed';
    const htmlFixed = `
      <span class="icon icon-audio"></span>
      <div class="audio-info">
        <div class="title"></div>
        <div class="v-slider"></div>
        <div class="audio-time">
          <div class="audio-current">00:00</div>
          <div class="audio-duration">00:00</div>
        </div>
      </div>
      <span class="icon icon-close-btn"></span>
    `;
    fixAudio.innerHTML = htmlFixed;
    this.fixAudio = fixAudio;
    document.body.appendChild(fixAudio);

    this.fixAudio.querySelector('.title').innerHTML = this.title;
    this.fixAudio.querySelector('.icon-audio').addEventListener('click', this.playAndPause);
    this.fixAudio.querySelector('.icon-close-btn').addEventListener('click', this.closeFixSlider);
    this.fixAudio.querySelector('.audio-duration').innerHTML = this.duration;
    this.fixSlider = new Slider({
      el: this.fixAudio.querySelector('.v-slider'),
      step: 0.1,
      value: this.currentTimeValue,
      buttonSize: this.options.buttonSize || '10px',
      activeColor: this.options.activeColor || '#F45E23',
      change: this.changeTime
    });
  }
  closeFixSlider = () => {
    if (this.fixAudio) {
      this.fixAudio.parentNode.removeChild(this.fixAudio);
      this.fixAudio = null;
      this.audioPause();
    }
  }
  initSlider = () => {
    this.slider = new Slider({
      el: this.el.querySelector('.v-slider'),
      step: 0.1,
      buttonSize: this.options.buttonSize || '10px',
      activeColor: this.options.activeColor || '#F45E23',
      change: this.changeTime
    });
  }
  playAndPause = () => {
    this.play = !this.play;
    this.showPlayFixed = true;
    let audio = this.audioEl;
    if (this.play) {
      audio.play();
      this.initFixSlider();
    } else {
      audio.pause();
      this.closeFixSlider();
    }
    this.options.playStatus && this.options.playStatus(this.play, this.el.dataset.index);
  }
  audioPause = () => {
    this.showPlayFixed = false;
    this.play = false;
    this.audioEl.pause();
    this.closeFixSlider();
  }
  changeTime = (val) => {
    let audio = this.audioEl;
    audio.currentTime = (audio.duration * val) / 100;
  }
  getAudioInfo = () => {
    let audio = this.audioEl;
    audio.addEventListener('loadedmetadata', () => {
      this.duration = this.transTime(audio.duration);
      this.el.querySelector('.audio-duration').innerHTML = this.duration;
      if (this.fixAudio) {
        this.fixAudio.querySelector('.audio-duration').innerHTML = this.duration;
      }
    });
    audio.addEventListener('timeupdate', () => {
      let value = (Math.floor(audio.currentTime) / Math.floor(audio.duration)) * 100;
      this.currentTimeValue = (parseInt(value * 100)) / 100;
      this.currentTime = this.transTime(audio.currentTime);
      this.slider.updateValue(this.currentTimeValue);
      this.el.querySelector('.audio-current').innerHTML = this.currentTime;
      if (this.fixAudio) {
        this.fixSlider.updateValue(this.currentTimeValue);
        this.fixAudio.querySelector('.audio-current').innerHTML = this.currentTime;
      }
    });
    audio.addEventListener('ended', () => {
      this.play = false;
      this.showPlayFixed = false;
      audio.pause();
      this.currentTime = '00:00';
      this.currentTimeValue = 0;
      this.slider.updateValue(this.currentTimeValue);
      this.el.querySelector('.audio-current').innerHTML = this.currentTime;
      if (this.fixAudio) {
        this.closeFixSlider();
      }
    }, false);
  }
  transTime = (time) => {
    let duration = parseInt(time);
    let minute = parseInt(duration / 60);
    let sec = duration % 60 + '';
    let isM0 = ':';
    if (minute === 0) {
      minute = '00';
    } else if (minute < 10) {
      minute = '0' + minute;
    }
    if (sec.length === 1) {
      sec = '0' + sec;
    }
    return minute + isM0 + sec;
  }
};

export default AudioPlayer;