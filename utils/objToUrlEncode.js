/*
* 对象转为url地址里的拼接参数
* objToUrlQuery方法返回最终数据
* param为对象
* [key]为前缀
* [encode]为是否encodeURIComponent
* */
function objToUrlQueryEncode(param, key, encode) {
    if (param==null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
            paramStr += objToUrlQueryEncode(param[i], k, encode)
        }
    }
    return paramStr;
}

export function objToUrlQuery(param, key, encode) {
    var params=urlEncode(param, key, encode)
    params=params.length>0?params.slice(1):''
    return params
}
