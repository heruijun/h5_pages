<style>
  .title-position {position:absolute;padding:1em 1.5em;background:#4078c0;color:#fff;display:inline-block;}
  .weui_grid {padding:25px 20px;width: 33.33vw;height: 33.33vw;}
  /*.weui_grid_icon {margin-bottom: 10px;width:8vw;height:8vw;}*/
  .icon img {width:30px;height:30px;}
  .icon_square {width: 100%;height: 100%;}
  .icon_square .weui_grid_label {margin-top: 5px;font-size: 12px;color: #8e9299;}
  .weui_grid_label{white-space: nowrap;font-size: 12px;color: #8e9299;}
  .weui_grid:nth-child(3n):before {border-right: 1px solid #d9d9d9;}
</style>

<template>
  <div>
    <a href="#" class="weui_grid" @click='appointment' data-code="3700000">
      <div style='width:70px;height:60px;margin-top:15%;position:relative;margin-left:50%;left:-35px;'>
        <div class="weui_grid_icon">
          <img src="./static/appointment.png" alt="" style='width:25px;height:24px;'>
        </div>
        <p class="weui_grid_label">
          预约管理
        </p>
      </div>
    </a>
    <a href="#" class="weui_grid" @click="leaseList" data-code="3100000">
      <div style='width:70px;height:60px;margin-top:15%;position:relative;margin-left:50%;left:-35px;'>
        <div class="weui_grid_icon">
          <img src="./static/leasemanage.png" alt="">
        </div>
        <p class="weui_grid_label">
          租约管理
        </p>
      </div>
    </a>
    <a href="#" class="weui_grid" @click="roomRemove" data-code="3200000">
      <div style='width:70px;height:60px;margin-top:15%;position:relative;margin-left:50%;left:-35px;'>
        <div class="weui_grid_icon">
          <img src="./static/removeroom.png" alt="">
        </div>
        <p class="weui_grid_label">
          退房管理
        </p>
      </div>
    </a>
     <a href="#" class="weui_grid" @click="accountLease()" data-code="3300000">
      <div style='width:70px;height:60px;margin-top:15%;position:relative;margin-left:50%;left:-35px;'>
        <div class="weui_grid_icon">
          <img src="./static/finance.png" alt="">
        </div>
        <p class="weui_grid_label">
            应收实收列表
        </p>
        <p style='font-size:12px;text-align:center;color: #8e9299;'>(租期中)</p>
      </div>
    </a>
    <a href="#" class="weui_grid" @click="accountCheckOut()" data-code="3400000">
      <div style='width:70px;height:60px;margin-top:15%;position:relative;margin-left:50%;left:-35px;'>
        <div class="weui_grid_icon">
          <img src="./static/finance.png" alt="">
        </div>
        <p class="weui_grid_label">
            应收实收列表
        </p>
        <p style='font-size:12px;text-align:center;color: #8e9299;'>(已退房)</p>
      </div>
    </a>
    <a href="#" class="weui_grid" @click="financeManage" data-code="3500000">
      <div style='width:70px;height:60px;margin-top:15%;position:relative;margin-left:50%;left:-35px;'>
        <div class="weui_grid_icon">
          <img src="./static/financeManage.png" alt="">
        </div>
        <p class="weui_grid_label">
           金融管理
        </p>
      </div>
    </a>
    <a href="#" class="weui_grid" @click="repairManage" data-code="3600000">
      <div style='width:70px;height:60px;margin-top:15%;position:relative;margin-left:50%;left:-35px;'>
        <div class="weui_grid_icon">
          <img src="./static/repair.png" alt="">
        </div>
        <p class="weui_grid_label">
           报修管理
        </p>
      </div>
    </a>
    <a href="#" class="weui_grid" @click="spreadManage" data-code="3800000">
      <div style='width:70px;height:60px;margin-top:15%;position:relative;margin-left:50%;left:-35px;'>
        <div class="weui_grid_icon">
          <img src="./static/spreadManage.png" alt="">
        </div>
        <p class="weui_grid_label">
           推广管理
        </p>
      </div>
    </a>
  </div>
</template>

<script>
import HybridJS from '../common/js/base'
const $M = HybridJS

export default {
  data () {
    return {
      codes: [],
      user: {}
    }
  },

  watch: {
    codes: function(val, oldVal) {
      let btns = this.$el.querySelectorAll('[data-code]')
      Array.from(btns).forEach(v => {
        v.style.display = 'block'
      })
      this.$mogo.authControl(this.$el, val)
    }
  },

  mounted() {
    $M.nativeReady(bridge => {
      bridge.init()
      bridge.registerHandler('authority', (data, responseCallback) => {
        this.codes = JSON.parse(data)
      })
    })
  },

  methods: {
    appointment(){
      $M.nativeReady(bridge => {
        bridge.callHandler('intent', 'appointment')
      })
    },
    leaseList(){
      $M.nativeReady(bridge => {
        bridge.callHandler('intent', 'leaseList')
      })
    },
    roomRemove(){
      $M.nativeReady(bridge => {
        bridge.callHandler('intent', 'roomRemove')
      })
    },
    accountLease(){
      $M.nativeReady(bridge => {
        bridge.callHandler('intent', 'accountList')
      })
    },
    accountCheckOut(){
      $M.nativeReady(bridge => {
        bridge.callHandler('intent', 'accountListByCheckOut')
      })
    },
    financeManage(){
      $M.nativeReady(bridge => {
        bridge.callHandler('intent', 'mogobaoFinancialManager')
      })
    },
    repairManage(){
      $M.nativeReady(bridge => {
        bridge.callHandler('intent', 'repairManager')
      })
    },
    spreadManage(){
      $M.nativeReady(bridge => {
        bridge.callHandler('intent_path', 'spread/index.html');
      })
    }
  }
}
</script>
