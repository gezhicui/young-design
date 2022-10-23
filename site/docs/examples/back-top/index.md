# BackTop 回到顶部

## 基本使用

回到顶部的基础用法

<y-back-top>Top</y-back-top>

::: details 显示代码

```html
<y-back-top>Top</y-back-top>
```

:::

## 位置偏移

`bottom` 和 `right` 属性可以配置距离右边和下边的距离

<y-back-top bottom="150px" right="120px">Go</y-back-top>

::: details 显示代码

```html
<y-back-top bottom="150px" right="120px">Go</y-back-top>
```

:::

## 插入 Icon

<y-back-top bottom="100px">
  <y-icon name="vertical-align-top" color="#409eff" />
</y-back-top>

::: details 显示代码

```html
<y-back-top bottom="100px">
  <y-icon name="vertical-align-top" color="#409eff" />
</y-back-top>
```

:::

## API

| 参数     | 说明             | 类型   | 可选值        | 默认值 |
| -------- | ---------------- | ------ | ------------- | ------ |
| bottom   | 距离下面的距离   | string | ——            | 50px   |
| right    | 距离右面的距离   | string | ——            | 50px   |
| behavior | 滚动模式         | string | smooth / auto | smooth |
| beyond   | 超出 xx 范围显示 | number | ——            | 100    |
