const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: any) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://semtle.catholic.ac.kr:8085",
      changeOrigin: true,
    })
  );
};
