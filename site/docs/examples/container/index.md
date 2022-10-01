# Container 布局容器

## 基本使用

用于布局的容器组件，方便快速搭建页面的基本结构：

`<y-container>`：外层容器

`<y-header>`：顶栏容器

`<y-aside>`：侧边栏容器

`<y-main>`：主要区域容器

`<y-footer>`：底栏容器

常见页面布局

<y-container>
  <y-header>Header</y-header>
  <y-main>Main</y-main>
</y-container>

<br />

<y-container>
  <y-header>Header</y-header>
  <y-main>Main</y-main>
  <y-footer>Footer</y-footer>
</y-container>

<br />

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-main>Main</y-main>
</y-container>

<br />

<y-container>
  <y-header>Header</y-header>
  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-main>Main</y-main>
  </y-container>
</y-container>

<br />

<y-container>
  <y-header>Header</y-header>
  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-container>
      <y-main>Main</y-main>
      <y-footer>Footer</y-footer>
    </y-container>
  </y-container>
</y-container>

<br />

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-container>
    <y-header>Header</y-header>
    <y-main>Main</y-main>
  </y-container>
</y-container>

<br />

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-container>
    <y-header>Header</y-header>
    <y-main>Main</y-main>
    <y-footer>Footer</y-footer>
  </y-container>
</y-container>

::: details 显示代码

```vue
<template>
  <y-container>
    <y-header>Header</y-header>
    <y-main>Main</y-main>
  </y-container>

  <y-container>
    <y-header>Header</y-header>
    <y-main>Main</y-main>
    <y-footer>Footer</y-footer>
  </y-container>

  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-main>Main</y-main>
  </y-container>

  <y-container>
    <y-header>Header</y-header>
    <y-container>
      <y-aside width="200px">Aside</y-aside>
      <y-main>Main</y-main>
    </y-container>
  </y-container>

  <y-container>
    <y-header>Header</y-header>
    <y-container>
      <y-aside width="200px">Aside</y-aside>
      <y-container>
        <y-main>Main</y-main>
        <y-footer>Footer</y-footer>
      </y-container>
    </y-container>
  </y-container>

  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-container>
      <y-header>Header</y-header>
      <y-main>Main</y-main>
    </y-container>
  </y-container>

  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-container>
      <y-header>Header</y-header>
      <y-main>Main</y-main>
      <y-footer>Footer</y-footer>
    </y-container>
  </y-container>
</template>

<style scoped>
.y-header,
.y-footer {
  background: #6b8bf5;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.y-aside {
  background: rgb(101, 173, 240);
  color: #fff;
  text-align: center;
  line-height: 200px;
}
.y-main {
  background: #3178c6;
  color: #fff;
  text-align: center;
  line-height: 160px;
}
</style>
```

:::

## y-container

| 参数      | 说明             | 类型   | 可选值                | 默认值 |
| --------- | ---------------- | ------ | --------------------- | ------ |
| direction | 子元素的排列方向 | string | horizontal / vertical | ——     |

## y-header

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | ——     | 60px   |

## y-aside

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | ——     | 200px  |

## y-footer

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | ——     | 60px   |

<style scoped>
  .y-header,
  .y-footer {
    background: #6b8bf5;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .y-aside {
    background: rgb(101, 173, 240);
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  .y-main {
    background: #3178c6;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
</style>
