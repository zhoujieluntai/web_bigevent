//注意每次调用$.get() 或$.post 或$.ajax()的时候  会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function(options) {
    //在发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    console.log(options.url)
})