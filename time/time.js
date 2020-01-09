let Time = {
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
	},
	/**获取标准年月日 */
	getLastDate(time) {
		let date = new Date(time)
		let month =
			date.getMonth() + 1 < 10
				? '0' + (date.getMonth() + 1)
				: date.getMonth() + 1
		let day = date.getDay() < 10 ? '0' + date.getDay() : date.getDay()
		return `${date.getFullYear}-${month}-${day}`
	},
	/**转化时间 */
	getFormatTime(timestamp) {
		let now = getUnix()
		let today = getTodayUnix()
		let year = getYearUnix()
		let time = (now - timestamp) / 1000
		let tip = ''
		if (time < 0 || Math.floor(time / 60) <= 0) {
			tip = '刚刚'
		} else if (time < 3600) {
			tip = Math.floor(time / 60) + '分钟前'
		} else if (time > 3600 && time - today >= 0) {
			tip = Math.floor(time / 3600) + '小时前'
		} else if (time / 86400 <= 31) {
			tip = time / 86400 + '天前'
		} else {
			tip = getLastDate(timestamp)
		}
		return tip
	}
}
export default Time
