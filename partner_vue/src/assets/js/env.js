'use strict'

const ENV = {}

// 主账号模拟
ENV.MOCK_USERINFO = {
  "appType":1,
  "appVersion":"2.2.0",
  "channel":"MOCK_USER",
  "dataScope":1,
  //"key":"97db3a58de4c62927006cf71fe10eabf",
  "model":"ONEPLUS A3000",
  "orgId":-1,
  "os":"Android",
  "osVersion":"6.0.1",
  "regId":"1507bfd3f7c9f0e4404",
  //"token":"89ff3a7f11d759c071ef643416429c05",
  "token":"11514e1426d5d16fce99d3eb362eff6e",
  //"userId":0,
  "userId":3100080,
  // "userId": 4004337,
  // "userType":7,
  "userType":0,
  "uuid":"c5fc1b68d60b0fa0"

  // "appType":1,
  //  "appVersion":"2.2.0",
  //  "channel":"dev",
  //  "dataScope":0,
  //  "model":"vivo X7",
  //  "orgId":-1,
  //  "os":"Android",
  //  "osVersion":"5.1.1",
  //  "regId":"18071adc033f8d6aa85",
  //  "token":"11514e1426d5d16fce99d3eb362eff6e",
  //  "userId":4004337,
  //  "userType":7,
  //  "uuid":"fab87346d0a97f0"
}

ENV.host = 'https://api.mgzf.com/papp/' + ENV.MOCK_USERINFO.appVersion
//ENV.host = 'https://apidemo.mgzf.com/papp/' + ENV.MOCK_USERINFO.appVersion
//ENV.host = 'http://192.168.60.203/papp/' + ENV.MOCK_USERINFO.appVersion

export default ENV
