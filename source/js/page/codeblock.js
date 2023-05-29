export default class CodeBlock {
  constructor() {
    this._initHighlightStyle();
    $(document).on('mouseup', this._resetCopy);
    $('.highlight-tool .icon-copy').on('click', this._copyCode);
    $('.highlight-tool .icon-chevron-bottom').on('click', this._collapse);
  }

  _initHighlightStyle() {
    hljs.registerLanguage('vue', () => {
      return {
        // contains: TYPES,
        // keywords: LITERALS,
        // illegal: '\\S'
      };
    });
    hljs.registerLanguage('react', () => ({}));
    $(document).on('DOMContentLoaded', () => {
      document.querySelectorAll('pre code').forEach(el => {
        hljs.highlightElement(el);
      });
    });
    hljs.highlightAll();
    $('pre').each(function () {
      const language = $(this).children(':first')[0].result.language || 'TEXT';
      const $preMac = $(
        `<div class="highlight-tool">
        <span></span>
        <span></span>
        <span></span>
        <span class="language">${language.toUpperCase()}</span>
        <i class="iconfont icon-copy"></i>
        <i class="iconfont icon-chevron-bottom" data-is-collapse=false></i>
      </div>`
      );
      $(this)
        .wrap('<div class="code-block-container"></div>')
        .before($preMac)
        .css({ height: $(this).outerHeight() })
        .data('height', $(this).outerHeight());
    });
  }

  _copyCode() {
    try {
      const text = $(this).parent().next('pre').text();
      navigator.clipboard.writeText(text);
      $(this).removeClass('icon-copy').addClass('icon-success');
    } catch (e) {
      console.log(e);
      $(this).removeClass('icon-copy').addClass('icon-close');
    }
  }

  _resetCopy() {
    $('.highlight-tool .icon-success')
      .removeClass('icon-success')
      .addClass('icon-copy');
    $('.highlight-tool .icon-close')
      .removeClass('icon-close')
      .addClass('icon-copy');
  }

  _collapse() {
    const isCollapse = $(this).data('is-collapse');
    const $codeBlock = $(this).parent().next('pre');
    const height = $codeBlock.data('height');
    if (isCollapse) {
      $(this).css({ transform: 'rotateZ(0)' });
      $codeBlock.css({ height, padding: '0.8em' });
    } else {
      $(this).css('transform', 'rotateZ(90deg)');
      $codeBlock.css({ height: 0, padding: '0 0.8em' });
    }
    $(this).data('is-collapse', !isCollapse);
  }
}
