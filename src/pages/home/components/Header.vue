<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-zuojiantou back-icon"></span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
      输入
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-jiantouxia arrow-icon"></span>

    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style  scoped lang="stylus" rel="stylesheet/stylus">
  @import '~styles/varibles.styl'
  .header
    display: flex
    height: .86rem
    background: $bgColor
    line-height: .86rem
    color: #ffffff
    .header-left
      float: left
      width: .64rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      height: .64rem
      line-height: .64rem
      background: #ffffff
      color: #ccc
      border-radius: .1rem
      padding-left: .2rem
    .header-right
      float: right
      width: 1.24rem
      text-align center
      .arrow-icon
        margin-left :-.04rem
        font-size: .1rem
</style>
