import Scroll from "../../utils/scroll.js";
import LocalSearch from "./local-search-util.js";

/* global CONFIG, pjax, LocalSearch */
$(window).on('load', () => {
  if (!CONFIG.search.path) {
    console.warn('`hexo-generator-searchdb` plugin is not installed!');
    return;
  }
  const localSearch = new LocalSearch({
    path: CONFIG.search.path,
    top_n_per_article: CONFIG.search.local_search.top_n_per_article,
    unescape: CONFIG.search.local_search.unescape
  });

  const $input = $('.search-input');
  const inputEventFunction = () => {
    if (!localSearch.isfetched) return;
    const searchText = $input.val().trim().toLowerCase();
    const keywords = searchText.split(/[-\s]+/);
    const $container = $('.search-result-container');
    let resultItems = [];
    if (searchText.length > 0) {
      // Perform local searching
      resultItems = localSearch.getResultItems(keywords);
    }
    if (keywords.length === 1 && keywords[0] === '') {
      $container.addClass('no-result');
      $container.html(`
        <div class="search-result-icon flex flex-column flex-justify-center flex-align-center">
          <i class="iconfont icon-search"></i>
          ${CONFIG.i18n.search.tips}
        </div>
      `);
    } else if (resultItems.length === 0) {
      $container.addClass('no-result');
      $container.html(`
        <div class="search-result-icon flex flex-column flex-justify-center flex-align-center">
          <i class="iconfont icon-sad"></i>
          ${CONFIG.i18n.search.no_result}
        </div>
      `);
    } else {
      resultItems.sort((left, right) => {
        if (left.includedCount !== right.includedCount) {
          return right.includedCount - left.includedCount;
        } else if (left.hitCount !== right.hitCount) {
          return right.hitCount - left.hitCount;
        }
        return right.id - left.id;
      });
      const stats = CONFIG.i18n.search.result_title.replace(/\$\{resultNum}/, resultItems.length);

      $container.removeClass('no-result');
      $container.html(`
        <h3 class="search-stats">${stats}</h3>
        <hr>
        <ul class="search-result-list">${resultItems.map(result => result.item).join('')}</ul>
      `);
      if (typeof pjax === 'object') pjax.refresh(container);
    }
  };

  localSearch.highlightSearchWords($('.post-body'));
  if (CONFIG.search.local_search.preload) {
    localSearch.fetchData();
  }

  if (CONFIG.search.local_search.trigger === 'auto') {
    $input.on('input', inputEventFunction);
  } else {
    $('.search-icon').on('click', inputEventFunction);
    $input.on('keypress', event => {
      if (event.key === 'Enter') {
        inputEventFunction();
      }
    });
  }
  $(window).on('search:loaded', inputEventFunction);

  // Handle and trigger popup window
  const $searchPopOverlay = $('.search-pop-overlay');
  $('.search-popup-trigger').on('click', () => {
    Scroll.unscroll();
    $searchPopOverlay.fadeIn(500);
    setTimeout(() => $input.focus(), 500);
    // Wait for search-popup animation to complete
    if (!localSearch.isfetched) localSearch.fetchData();
  });

  // Monitor main search box
  const onPopupClose = () => {
    $searchPopOverlay.fadeOut(500);
    setTimeout(Scroll.allowScroll, 500);
  };

  $('.search-pop-overlay').on('click', event => {
    if ($(event.target).is($('.search-pop-overlay'))) {
      onPopupClose();
    }
  });
  $('.popup-btn-close').on('click', onPopupClose);
  $(document).on('pjax:success', () => {
    localSearch.highlightSearchWords($('.post-body'));
    onPopupClose();
  });
  $(window).on('keyup', event => {
    if (event.key === 'Escape') {
      onPopupClose();
    }
  });
});