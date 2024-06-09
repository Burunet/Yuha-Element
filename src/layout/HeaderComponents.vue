<template>
  <div class="header-div">
    <el-icon class="header-div-operation" @click="ChangeIsCollapse" size="23" @mouseover="hover = true"
             @mouseleave="hover = false"
             :style="{ backgroundColor: hover ? '#bbbbbb' : 'white' }">
      <Operation/>
    </el-icon>
    <div class="header-div-body">
      <template v-for="(item, index) in routePath" :key="index">
        <button v-if="index !== lastIndex" class="header-div-button header-div-button-on"> {{ item }}</button>
        <button v-else class="header-div-button"> {{ item }}</button>
        <template v-if="index !== routePath.length - 1">
          &nbsp;/&nbsp;
        </template>
      </template>
    </div>
    <el-dropdown  trigger="click">
      <el-icon class="header-div-operation" size="23">
      <Setting/>
    </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item divided @click="LoginOut">Login Out</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import {ref, onMounted, onUnmounted, reactive, computed} from 'vue';
import {Operation, Setting} from "@element-plus/icons-vue";
import {useRoute, useRouter} from 'vue-router';
import {removeToken} from "@/utils/SetCookies.js";

const hover = ref(false);
const route = useRoute();
const router = useRouter();
const lastIndex = ref(1);

const prop = defineProps({
  ChangeIsCollapse: {
    type: Function,
    default: () => {
    }
  },
  ChangeIsCollapseValue: {
    type: Function,
    default: () => {
    }
  }
})

const routePath = computed(() => {
  let pathArray = route.path.split('/').filter(Boolean);
  lastIndex.value = pathArray.length - 1;
  return pathArray;
})

const LoginOut = () => {
  removeToken()
  window.location = '/';
}

// 监听窗口大小改变
function handleResize() {
  if (window.innerWidth < 768) {
    prop.ChangeIsCollapseValue(true)
  } else {
    prop.ChangeIsCollapseValue(false)
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();  // Initial check
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
<style scoped lang="scss">
.header-div {
  height: 80%;
  width: 99%;
  padding-right: 1%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 3px -3px #ababab;

  .header-div-operation {
    padding: 12px;
  }

  .header-div-body {
    width: 93%;
    height: 50px;
    display: flex;
    align-items: center;
    color: #ababab;
  }

  .header-div-button {
    border: none;
    font-size: 16px;
    color: #ababab;
    background-color: #FFFFFF;
  }

  .header-div-button-on {
    color: #4f4f4f;
  }

}
</style>