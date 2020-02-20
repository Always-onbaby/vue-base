var PluginMain = function() {
	this.version = '0.1.0'
}
PluginMain.prototype = {
	init: function() {
		this.checkDomain()
		this.handle()
		return this
	},
	handle: function() {
		var _html = $('#head_wrapper').html()
		document.addEventListener('DOMContentLoaded', function() {
			console.log('我被执行了！' + _html)
		})
		$(document).ready(function() {
			console.log(
				$('body')
					.find('#he-xin-jie-shao')
					.html()
			)
			// chrome.browserAction.setBadgeText({ text: 'New' })
			// chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] })
		})
	},
	checkDomain: function() {
		var _this = this
		var host = window.location.host
		var domain = [
			'liepin',
			'zhaopin',
			'highpin',
			'fenjianli',
			'jianlika',
			'lagou',
			'linkedin',
			'dajie',
			'xmrc',
			'maimai',
			'51job',
			'51jingying'
		]
		$.each(domain, function(index, item) {
			if (host.indexOf(item) != -1) {
				_this.myGetLoginInfo()
			}
			// console.log(item)
		})
	},
	myGetLoginInfo() {
		chrome.runtime.sendMessage({
			type: 'myGetLoginInfo'
		})
	}
}

var myMain = new PluginMain().init()
