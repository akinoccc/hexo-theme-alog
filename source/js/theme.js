export default class ThemeController {
  constructor() {
    this.rootEl = $('html');
    const mode = localStorage.getItem('theme') || 'dark';
    this.rootEl.attr('data-theme', mode);
    $('#theme-btn').on('click', () => {
      this.changeTheme();
    });
  }
  changeTheme() {
    const curMode = this.rootEl.attr('data-theme');
    let nextMode;
    if (curMode === 'light') {
      nextMode = 'dark';
    } else {
      nextMode = 'light';
    }
    console.log(curMode, nextMode);
    this.rootEl.attr('data-theme', nextMode);
    localStorage.setItem('theme', nextMode);
  }
}
