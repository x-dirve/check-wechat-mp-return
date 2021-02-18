/**
 * 数据类型判断
 * @param  subject 待判断的数据
 * @param  type    数据类型名字
 * @return         判断结果
 */
function is(subject, type) {
    return Object.prototype.toString.call(subject).substr(8, type.length).toLowerCase() === type;
}

/**
 * 是否是字符串
 * @param  subject 待判断的数据
 */
function isString(subject) {
    return is(subject, "string");
}

/**操作成功判断正则 */
const OK_REGEXP = /\:ok$/i;
/**操作失败判断正则 */
const FAIL_REGEXP = /\:fail\s+/;
/**检测接口返回数据是否成功 */
function check(msg) {
    return OK_REGEXP.test(String(msg));
}
/**默认错误信息 */
const DEF_FAIL_MSG = "未知错误";
/**
 * 获取默认错误信息
 * @param msg 微信返回的信息
 * @param def 是否返回默认信息(boolean)或未能成功获取时的信息(string)
 */
function getErrMsg(msg, def) {
    // def 为 false 时，直接返回原始传入的信息，不返回默认错误
    // def 为字符串时，返回使用者定义的信息
    const theDefMsg = def === false ? msg : isString(def) ? String(def) : DEF_FAIL_MSG;
    if (msg && msg.split) {
        const reMsg = msg.split(FAIL_REGEXP)[1];
        return reMsg ? reMsg : theDefMsg;
    }
    return theDefMsg;
}

export { FAIL_REGEXP, OK_REGEXP, check, getErrMsg };
//# sourceMappingURL=index.esm.js.map
