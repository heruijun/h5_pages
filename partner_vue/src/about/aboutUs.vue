<style>
  body {background:#f5f5f5;}
  .weui_cell {padding: 15px 20px;}
</style>

<template>
  <div class="weui_cells weui_cells_access" style="margin-top:0;">
    <img src="./static/logo.jpg" style="display:block;width:30%;margin:3em auto 5em auto;"/>
    <a class="weui_cell" href="javascript:;" @click="callPhone()">
      <div class="weui_cell_bd weui_cell_primary">
        <p>客服电话：{{ phone }}</p>
      </div>
      <div class="weui_cell_ft">
      </div>
    </a>
    <a class="weui_cell" href="javascript:;" @click="email">
      <div class="weui_cell_bd weui_cell_primary">
        <p>蘑菇邮箱：hbservice@mogoroom.com</p>
      </div>
      <div class="weui_cell_ft">
      </div>
    </a>
    <a class="weui_cell" href="javascript:;">
      <div class="weui_cell_bd weui_cell_primary">
        <p>QQ帮助：3538230023</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: ""
    }
  },

  mounted() {
    console.log('mounted...')
  },

  methods: {
    callPhone(){
      console.log('拨打电话。。。')
    },

    email() {

    }
  }
}
</script>
