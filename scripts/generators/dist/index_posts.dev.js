// const pagination = require('hexo-pagination');
// hexo.extend.generator.register('index_posts', function (locals) {
//   const { config } = this;
//   // let posts = locals.posts;
//   // posts = posts.data.filter(item => item.private !== true).sort(function (a, b) {
//   //   if (a.top && b.top) {
//   //     if (a.top == b.top) {
//   //       return b.date - a.date;
//   //     } else {
//   //       return b.top - a.top;
//   //     }
//   //   } else if (a.top && !b.top) {
//   //     return -1;
//   //   } else if (!a.top && b.top) {
//   //     return 1;
//   //   } else {
//   //     return b.date - a.date;
//   //   }
//   // });
//   const posts = locals.posts.filter(item => item.private !== true).sort(config.index_generator.order_by);
//   posts.data.sort((a, b) => (b.sticky || 0) - (a.sticky || 0));
//   hexo.locals.set("posts", function () {
//     return posts;
//   });
//   const paginationDir = config.pagination_dir || 'page';
//   const path = config.index_generator.path || '';
//   return pagination(path, posts, {
//     perPage: config.index_generator.per_page,
//     layout: ['index'],
//     format: paginationDir + '/%d/',
//     data: {
//       __index: true
//     }
//   });
// })
"use strict";