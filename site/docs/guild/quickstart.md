# 快速开始

本节将介绍如何在项目中使用 `young-design`

## 用法

### 1、在 main.js 中全部注册

```diff
//main.js
+ import youngDesign from 'young-design';
import { createApp } from 'vue';
import App from './app.vue';

const app = createApp(App);

+ app.use(youngDesign);
app.mount('#app');

```

在组件中可以直接使用

```vue
<template>
  <y-button>按钮</y-button>
  <y-icon name="phone" dot />
</template>
```

### 2.在 main.js 中按需注册

```diff
//main.js
+ import { Button, Icon } from 'young-design';
import { createApp } from 'vue';
import App from './app.vue';
const app = createApp(App);

+ app.use(Button);
+ app.use(Icon);
app.mount('#app');


```

在组件中可以直接使用

```vue
<template>
  <y-button>按钮</y-button>
  <y-icon name="phone" dot />
</template>
```

### 3、直接在组件中导入

```vue
<template>
  <Button>按钮</Button>
</template>

<script setup>
import { Button } from 'young-design';
</script>
```
