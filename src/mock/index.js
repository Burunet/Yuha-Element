import Mock from 'mockjs'

// 模拟 '/api/users' API 的响应
Mock.mock('/api/users', 'get', {
    "status": 200,
    "users|5-10": [
        {
            "id|+1": 1,
            "name": "@name", // 随机生成名字
            "email": "@EMAIL"
        }
    ]
});

// 更多的 Mock 配置可以继续添加
