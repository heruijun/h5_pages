<style>
  body,div,ul,li,h1,h2,h3,h4,h5,h6,header,footer,p{
    margin:0;
    padding:0;
    list-style:none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  img {
    display: block;
    margin:auto;
    max-width: 100%;
  }
  body {
    font-family: "黑体";
    max-width: 520px;
    margin:auto;
    background: #ffffff;
    position: relative;
  }
  input {
    outline: none;
    border:none;
    font-family: "黑体";
  }
  header {
    height: 40px;
    display: table;
    width: 100%;
    text-align: center;
    color: #fff;
    background-color: #367cf0;
    position: relative;
  }
  header .title {
    vertical-align: middle;
    display: table-cell;
    font-size: 15px;
  }
  header .return {
    display: table-cell;
    vertical-align: middle;
    height: 4px;
    width: 40px;
  }
  header .return img {
    width: 10px;
    margin: auto;
  }
  header .menu {
    display: table-cell;
    vertical-align: middle;
    height: 4px;
    width: 40px;
  }
  header .menu img {
    width: 18px;
    margin: auto;
  }
  .flat_img {
    position: relative;
    margin: 0 auto;
  }
  .flat_bg {
    width: 100%;
    height: 200px;
  }
  .flat_head {
    border-radius: 60px;
    overflow: hidden;
    width: 100px;
    border: 5px solid #000000;
    height: 100px;
    bottom: -50px;
    position: absolute;
    left: calc( 50% - 50px );
  }
  .flat_title {
    text-align: center;
    margin-top: 60px;
  }
  .flat_name {
    font-size: 18px;
    font-weight: bold;
  }
  .flat_zhima {
    background: url(./static/zhimabg.png);
    background-size: 100% 100%;
    color: #fff;
    padding: 0 9px 0 19px;
  }
  .sound_region {
    position: relative;
    margin: 0 auto;
  }
  .sound_bg {
    width: 100%;
  }
  .sound_content {
    overflow: hidden;
    width: 220px;
    height: 205px;
    bottom: -60px;
    position: absolute;
    left: calc( 50% - 110px );
    background: #fff;
    border-radius: 15px;
    text-align: center;
  }
  .sound_content .title {
    font-size: 18px;
    border-bottom: 1px dashed #000000;
    line-height: 50px;
  }
  .sound_content .sound_img img {
    margin: 20px auto;
    width: 55px;
  }
  .sound_content .sound_img i {
    position: absolute;
    width: 5px;
    background: #ff0000;
    height: 5px;
    top: 80px;
    left: 124px;
    border-radius: 5px;
  }
  .advert_region {
    padding-top: 100px;
    background: #fcfcfc;
  }


</style>

<template>
  <div>
    <header>
      <div class="return">
        <a><img src="./static/back.png" alt="返回"></a>
      </div>
      <div class="title">一键推送{{ aaa }}</div>
      <div class="menu">
        <a><img src="./static/share.png" alt="分享"></a>
      </div>
    </header>
    <div class="content">
      <div v-if="pushData.tag == 1">
        <div class="flat_img">
          <img class="flat_bg" src="">
          <img class="flat_head" src="">
        </div>
        <div class="flat_title">
          <span class="flat_name">{{ pushData.landlordInfo.name }}</span>
          <span class="flat_zhima">{{ pushData.landlordInfo.zhimaScore }}</span>
        </div>
      </div>
      <div v-if="pushData.tag == 2">
        <div class="flat_img">
          <img class="flat_bg" :src="flatImgbg">
          <img class="flat_head" :src="flatImgbg">
        </div>
        <div class="flat_title">
          <span class="flat_name">{{ pushData.landlordInfo.name }}</span>
          <span class="flat_zhima">{{ pushData.landlordInfo.zhimaScore }}</span>
        </div>
      </div>
      <div class="sound_region">
        <img class="sound_bg" src="./static/soundbg.png">
        <div class="sound_content">
          <p class="title">房东寄语</p>
          <div class="sound_img">
            <img @click="soundPlay()" src="./static/sound.png"><i></i>
          </div>
          <p>诚邀您使用蘑菇租房<br/>在线交租和在线保修</p>
        </div>
      </div>
      <div class="advert_region">
        <img src="./static/advert.png">
      </div>
    </div>

  </div>
</template>

<script>
import HybridJS from '../assets/js/base'
const $M = HybridJS
import ENV from '../assets/js/env'

export default {
  data () {
    return {

      flatImgbg: "",
      aaa: 122,
      pushData: {
        landlordInfo: {
          "delNum": 123,
          "flatImgbg": "https://www.baidu.com/img/bd_logo1.png",
          "flatStar": 2,
          "headImg": "https://www.baidu.com/img/bd_logo1.png",
          "intro": "测试内容1k3v介绍测试内容1k3v介绍测试内容1k3v介绍测试内容1k3v介绍测试内容1k3v介绍测试内容1k3v介绍测试内容1k3v介绍测试内容1k3v介绍测试内容1k3v介绍测试内容1k3v介绍测试内容1k3v介绍测试内容1k3v介绍",
          "name": "蘑菇公寓",
          "renterNum": 63081,
          "roomList": [
            {
              "img": "https://www.baidu.com/img/bd_logo1.png",
              "name": "测试内容1",
              "price": 123,
              "tag": [],
              "url": "https://www.baidu.com/"
            },
            {
              "img": "https://www.baidu.com/img/bd_logo1.png",
              "name": "测试内容2",
              "price": 234,
              "tag": [],
              "url": "https://www.baidu.com/"
            },
            {
              "img": "https://www.baidu.com/img/bd_logo1.png",
              "name": "测试内容3",
              "price": 345,
              "tag": [],
              "url": "https://www.baidu.com/"
            },
            {
              "img": "https://www.baidu.com/img/bd_logo1.png",
              "name": "测试内容4",
              "price": 456,
              "tag": [],
              "url": "https://www.baidu.com/"
            }
          ],
          "serviceList": [],
          "shareInfo": [
            {
              "img": "测试内容n448",
              "intro": "测试内容mvws",
              "title": "测试内容42nr"
            }
          ],
          "soundRecord": "http://freshly-ground.com/data/audio/mpc/20060826%20-%20Armstrong.mp3",
          "weixinJSSDK": 46840,
          "zhimaScore": 666
        },
        tag: 1
      },
      dataMsg: {
        head: ENV.MOCK_USERINFO
      }
    }
  },

  mounted() {
    this.flatImgbg = this.pushData.landlordInfo.flatImgbg
    $M.nativeReady(bridge => {
      bridge.init(message => {
        var head = JSON.parse(message)
        this.dataMsg.head = head
        this.loadDetail()
      })
    })
  },

  methods: {
    soundPlay() {
      var sound=soundManager.createSound({
        id: 'sound_id',
        url: 'http://freshly-ground.com/data/audio/mpc/20060826%20-%20Armstrong.mp3'
      })
      sound.play()

      $M.nativeReady(bridge => {
        bridge.callHandler('toast', 'about')
      })
    }
  }
}
</script>
