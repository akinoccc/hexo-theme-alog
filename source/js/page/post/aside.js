export class Toc {
  constructor() {
    this.tocTrack();
    $(window).on('scroll', this.tocTrack);
    $('.post-toc a').on('click', this.jumpToHeader);
  }

  // Override the default jump event.
  jumpToHeader(e) {
    e.preventDefault();
    const $target = $(decodeURI($(this).attr('href')));
    if ($target.length > 0) {
      const scrollTop = $target.offset().top - $('.main-header').outerHeight() - 20;
      $('html, body').animate({ scrollTop }, 500);
    }
  }

  tocTrack() {
    const $headers = $('.post-content > :header');
    if ($headers.length) {
      let $currentHeading = $headers.first();
      for (let heading of $headers) {
        const $heading = $(heading);
        const top = $heading.offset().top - $(document).scrollTop() - $('.main-header').outerHeight();
        if (top > 40) {
          break;
        }
        $currentHeading = $heading;
      }
      if ($currentHeading.length) {
        const anchorName = $currentHeading.attr('id');
        const $tocItem = $(`.toc-link[href="#${encodeURI(anchorName)}"]`);
        if (!$tocItem.hasClass('toc-active')) {
          $('.toc-active').removeClass('toc-active');
          $tocItem.addClass('toc-active');
        }
      }
    }
  };
}