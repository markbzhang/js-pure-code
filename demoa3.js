// 遍历所有的输入框
[].slice.call(document.querySelectorAll('input, textarea')).forEach(function (ele) {
    ele.addEventListener('paste', function (event) {
        // 输入框类型
        var type = this.getAttribute('type') || this.type;
        // 剪切板数据对象
        var clipboardData = event.clipboardData || window.clipboardData;
        // 粘贴内容
        var paste = '';
        // 剪切板对象可以获取
        if (!clipboardData) { return; }
        // 获取选中的文本内容
        var userSelection, textSelected = '';
        if (window.getSelection) { 
            // 现代浏览器
            // 直接window.getSelection().toString()对于IE的输入框无效
            textSelected = this.value.slice(ele.selectionStart, ele.selectionEnd);
        } else if (document.selection) { 
            // 旧IE浏览器
            textSelected = document.selection.createRange().text;
        }
        // 只有输入框没有数据，或全选状态才处理
        if (this.value.trim() == '' || textSelected === this.value) {
            // 阻止冒泡和默认粘贴行为
            event.preventDefault();
            event.stopPropagation();
            // 获取粘贴数据
            paste = clipboardData.getData('text') || '';
            // 进行如下处理
            // 除非是password，其他都过滤前后空格
            if (type != 'password') {
                paste = paste.trim();
            }
            // 邮箱处理，可能会使用#代替@避免被爬虫抓取
            if (type == 'email') {
                paste = paste.replace('#', '@');
            } else if (type == 'tel') {
                // 手机号处理
                paste = paste.replace(/^\+86/, '');
                // 如果此时剩余所有数字正好11位
                if (paste.match(/\d/) && paste.match(/\d/g).length == 11) {
                    paste = paste.replace(/\D/g, '');
                }    
            } // 其他类型处理大家自行补充...
            
            // 插入
            this.value = paste;
        }
    });    
});