import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/*在 Setup Store 中：
ref() 就是 state 属性
computed() 就是 getters
function() 就是 actions
注意，要让 pinia 正确识别 state，你必须在 setup store 中返回 state 的所有属性。这意味着，你不能在 store 中使用私有属性。不完整返回会影响 SSR ，开发工具和其他插件的正常运行。
*/
export const useSystemConfig = defineStore('SystemConfig',()=>{
    const MenuOption = ref(false);
    const getters = computed(()=>{})
    function actions (){

    }
})