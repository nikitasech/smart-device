export class Expander {
  constructor(elExpander) {
    this.elContent = elExpander.querySelector('[data-expander-content]');
    this.elButton = elExpander.querySelector('[data-expander-button]');

    this.init = this.init;
  }

  toggleContent() {
    if (!this.elContent.classList.contains('is-opened')) {
      this.elButton.textContent = 'Свернуть';
    } else {
      this.elButton.textContent = 'Подробнее';
    }
    this.elContent.classList.toggle('is-opened');
  }

  buttonClickHandler() {
    this.elButton.addEventListener('click', () => {
      this.toggleContent();
    });
  }

  init() {
    this.buttonClickHandler();
  }
}
