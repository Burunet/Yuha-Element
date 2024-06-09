<template>
  <div>
    <component :is="currentIcon"/>
  </div>
</template>

<script setup>
import * as Icons from '@element-plus/icons-vue'
import { computed } from 'vue'

const props =defineProps({
  iconName: {
    type: String,
    required: true
  }
})
const currentIcon = computed(() => {
  return Icons[props.iconName] || null
})

</script>