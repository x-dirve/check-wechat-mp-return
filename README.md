# 检测微信操作结果判断

## 返回信息判断
```tsx
check(msg: string): boolean
```
判断微信操作返回数据中的 `errMsg` 字段中的特征


## 获取操作失败提示信息
```tsx
getErrMsg(msg: string, def: boolean | string): string
```
获取微信操作返回数据中的 `errMsg` 字段中的出错信息
- `msg` 微信返回的信息
- `def` 是否返回默认信息(boolean)或未能成功获取时的信息(string)