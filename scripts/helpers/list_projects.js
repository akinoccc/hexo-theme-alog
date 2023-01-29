hexo.extend.helper.register('list_projects', function (projectMdContent, options = {}) {
  const projects = projectMdContent.split("///");
  projects.shift();
  const list = projects.map(item => {
    return `
      <li class="project-item markdown"}>
        ${this.markdown(item)}
      </li>
    `
  });
  return `<ul class="project-list"}>${list.join('')}</ul>`
});