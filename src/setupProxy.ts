const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app: any) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_PROXY,
      changeOrigin: true,
    })
  );
};
