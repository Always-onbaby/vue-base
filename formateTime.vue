<template>
  <div class="tome">
    <p v-time="timeNow"></p>
    <p v-time="timeBefore"></p>
  </div>
</template>
<script>
import { Time } from './time/time'
import Vue from 'vue'
export default {
  data() {
    return {
      timeNow: new Date().getTime(),
      timeBefore: 1513123200000
    }
  },
  monted() {
    window.console.log(Time)
  }
}
</script>
