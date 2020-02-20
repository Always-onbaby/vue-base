var PluginBackground = function() {
	this.userinfo = {}
}
PluginBackground.prototype = {
	init: function() {
		this.handle()
		return false
	},
	handle: function() {
		var _this = this
		/**创建右键菜单 */
		chrome.contextMenus.create({
			title: '测试右键菜单',
			onclick: function() {
				_this.createRightBtn()
			}
		})
		chrome.contextMenus.create({
			title: '测试右键菜单2',
			onclick: function() {
				_this.createRightBtn2()
			}
		})
		chrome.runtime.onMessage.addListener(function(
			request,
			sender,
			sendResponse
		) {
			_this.onMessage(request, sender, sendResponse)
		})
	},
	onMessage: function(request, sender, callback) {
		switch (request.type) {
			case 'myGetLoginInfo':
				this.getLoginInfo(request, sender, callback)
				break
		}
	},
	//获取登录信息 ps.lie360.com
	getLoginInfo: function(request) {
		var _this = this
		chrome.cookies.getAll(
			{
				url: 'http://ps.lie360.com/'
			},
			function(cookies) {
				var _res = {}
				$.each(cookies, function(index, item) {
					if (
						item.name == 'name' ||
						item.name == 'isLogin' ||
						item.name == 'uid'
					) {
						_res[item.name] = item.value
					}
					_res['userId'] = _res['uid']
					_res['userName'] = _res['name']
				})
				_this.userinfo = $.extend(request, {
					pluginLieUserInfo: _res
				})
			}
		)
	},
	createRightBtn: function() {
		chrome.notifications.create(null, {
			type: 'basic',
			iconUrl: 'images/icon.png',
			title: '这是标题',
			message: '您刚才点击检测简历！'
		})
	},
	createRightBtn2: function() {
		chrome.notifications.create(null, {
			type: 'basic',
			iconUrl: 'images/icon.png',
			title: '这是标题',
			message: '您刚才点击了收集简历！'
		})
	}
}

var myBg = new PluginBackground().init()
