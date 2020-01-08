<template>
    <div class="tome">
        <p v-time="timeNow"></p>
        <p v-time="timeBefore"></p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            timeNow: new Date().getTime(),
            timeBefore: 1513123200000
        }
    },
    methods: {
        /**获取时间戳 */
        getUnix() {
            let date = new Date()
            return date.getTime()
        },
        /**获取今天0点0分0秒的时间戳 */
        getTodayUnix() {
            let date = new Date()
            date.setHours(0)
            date.setMinutes(0)
            date.setSeconds(0)
            date.setMilliseconds(0)
            return date.getTime()
        },
        /**获取今年一月一日0点0分0秒的时间戳 */
        getYearUnix() {
            let date = new Date()
            date.setMonth(0)
            date.setDate(1)
            date.setHours(0)
            date.setMinutes(0)
            date.setSeconds(0)
            date.setMilliseconds(0)
            return date.getTime()
        }
    }
}
</script>