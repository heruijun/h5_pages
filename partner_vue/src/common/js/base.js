'use strict'

import axios from 'axios'
import HybridJS from './core'
import md5 from './md5'
import stringify from 'json-stable-stringify'
require('es6-promise').polyfill()
const $M = HybridJS

const ignoreJsonNull = function (jsonObj) {
  (function filter(obj) {
    if (typeof obj == "object") {
      _each(obj, function(key, value) {
        if (value === null){
          delete obj[key];
        } else if (Object.prototype.toString.call(value) === '[object Object]') {
          filter(value);
        } else if (Array.isArray(value)) {
          value.forEach(function (el) { filter(el); });
        }
      })
    }
  })(jsonObj)

  function _isArrayLike(o) { // 类数组对象
    if (o &&
        typeof o === 'object' &&
        isFinite(o.length) &&
        o.length >=0 &&
        o.length===Math.floor(o.length) &&
        o.length < 4294967296)
        return true
    else
        return false
  }

  function _each ( obj, callback ) {
    var length, i = 0;

    if ( _isArrayLike( obj ) ) {  // jquey: isArrayLike
      length = obj.length;
      for ( ; i < length; i++ ) {
        if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
          break;
        }
      }
    } else {
      for ( i in obj ) {
        if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
          break;
        }
      }
    }
    return obj;
  }
}

// 统一管理ajax调用
$M.wrapAPI('ajax', (url, param, requestCallback, pageNo) => {
  if(pageNo == 1){
    $M.nativeReady(bridge => {
      bridge.callHandler('showProgress', 'open')
    })
  }
  let paramJSON = JSON.parse(param)
  if (navigator.userAgent == 'MogoWebkit' && paramJSON.head.channel == 'MOCK_USER') {
    console.log('当前账号用的是mock数据，请与Native端排查确保传入账号的真实性')
    return
  }
  ignoreJsonNull(paramJSON.para)
  let key = md5(stringify(paramJSON))
  // console.log('请求key：' + key)
  paramJSON.head.key = key
  param = JSON.stringify(paramJSON)
  // console.log('请求参数：' + param)
  let reqAppVersion = paramJSON.head.appVersion

  axios.post(url.replace(/(\d\.){2}(\d)/, reqAppVersion), param)
    .then(function (res) {
      let [resultCode, resultMsg] = [res.data.body.result.resultCode, res.data.body.result.resultMsg]
      if(resultCode == 'XT0007' || resultCode == 'QX0004' || resultCode == 'QX0005') {
        $M.nativeReady(bridge => {
          bridge.callHandler('toast', resultMsg)
          bridge.callHandler('loginStatus', 'logout')
        })
        return
      }
      if(resultCode == 'QX0009') {
        $M.nativeReady(bridge => {
          // console.log('无权限fail')
          bridge.callHandler('showProgress', 'close')
          bridge.callHandler('auth', 'fail')
        })
        return
      }
      if(requestCallback(res.data) == 'RESPONSE_BINDING') {   // 根据业务显示toast报错，不显示页面
        $M.nativeReady(bridge => {
          bridge.callHandler('showProgress', 'close')
          bridge.callHandler('toast', resultMsg)
        })
        return
      }
      if(resultCode != '1' && resultCode != '10000') {
        $M.nativeReady(bridge => {
          bridge.callHandler('showProgress', 'close')
          bridge.callHandler('showErrView', resultMsg)
          bridge.callHandler('toast', resultMsg)
        })
        return;
      }
      Array.from(document.querySelectorAll('.lazyload')).forEach(ele => {
        ele.style.display = 'block'
      });
      if(pageNo == 1){
        $M.nativeReady(bridge => {
          // bridge.callHandler('toast', res)
          setTimeout(function(){
            bridge.callHandler('showProgress', 'close')
          }, 200)
        })
      }
    })
    .catch(function (err) {
      console.log('出错：' + err);
      $M.nativeReady(bridge => {
        if(pageNo == 1){
          bridge.callHandler('showProgress', 'close')
        }
        bridge.callHandler('showErrView', 'show')
      })
    })
})

module.exports = $M
