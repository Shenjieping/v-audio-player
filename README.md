# 音频播放器

## 使用方法

```html
<link rel="stylesheet" href="./css/style.css">
<script src="./js/touch.js"></script>
<script src="./../dist/audioPlayer.js"></script>
```

```html
<p>demo1</p>
<div class="audio-player player1" data-index="1"></div>
<p>demo2</p>
<div class="audio-player player2" data-index="2"></div>
```

```js
new AudioPlayer({
  el: document.querySelector('.player1'), // 容器，必填
  title: '测试音频地址', // 标题
  url: 'http://jsvod.fzyun.cn/live_upload/custom/20200831/1802ab08-937b-48e0-bf20-4d6756d2c8a4.mp3', // 音频地址
  sliderOptions: {
    activeColor: '#F45E23', // 进度条颜色
    buttonSize: '12px', // 进度条按钮大小
  },
  fixedClass: 'share', // 浮窗类名
  showFixed: true, // 显示浮窗
  playStatus: function(val, index) {
    let audio = document.querySelectorAll('.audio-player');
    [...audio].forEach(el => { // 阻止多个audio同时播放
      if (el.dataset.index !== index) {
        el.querySelector('.audio-wapper').pause();
      }
    })
  }
});

new AudioPlayer({
  el: document.querySelector('.player2'),
  title: '测试音频地址2222',
  url: 'http://jsvod.fzyun.cn/live_upload/custom/20200831/1802ab08-937b-48e0-bf20-4d6756d2c8a4.mp3',
  playStatus: function(val, index) {
    let audio = document.querySelectorAll('.audio-player');
    [...audio].forEach(el => {
      if (el.dataset.index !== index) {
        el.querySelector('.audio-wapper').pause();
      }
    })
  }
});
```

## 兼容性

默认只兼容移动端，如果要在PC端使用请引用 `public/js/touch.js`

## API

| 参数 | 说明 | 类型 |  默认值  |
|:-----|:---|:----| :----- |
| el | 播放器容器 | HTMLElement/String | -- |
| title | 音频标题 | String | -- |
| url | 音频地址 | String | 必填 |
| sliderOptions | slider配置 | Object | -- |
| showFixed | 是否显示浮窗 | Boolean | false |
| fixedClass | 浮窗类名 | String | -- |
| playStatus | 播放暂停事件 | function(val) | -- |
| error | 音频加载失败的回调 | function() | -- |

----

**sliderOptions 配置**

| 参数 | 说明 | 类型 |  默认值  |
|:-----|:---|:----| :----- |
| value | 当前进度百分比 | Number | 0 |
| max | 最大值 | Number | 100 |
| min | 最小值 | Number | 0 |
| step | 步长 | Number | 1 |
| el | slider容器 | DOMHTML  | 此值必填 |
| activeColor | 进度条激活态颜色 | string  | #F45E23 |
| inactiveColor | 进度非激活态颜色 | string  | #e5e5e5 |
| buttonSize | 滑块按钮大小 | string  | 12px |
| barHeight | 进度条高度 | string  | 2px |
| disabled | 是否禁用滑块 | boolean  | false |
| input | 进度变化时实时触发 | function(val) | -- |
| change | 进度变化且结束拖动后触发 | function(val) | -- |
| dragStart | 开始拖动时触发 | function() | -- |
| dragEnd | 结束拖动时触发 | function() | -- |

## DEMO演示

[audio-player](http://shenjp.top/v-audio-player/public/index.html)

## 开发

```bash
git clone https://github.com/Shenjieping/v-audio-player.git

npm install

npm run serve

npm run build       # 默认打包成umd规范
npm run build:es    # 打包成es6规范
npm run build:cjs   # 打包成commonjs规范
```