export class Expander {
  constructor(elExpander) {
    this._elContent = elExpander.querySelector('[data-expander-content]');
    this._elButton = elExpander.querySelector('[data-expander-button]');

    this.init = this.init;
  }

  _toggleContent() {
    if (!this._elContent.classList.contains('is-opened')) {
      this._elButton.textContent = 'Свернуть';
    } else {
      this._elButton.textContent = 'Подробнее';
    }
    this._elContent.classList.toggle('is-opened');
  }

  _buttonClickHandler() {
    this._elButton.addEventListener('click', () => {
      this._toggleContent();
    });
  }

  init() {
    this._buttonClickHandler();
  }
}
