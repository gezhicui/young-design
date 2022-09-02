<template>
  <div>
    <Link>link</Link>
    <br />
    <Link type="primary">link</Link>
    <Link type="primary" underline>link</Link>
    <Link type="primary" underline disabled>link</Link>
    <br />
    <Link type="info">link</Link>
    <Link type="info" underline>link</Link>
    <Link type="info" underline disabled>link</Link>
    <br />
    <Link type="danger">link</Link>
    <Link type="danger" underline>link</Link>
    <Link type="danger" underline disabled>link</Link>
    <br />
    <Link type="warning">link</Link>
    <Link type="warning" underline>link</Link>
    <Link type="warning" underline disabled>link</Link>
    <br />
    <Link type="success">link</Link>
    <Link type="success" underline>link</Link>
    <Link type="success" underline disabled>link</Link>
  </div>
</template>
<script lang="ts" setup>
import { Link } from 'young-design';
</script>
<style lang="less"></style>
