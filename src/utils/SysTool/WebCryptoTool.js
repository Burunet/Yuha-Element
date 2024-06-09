/*
 * 数据加密
 */
export function encryptAndStoreData(data) {
    // 步骤1: 将数组转换为JSON字符串
    const json = JSON.stringify(data);

    // 步骤2: 将JSON字符串转换为Base64
    // 将字符串转换为字节序列
    const bytes = new TextEncoder().encode(json);

    // 转换字节序列为Base64字符串
    return btoa(String.fromCharCode(...bytes));
}
/*
 * 数据解密
 */
export function decryptData(encryptedData) {
    // 步骤1: 将Base64字符串解码为字节序列
    const str = atob(encryptedData);
    const bytes = new Uint8Array(str.length);

    for (let i = 0; i < str.length; i++) {
        bytes[i] = str.charCodeAt(i);
    }

    // 步骤2: 将字节序列转换为JSON字符串
    const json = new TextDecoder().decode(bytes);

    // 步骤3: 将JSON字符串解析为JavaScript数组
    return JSON.parse(json);
}