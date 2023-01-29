import Scroll from "../../utils/scroll.js";

export default class ImgPreview {
  constructor() {
    // Bind click events for the image preview component.
    $('.post-content img').on('click', ImgPreview.onImgPreviewOpen);
    $('.preview-overlay').on('click', ImgPreview.onImgPreviewClose);
    $('.preview-wrapper > .img-list').on('click', ImgPreview.onImgSelected);
    $('.preview-overlay img').on('click', (e) => e.stopPropagation());
  }

  static onImgPreviewOpen() {
    Scroll.unscroll();
    const imgSrc = $(this).attr('src');
    $('.preview-wrapper').children('.preview-img').attr('src', imgSrc);
    $('.preview-overlay').fadeIn(500);
    const { imgList, curSelectedIndex } = ImgPreview._getPostImgList($(this));

    // Insert a list of article images.
    $('.preview-wrapper > .img-list').html(imgList);

    // Init the selected style for the list.
    const $target = $('.preview-wrapper > .img-list > li').eq(curSelectedIndex);
    if ($target.hasClass('selected') === false) {
      $('.preview-wrapper > .img-list > li[class*="selected"]').removeClass('selected');
      $target.addClass('selected');
      const scrollLeft = ($target.index() - 1) * 80 - $target.parent().outerHeight() / 2;
      $('.preview-wrapper > .img-list').animate({ scrollLeft }, 300);
    }
  }

  static onImgPreviewClose() {
    $('.preview-overlay').fadeOut(500);
    setTimeout(Scroll.allowScroll, 500);
  }

  static onImgSelected(e) {
    e.stopPropagation();
    const targetTagName = e.target.tagName.toLowerCase();
    const $target = targetTagName === 'li' ? $(e.target) : $(e.target).parent();
    if (targetTagName === 'ul' || $target.hasClass('selected')) {
      return;
    }

    const $curSelected = $('.preview-wrapper > .img-list > li[class*="selected"]');
    $curSelected.removeClass('selected');
    $target.addClass('selected');

    $('.preview-wrapper > .preview-img').attr('src', $target.children('img').attr('src'));
  }

  static _getPostImgList($curPreview) {
    const imgList = [];
    const $imgs = $('.post-content img');
    let i = 0, curSelectedIndex = 0;
    $imgs.each(function () {
      const $img = $(this);
      if ($curPreview.is($(this))) {
        curSelectedIndex = i;
      }
      const src = $img.attr('src');
      imgList.push(`<li class="flex flex-justify-center flex-align-center"><img src="${src}" /></li>`);
      i++;
    });
    return { imgList: imgList.join(''), curSelectedIndex }
  }
}
