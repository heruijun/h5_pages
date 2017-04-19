import { authControl } from './auth'

let globalOptions = {}

export const initPlugin = function(Vue, options) {
  Mogo.setGlobalOptions(options)
  Vue.mogo = Vue.prototype.$mogo = Mogo
}

export const Mogo = {
  authControl: function (el, codes, modelName) {
    authControl(el, codes, modelName)
  },

  setGlobalOptions: function (options) {
    globalOptions = options || {}
  }
}

export default {initPlugin, Mogo}
