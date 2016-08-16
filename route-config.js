//配置页面
module.exports = function(router) {
	router.map({
		//登陆
		'/': {
			component: function (resolve) {
				require(['./components/home/login.vue'], resolve)
			}
		},
		//登陆
		'/login': {
			component: function (resolve) {
				require(['./components/home/login.vue'], resolve)
			}
		},
		//注册
		'/register': {
			component: function (resolve) {
				require(['./components/home/register.vue'], resolve)
			}
		},
		//主页
		'/homepage': {
			component: function (resolve) {
				require(['./components/home/homepage.vue'], resolve)
			}
		},
		'/saoma': {
			component: function (resolve) {
				require(['./components/home/saoma.vue'], resolve)
			}
		},
		//抽检结果列表
		'/checkPublished': {
			component: function (resolve) {
				require(['./components/foodcheck/checkPublished.vue'], resolve)
			}
		},
		//抽检结果详情
		'/checkPublishedDb': {
			component: function (resolve) {
				require(['./components/foodcheck/checkPublishedDb.vue'], resolve)
			}
		},
		//溯源信息查询
		'/inquire': {
			component: function (resolve) {
				require(['./components/inquire/inquire.vue'], resolve)
			}
		},
		//溯源信息查询
		'/cargoinfo': {
			component: function (resolve) {
				require(['./components/cargoinfo/cargoinfo.vue'], resolve)
			}
		},
		//分类查询
		'/classification': {
			component: function (resolve) {
				require(['./components/cargoinfo/classification.vue'], resolve)
			}
		}

	});
}
