import { isString } from "@x-drive/utils";

/**操作成功判断正则 */
const OK_REGEXP = /\:ok$/i;

/**操作失败判断正则 */
const FAIL_REGEXP = /\:fail\s+/;

export { OK_REGEXP }

export { FAIL_REGEXP }

/**检测接口返回数据是否成功 */
function check(msg: string) {
    return OK_REGEXP.test(String(msg));
}

export { check };

/**默认错误信息 */
const DEF_FAIL_MSG = "未知错误";

/**
 * 获取默认错误信息
 * @param msg 微信返回的信息
 * @param def 是否返回默认信息(boolean)或未能成功获取时的信息(string)
 */
function getErrMsg(msg: string, def:boolean | string) {
    // def 为 false 时，直接返回原始传入的信息，不返回默认错误
    // def 为字符串时，返回使用者定义的信息
    const theDefMsg: string = def === false ? msg : isString(def) ? String(def) : DEF_FAIL_MSG;
    if (msg && msg.split) {
        const reMsg = msg.split(FAIL_REGEXP)[1];
        return reMsg ? reMsg : theDefMsg;
    }
    return theDefMsg;
}

export { getErrMsg }