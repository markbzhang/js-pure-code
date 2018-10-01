var os = function() {
    var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
    isIPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isIPhone && !isAndroid && !isSymbian && !isTablet;
    return {
         isWindowsPhone : isWindowsPhone,
         isTablet : isTablet,
         isIPhone : isIPhone,
         isAndroid : isAndroid,
         isPc : isPc
    };
}();



var browser={
  versions:function(){
      var u = navigator.userAgent, app = navigator.appVersion;
      return {
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1 //是否iPad
      };
  }()
};