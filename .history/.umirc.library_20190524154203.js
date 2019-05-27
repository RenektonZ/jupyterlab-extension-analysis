export default {
  // esm: 'rollup',
  cjs: 'rollup',
  extraBabelPlugins: [
    ['babel-plugin-import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }]
  ],
  proxy: {
    "/aps": {
      "target": "http://dev.aps.zetyun.cn/",
      "changeOrigin": true,
      "pathRewrite": { "^/aps" : "/aps" }
    },
  }
}