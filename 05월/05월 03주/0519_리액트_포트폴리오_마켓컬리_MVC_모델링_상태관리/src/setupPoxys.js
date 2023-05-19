const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (WrapComponent) =>{
    WrapComponent.use(
        "/signup_db",
        createProxyMiddleware({
            "target":"http://moonjong.dothome.co.kr",
            changeOrigin: true
        })
    )
    WrapComponent.use(
        "/php",
        createProxyMiddleware({
            "target":"http://moonjong.com",
            changeOrigin: true
        })
    )
    WrapComponent.use(
        "/asp",
        createProxyMiddleware({
            "target":"http://localhost:8080",
            changeOrigin: true
        })
    )
}