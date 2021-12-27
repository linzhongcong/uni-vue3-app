
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"喜茶Go","titleColor":"#000000"}},"nvue":{"compiler":"uni-app","styleCompiler":"weex","flex-direction":"column"},"renderer":"auto","appname":"uni-vue3-app","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"compilerVersion":"3.2.16","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#999999","selectedColor":"#343434","borderStyle":"white","blurEffect":"none","fontSize":"16px","iconWidth":"25px","spacing":"3px","height":"49px","backgroundColor":"#F7F7F7","list":[{"pagePath":"pages/home/home","iconPath":"/static/images/tabbar/home.png","selectedIconPath":"/static/images/tabbar/home_selected.png","text":"首页"},{"pagePath":"pages/index/index","iconPath":"/static/images/tabbar/index.png","selectedIconPath":"/static/images/tabbar/index_selected.png","text":"点单"},{"pagePath":"pages/department/department","iconPath":"/static/images/tabbar/mart.png","selectedIconPath":"/static/images/tabbar/mart_selected.png","text":"百货"},{"pagePath":"pages/order/order","iconPath":"/static/images/tabbar/order.png","selectedIconPath":"/static/images/tabbar/order_selected.png","text":"订单"},{"pagePath":"pages/my/my","iconPath":"/static/images/tabbar/my.png","selectedIconPath":"/static/images/tabbar/my_selected.png","text":"我的"}],"selectedIndex":0,"shown":true},"locales":{}};
  const __uniRoutes = [{"path":"pages/home/home","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"style":"custom"}}},{"path":"pages/index/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"backgroundColor":"#fff","titleText":"喜茶Go"}}},{"path":"pages/department/department","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"百货","style":"custom"}}},{"path":"pages/order/order","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"titleText":"订单","style":"custom"}}},{"path":"pages/my/my","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":4,"navigationBar":{"titleText":"我的","style":"custom"}}},{"path":"pages/other/address/address","meta":{"navigationBar":{"titleText":"收货地址"}}},{"path":"pages/other/enterprise-reunion/enterprise-reunion","meta":{"navigationBar":{"titleText":"企业团餐"}}},{"path":"pages/other/integral-mall/integral-mall","meta":{"navigationBar":{"titleText":"积分商城"}}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  