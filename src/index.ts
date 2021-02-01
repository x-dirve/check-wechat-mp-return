const OK_REGEXP = /\:ok$/i;

export { OK_REGEXP }

/**检测接口返回数据是否成功 */
function check(msg: string) {
    return OK_REGEXP.test(String(msg));
}

export { check };