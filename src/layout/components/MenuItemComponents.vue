<template>
  <template v-for="(item, index) in routes" :key="index">
    <template v-if="!item.hidden && item.children && item.children.length > 1">
      <el-sub-menu v-if="getShow(getTitle(item))" :index="getKey(item)">
        <template #title>
          <el-icon>
            <dynamic-icon :icon-name="getIcon(item)"/>
          </el-icon>
          <span>{{ getTitle(item) }}</span>
        </template>
        <MenuItemComponents :routes="item.children" :navigate-to="navigateTo" :Authority="Authority" :cardkey="[...cardkey,getTitle(item)]"/>
      </el-sub-menu>
    </template>
    <el-menu-item v-else-if="!item.hidden && getShow(getTitle(item))" :index="getKey(item)" @click="navigateTo(item.path)">
      <el-icon>
        <dynamic-icon :icon-name="getIcon(item)"/>
      </el-icon>
      <template #title>
        <span>{{ getTitle(item) }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup>
import {defineProps} from 'vue';
import DynamicIcon from "@/layout/components/DynamicIcon.vue";
import MenuItemComponents from "@/layout/components/MenuItemComponents.vue";

const prop = defineProps({
  cardkey:{
    type:Array,
    default:[]
  },
  routes: {
    type: Array,
    default: []
  },
  Authority: {
    type: Object,
    default: {}
  },
  navigateTo: {
    type: Function,
    default: () => {
    }
  }
});

const getShow = (name) => {
   let allLast=prop.Authority;
   for (let i=0;i<prop.cardkey.length;i++){
     allLast = allLast[prop.cardkey[i]]
   }
   return !!allLast[name]
  // if (prop.Authority.indexOf(name)>-1) return true;
  // return false;
}
const getIcon = (item) => {
  if (item.meta && item.meta.icon) return item.meta.icon;
  if (item.children && item.children[0] && item.children[0].meta && item.children[0].meta.icon) return item.children[0].meta.icon;
  return 'Unknown';
}

const getTitle = (item) => {
  if (item.meta && item.meta.title) return item.meta.title;
  if (item.name) return item.name;
  if (item.children && item.children[0] && item.children[0].meta && item.children[0].meta.title) return item.children[0].meta.title;
  return 'Unknown';
}
const getKey = (item) => {
  if (item.children && item.children.length < 2) return item.children[0].path
  if (item.path) return item.path;
  return 'none'
}
</script>