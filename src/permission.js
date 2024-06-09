//全局路由守卫
import router from './router'
import { NoLoginState } from '@/utils/LoginAndConfig.js'

const login =false
router.beforeEach(async (to, from, next)=>{
    if (to.name !== 'login' && NoLoginState()){
        next({ name: 'login' })
    }else if (to.name === 'login' && !NoLoginState()){
        next({ name: 'Dashboard' })
    }else {
        next()
    }

})