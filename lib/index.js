const path = require('path')
const { Joi } = require('@docusaurus/utils-validation');

async function docusaurusPluginBaiduTongji(context, options) {
  const { token } = options

  return {
    name: 'docusaurus-plugin-baidu-tongji',

    getClientModules() {
      return [path.resolve(__dirname, './tongji')]
    },

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `               
            var _hmt = _hmt || [];
            (function () {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?${token}";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
            `,
          },
        ],
      }
    },
  }
}

const pluginOptionsSchema = Joi.object({
  token: Joi.string().required()
});

docusaurusPluginBaiduTongji.validateOptions = ({ options, validate }) => {
  const validatedOptions = validate(pluginOptionsSchema, options);
  return validatedOptions;
};

module.exports = docusaurusPluginBaiduTongji

