export default class Scroll {
  constructor() {
    this.keepScrollBarPos();
    $(window).bind('beforeunload', this._recordScrollBarPos);
  }

  keepScrollBarPos() {
    const scrollTop = Number(localStorage.getItem(`scrollBar-${location.href}`)) || 0;
    $('html, body').animate({ scrollTop }, 500);
    if (scrollTop === 0) {
      localStorage.clear();
    }
  }

  _recordScrollBarPos() {
    localStorage.setItem(`scrollBar-${location.href}`, $(document).scrollTop());
  }

  static unscroll() {
    $('body').addClass('unscroll');
  }

  static allowScroll() {
    $('body').removeClass('unscroll');
  }
}