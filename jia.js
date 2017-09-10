var jia = (function () {

    var _ = function (obj) {

    };

    // 返回当前时间戳
    _.now = Data.now || function() {
        return new Data.getTime();
    };


    // Current version.
    _.VERSION = '1.0.0';

    // cmd nodejs支持
    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    }

    // amd requirejs 支持
    if (typeof define == 'function' && define.amd) {
        define('jia', [], function() {
            return _;
        });
    }

    // 原生返回
    return _;
})();
