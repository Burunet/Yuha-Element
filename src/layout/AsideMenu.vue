<template>
  <el-menu :default-active="activeMenu"
           :collapse="isCollapse"
           text-color="#fff"
           class="el-menu-vertical-demo"
           active-text-color="#ffd04b"
           background-color="#545c64">
    <menu-item-components :routes="routes" :navigate-to="navigateTo" :Authority="Authority.view"/>
  </el-menu>
</template>

<script setup>
import {defineProps, reactive, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import MenuItemComponents from "@/layout/components/MenuItemComponents.vue";
import {getAuthority} from '@/utils/LoginAndConfig.js'

const Authority = reactive(getAuthority())
const route = useRoute();
const router = useRouter();
const activeMenu = ref(route.path);
const routes = ref(router.options.routes);

defineProps({
  isCollapse:{
    type:Boolean,
    default:false
  }
})

const navigateTo = (path) => {
  if (path !== route.path) {
    router.push(path).catch((err) => {
      // 忽略导航错误
      if (err.name !== 'NavigationDuplicated') {
        console.error(err);
      }
    });
  }
}
</script>
<style>
.el-menu-vertical-demo{
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>