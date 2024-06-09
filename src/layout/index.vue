<template>
  <div class="common-layout">
    <el-container class="common-layout">
      <el-aside class="common-lo-aside">
        <Menu :isCollapse="isCollapse"/>
      </el-aside>
      <el-container>
        <el-header class="common-header">
          <Header :ChangeIsCollapse="ChangeIsCollapse" :ChangeIsCollapseValue="ChangeIsCollapseValue"/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Menu from '@/layout/AsideMenu.vue'
import Header from '@/layout/HeaderComponents.vue'


const isCollapse = ref(false)
const ChangeIsCollapse = () => {
  isCollapse.value = !isCollapse.value
}
const ChangeIsCollapseValue = (value)=>{
  isCollapse.value = value
}


</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100%;
}

.common-lo-aside {
  height: 100%;
  background-color: #545c64;
  width: auto; /* Make width automatic */
  min-width: 10px; /* Minimum width */
  max-width: 300px; /* Maximum width */
}

.common-header {
  padding: 0;
}
</style>