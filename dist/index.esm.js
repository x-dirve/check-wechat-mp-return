const OK_REGEXP = /\:ok$/i;
/**检测接口返回数据是否成功 */
function check(msg) {
    return OK_REGEXP.test(String(msg));
}

export { OK_REGEXP, check };
//# sourceMappingURL=index.esm.js.map
