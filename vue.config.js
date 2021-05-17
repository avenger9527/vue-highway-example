const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .use("vh-loader")
      .loader("vue-highway/loader/doTemplate.js");
  },
};
