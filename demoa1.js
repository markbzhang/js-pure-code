/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }
  
  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });
  
  
  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });
  
  
  
  var a = capitalize('zhangbing121');  //初次没用用缓存
  console.log(a);
  
  var b = camelize('zhangbing121');  //没用缓存
  console.log(b);
  
  
  var c = camelize('zhangbing121');  //用了缓存
  console.log(c);