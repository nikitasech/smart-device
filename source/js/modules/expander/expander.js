export class Expander {
  constructor(elExpander) {
    this._elContent = elExpander.querySelector('[data-expander-content]');
    this._elButton = elExpander.querySelector('[data-expander-button]');

    this._toggleContent;
    this._buttonClickHandler;
  }

  _toggleContent() {
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
