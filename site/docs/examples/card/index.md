# Card 卡片

## 基本使用

`title` 自定义卡片的主标题

`subtitle` 自定义卡片的副标题

<y-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</y-card>

::: details 显示代码

```html
<y-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</y-card>
```

:::

## 简约卡片

`simple` 可以配置简约的卡片

<y-card simple>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</y-card>

::: details 显示代码

```html
<y-card simple>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</y-card>
```

:::

## 阴影显示时机

`shadow` 属性可以配置阴影显示时机

<y-card class="y-card-item" shadow="always">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>总是显示阴影</p>
</y-card>

<y-card class="y-card-item" shadow="hover">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>鼠标移入显示</p>
</y-card>

<y-card class="y-card-item">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>从不显示</p>
</y-card>

::: details 显示代码

```html
<y-card shadow="always">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>总是显示阴影</p>
</y-card>

<y-card shadow="hover">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>鼠标移入显示</p>
</y-card>

<y-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>从不显示</p>
</y-card>
```

:::

## API

| 参数       | 说明             | 类型   | 可选值         | 默认值         |
| ---------- | ---------------- | ------ | -------------- | -------------- |
| shadow     | 阴影显示时机     | string | always / hover |                |
| body-style | 自定义 body 样式 | object |                | {padding:20px} |

## Slots

| 插槽名称 | 说明说明           |
| -------- | ------------------ |
| title    | 自定义卡片的主标题 |
| subtitle | 自定义卡片的副标题 |

<style scope>
  .y-card-item{
    margin:10px
  }
</style>
