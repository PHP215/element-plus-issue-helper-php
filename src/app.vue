<script setup lang="ts">
import AppHeader from '@/components/app-header.vue'
import AppContent from '@/components/app-content.vue'

import { useLanguage } from './hooks/language'
import AppFooter from './components/app-footer.vue'

import 'github-markdown-css/github-markdown-light.css'

const { epLocale } = useLanguage()
</script>

<template>
  <el-config-provider :locale="epLocale">
    <div antialiased>
      <app-header />
      <app-content />
      <app-footer />
    </div>
  </el-config-provider>
</template>

<style lang="less">
body {
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

a:hover,
a:active {
  color: var(--el-color-primary);
  text-decoration: underline;
}

details {
  summary {
    cursor: pointer;
  }
  p {
    margin: 0;
  }
}
</style>
