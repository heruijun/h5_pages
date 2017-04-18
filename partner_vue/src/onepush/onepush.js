import Vue from 'vue'
import MogoGlobal from '../common/js/index'
import onepushTp from './onepushTp'
import filters from '../common/js/filters'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

Vue.use(MogoGlobal)

new Vue({
  el: '#app',
  components: { onepushTp }
})
