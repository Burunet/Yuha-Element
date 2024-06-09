import Cookies from 'js-cookie'
import { decryptData} from './SysTool/WebCryptoTool.js'

const TokenKey = import.meta.env.VITE_TOKEN_KEY;
const AuthorityKey = import.meta.env.VITE_AUTHORITY_KEY;

export const NoLoginState = () => {
    return !Cookies.get(TokenKey);
}
export const getAuthority = ()=>{
    return  decryptData(Cookies.get(AuthorityKey))
}
