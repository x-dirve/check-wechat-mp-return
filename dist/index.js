'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var OK_REGEXP = /\:ok$/i;
/**检测接口返回数据是否成功 */
function check(msg) {
    return OK_REGEXP.test(String(msg));
}

exports.OK_REGEXP = OK_REGEXP;
exports.check = check;
//# sourceMappingURL=index.js.map
