<template>
  <div class="tome">
    <p v-time="timeNow"></p>
    <p v-time="timeBefore"></p>
  </div>
</template>
<script>
import Time from './time/time'
import Vue from 'vue'
Vue.directive('time', {
  bind: (el, binding) => {
    window.console.log(el)
    el.innerHTML = Time.getFormatTime(binding.value)
    el._timeOut = setInterval(() => {
      el.innerHTML = Time.getFormatTime(binding.value)
    }, 6000)
  },
  unbind: el => {
    clearInterval(el._timeOut)
    delete el._timeOut
  }
})
export default {
  data() {
    return {
      timeNow: new Date().getTime(),
      timeBefore: new Date('2020-01-9 01:12').getTime()
    }
  },

  mounted() {
    // window.console.log(Time)
  }
}
</script>