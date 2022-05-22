export class Accordion {
  constructor(elAccordion, maxViewportSize) {
    this.elContents = elAccordion.querySelectorAll('[data-accordion-content]');
    this.elButtons = elAccordion.querySelectorAll('[data-accordion-button]');
    this.maxViewportSize = maxViewportSize;

    this.tabClickHandler = this.tabClickHandler.bind(this);
    this.init = this.init;
  }

  closeTab(tab) {
    this.elContents[tab].classList.add('is-closed');
    this.elButtons[tab].classList.add('is-content-closed');
  }

  toggleTab(tab) {
    this.elContents[tab].classList.toggle('is-closed');
    this.elButtons[tab].classList.toggle('is-content-closed');
  }

  tabClickHandler(evt) {
    for (let tab = 0; tab < this.elButtons.length; tab++) {
      if (evt.target === this.elButtons[tab]) {
        this.toggleTab(tab);
      } else {
        this.closeTab(tab);
      }
    }
  }

  windowResizeHandler() {
    if (window.innerWidth > this.maxViewportSize) {
      for (let tab = 0; tab < this.elButtons.length; tab++) {
        this.elButtons[tab].setAttribute('disabled', '');
        this.elButtons[tab].removeEventListener('click', this.tabClickHandler);
      }
      return;
    }

    for (let tab = 0; tab < this.elButtons.length; tab++) {
      this.closeTab(tab);
      this.elButtons[tab].removeAttribute('disabled', '');
      this.elButtons[tab].addEventListener('click', this.tabClickHandler);
    }
  }

  init() {
    this.windowResizeHandler();

    window.addEventListener('resize', () => {
      this.windowResizeHandler();
    });
  }
}
