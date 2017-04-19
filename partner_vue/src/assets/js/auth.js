import HybridJS from './core'
const $M = HybridJS

export function authControl(el, codeCompare = Array, modelName) {
  console.log('控制的codes: ' + codeCompare)
  // console.log('modelName: ' + modelName)
  if (codeCompare.length == 1 && codeCompare[0] == 'auth-none') {
    if (modelName != 'userModel') {
      $M.nativeReady(bridge => {
        bridge.callHandler('auth', 'fail')
      })
    }
  }
  let btns = el.querySelectorAll('[data-code]')
  let [codeList, codeUsed] = [[], []]
  Array.from(btns).forEach(v => { codeList.push(v.getAttribute('data-code')) })
  for (let i = 0; i < codeCompare.length; i++) {
    codeUsed = filterItems(codeList, codeCompare[i])
    codeList = codeUsed
  }
  Array.from(btns).forEach(v => {
    for (let i = 0; i < codeUsed.length; i++) {
      if (v.getAttribute('data-code') === codeUsed[i]) {
        console.log('控制的code: ' + codeUsed[i])
        v.style.display = 'none'
      }
    }
  })
}

function filterItems(codeList, codeCompare) {
  return codeList.filter(code => {
    return code !== codeCompare
  })
}
