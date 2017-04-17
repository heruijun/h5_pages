import Vue from 'vue'
import MogoGlobal from '../common/js/index'
import UserManage from './UserManage'
// import '../common/style/weui.min.css'
import filters from '../common/js/filters'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

Vue.use(MogoGlobal)

new Vue({
  el: '#app',
  components: { UserManage }
})
