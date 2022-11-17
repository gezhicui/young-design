<template>
  <div class="Shake-demo">
    <y-input size="medium" prefix-icon="wallet" clearable v-model="tel" />
    {{ tel }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tel = ref('');
</script>
