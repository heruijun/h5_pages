// 去掉时分秒
exports.yMonth = (str) => {
  if(str != null)
    return str.substring(0, str.length - 9)
}

// 电话号码星号代替
exports.phoneSafety = (str) => {
  str = str + ''
  if(str == '' || str == 'undefined'){
    return ''
  } else {
    return str.replace(/1(\d{2})\d{4}(\d{4})/g, "1$1****$2")
  }
}

// 年月日提取  2018-09-02 00:00:00=>2018.09.02
// 已废弃，同dotFilter
exports.nyrFilter = (str) => {
  if(str == '' || str == 'undefined' || str == null ){
    return ''
  } else {
    var nstr = str.split(' ')
    var nyr = nstr[0]
    nyr.split('-')
    var spot = nyr.substring(2, nyr.length).split('-')
    var a = spot.join('.')
    return a
  }
}

// 时分提取  2018-09-02 00:00:00=>00:00
exports.sfmFilter = (str) => {
  if(str == '' || str == 'undefined' || str == null ){
    return ''
  } else {
    var nstr = str.split(' ')
    var sfm = nstr[1]
    var b = sfm.substring(0, sfm.length-3)
    return b
  }
}
//字符串过长后面显示省略号
exports.subFilter = (str) => {
  var strLength = str.length
    if(strLength>15){
      var b = str.substring(0, 15) + '...'
      return b
    } else {
      return str
    }
}

// 年月日时分秒-变成.  2018-09-02 00:00:00=>2018.09.02
exports.dotFilter = (str) => {
  if(str == '' || str == 'undefined' || str == null ){
    return ''
  } else {
    var nstr = str.substring(0, 10).split('-')
    var c = nstr.join('.')
    return c
  }
}

// 年月日-变成.  2018-09-02=>2018.09.02
exports.dotnFilter = (str) => {
  if(str == '' || str == 'undefined' || str == null ){
    return ''
  } else {
    var nstr = str.split('-')
    var c = nstr.join('.')
    return c
  }
}

// 拆分小区名
exports.houseFilter = (str) => {
  if(str == '' || str == 'undefined' || str == null ){
    return ''
  } else {
    var nstr = str.split('/')
    return nstr[1]
  }
}

// 负数去掉前面的负号
exports.toplusFilter = (num) => {
  if(str == '' || str == 'undefined' || str == null ){
    return ''
  } else {
    var pstr = str.toString()
    var npstr = pstr.substring(1, pstr.length)
    return npstr
  }
}

// 保留两位小数
exports.toTwoFilter = (num) => {
  var pstr = num.toFixed(2)
  return pstr
}

// 2016-6-6->2016年6月6日
exports.toWenZi = (str) => {
  if(str == '' || str == 'undefined' || str == null ){
    return ''
  } else {
    var nstr = str.substring(0, 10).split('-')
    var c = nstr[0] + '年' + nstr[1] + '月' + nstr[2] + '日'
    return c
  }
}

// 2015-10-21 00:00:00->2015年10月21日-15:20
exports.toWenziHourMin = (str) => {
  if(str == '' || str == 'undefined' || str == null ){
    return ''
  } else {
    var nstr = str.substring(0, 10).split('-')
    var hour = str.substring(11, 16)
    var c = nstr[0] + '年' + nstr[1] + '月' + nstr[2] + '日' + '-' + hour
    return c
  }
}
//转换为数字
exports.toNumber = (string) => {
    var num = parseFloat(string)
  return num.toFixed(2)
}
// 取正数
exports.positiveNumber = (number) => {
  return Math.abs(number)
}

// 退房原因
exports.reasonFilter = (reason) => {
  var reasonText = reason
  // if(reasonText == 'returnRoom-1') {
  //   reasonText = '换城市了'
  // } else if(reasonText == 'returnRoom-2') {
  //   reasonText = '换工作了'
  // } else if(reasonText == 'returnRoom-3') {
  //   reasonText = '服务不满意'
  // } else if(reasonText == 'returnRoom-4') {
  //   reasonText = '换个房间'
  // } else {
  //   reasonText = '请选择'
  // }
  switch (reason) {
    case 'returnRoom-1':
      reasonText = '换城市了'
      break;
    case 'returnRoom-2':
      reasonText = '换工作了'
      break;
    case 'returnRoom-3':
      reasonText = '服务不满意'
      break;
    case 'returnRoom-4':
      reasonText = '换个房间'
      break;
    // case 'returnRoom-5':
    //   reasonText = '其他'
    //   break;
  }
  return reasonText
}

// 绝对值
exports.absNumberFilter = (number) => {
  return Math.abs(number)
}
