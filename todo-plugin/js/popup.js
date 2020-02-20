var PluginProp = function() {}
PluginProp.prototype = {
	init: function() {
		this.handle()
		return this
	},
	handle: function() {
		// $('.content').text(_bg.userinfo)
		// console.log(_bg.userinfo)
		// console.log($(body))
		$('#getUserInfo').on('click', function() {
			var _bg = chrome.extension.getBackgroundPage()
			var a = new _bg.PluginBackground().init()
			alert(a.userinfo)
		})
	}
}
var myProp = new PluginProp().init()
