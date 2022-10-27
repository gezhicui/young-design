<template>
  <div class="y-info">
    <div class="y-info-header">
      <div class="y-info-left">
        <div v-if="$slots.photo" class="y-info-photo">
          <slot name="photo" />
        </div>
        <div class="y-info-data">
          <a v-if="linkUrl" :href="linkUrl">
            <span class="y-info-userInfo">{{ userInfo }}</span>
          </a>
          <span v-else class="y-info-userInfo">{{ userInfo }}</span>
          <span class="y-info-describe">{{ describe }}</span>
        </div>
      </div>
      <div v-if="$slots.right" class="y-info-right">
        <slot name="right" />
      </div>
    </div>
    <div v-if="$slots.body" class="y-info-body">
      <slot name="body" />
    </div>
    <div v-if="$slots.footer" class="y-info-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'y-info' };
</script>

<script lang="ts" setup>
import { infoProps } from './types';
import './style/index.less';
defineProps(infoProps);
</script>
