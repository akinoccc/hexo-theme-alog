hexo.extend.generator.register('cname', function () {
  const { config } = this.theme;
  if (config.cname) {
    return {
      path: '/CNAME',
      data: config.cname
    }
  }
}); 