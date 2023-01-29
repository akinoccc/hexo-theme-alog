'use strict';

/**
 * Export config
 */
hexo.extend.helper.register('export_config', function () {
  const { config, theme, url_for, __ } = this;
  const exportConfig = {
    preload: theme.preload,
    lazyload: theme.lazyload,
    comments: theme.comments,
    search: {},
    i18n: {
      search: {
        title: __('search.title'),
        result_title: __('search.result_title'),
        placeholder: __('search.placeholder'),
        no_result: __('search.no_result'),
        tips: __('search.tips')
      }
    }
  };
  if (config.algolia && theme.algolia_search && theme.algolia_search.enable) {
    exportConfig.algolia = {
      appID: config.algolia.applicationID || config.algolia.appId,
      apiKey: config.algolia.apiKey,
      indexName: config.algolia.indexName,
      hits: theme.algolia_search.hits
    };
  }
  if (config.search && theme.local_search && theme.local_search.enable) {
    exportConfig.search.path = url_for(config.search.path);
    exportConfig.search.local_search = theme.local_search;
  }
  if (theme.valine && theme.valine.enable) {
    exportConfig.valine = theme.valine;
  }
  return `
    <script>
      window.CONFIG = ${JSON.stringify(exportConfig).replace(/</g, '\\u003c')};
    </script>
  `
});

// hexo.extend.helper.register('config_unique', function() {
//   const { page, is_home, is_post } = this;
//   return {
//     sidebar  : page.sidebar || '',
//     isHome   : is_home(),
//     isPost   : is_post(),
//     lang     : page.lang,
//     comments : page.comments || '',
//     permalink: page.permalink || '',
//     path     : page.path || '',
//     title    : page.title || ''
//   };
// });