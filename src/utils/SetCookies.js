import Cookies from 'js-cookie'
import {encryptAndStoreData} from './SysTool/WebCryptoTool.js'

const tokenKey = import.meta.env.VITE_TOKEN_KEY;
const AuthorityKey = import.meta.env.VITE_AUTHORITY_KEY;

const twoHoursLater = new Date()
twoHoursLater.setTime(twoHoursLater.getTime() + 2 * 60 * 60 * 1000) // 2 小时后的时间
export function setToken(token){
    Cookies.set(tokenKey,token, { expires: twoHoursLater })
}
export const setAuthority = (data) => {
    Cookies.set(AuthorityKey, encryptAndStoreData(data) , { expires: twoHoursLater })
}


export function removeToken(){
    Cookies.remove(tokenKey);
    Cookies.remove(AuthorityKey);
}