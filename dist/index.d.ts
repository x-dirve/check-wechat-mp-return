/**操作成功判断正则 */
declare const OK_REGEXP: RegExp;
/**操作失败判断正则 */
declare const FAIL_REGEXP: RegExp;
export { OK_REGEXP };
export { FAIL_REGEXP };
/**检测接口返回数据是否成功 */
declare function check(msg: string): boolean;
export { check };
/**
 * 获取默认错误信息
 * @param msg 微信返回的信息
 * @param def 是否返回默认信息(boolean)或未能成功获取时的信息(string)
 */
declare function getErrMsg(msg: string, def: boolean | string): string;
export { getErrMsg };
