//块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。
// IIFE 写法
(function () {
    var tmp = 'xxxx';
    //...
}());
  
// 块级作用域写法
{
    let tmp = 'xxxx';
    //...
}