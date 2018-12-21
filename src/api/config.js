const BASE_URL = "http://localhost:8888";

module.exports = {
    name: "商城管理系统",
    prefix: "商城管理系统",
    API_H: "000001",
    auth: "010000",
    api: {
        userLogin: `${BASE_URL}/sysuser/sys/user/login`,                // 登录接口

    }
}