export class Accordion {
  constructor(elAccordion, maxViewportSize, defaultOpenedTab = 0) {
    this.elContentsAccordion = elAccordion.querySelectorAll('[data-accordion-content]');
    this.elButtonsAccordion = elAccordion.querySelectorAll('[data-accordion-button]');
    this.defaultOpenedTab = defaultOpenedTab;
    this.maxViewportSize = maxViewportSize;

    this.init = this.init;
  }

  openDefaultTab(numberTab) {
    if (numberTab === this.defaultOpenedTab && this.defaultOpenedTab) {
      this.elContentsAccordion[numberTab].classList.remove('is-closed');
      this.elButtonsAccordion[numberTab].classList.remove('is-content-closed');
    } else {
      this.elContentsAccordion[numberTab].classList.add('is-closed');
      this.elButtonsAccordion[numberTab].classList.add('is-content-closed');
    }
  }

  resetTabs(openedTabNumber) {
    for (let tab = 0; tab < this.elButtonsAccordion.length; tab++) {
      if (tab !== openedTabNumber) {
        this.elContentsAccordion[tab].classList.add('is-closed');
        this.elButtonsAccordion[tab].classList.add('is-content-closed');
      }
    }
  }

  tabClickHandler(elContent, elButton, openedTabNumber) {
    elButton.addEventListener('click', () => {
      this.resetTabs(openedTabNumber);

      elContent.classList.toggle('is-closed');
      elButton.classList.toggle('is-content-closed');
    });
  }

  init() {
    for (let tab = 0; tab < this.elButtonsAccordion.length; tab++) {
      if (this.maxViewportSize <= window.innerWidth) {
        this.elButtonsAccordion[tab].setAttribute('disabled', '');
      }

      this.openDefaultTab(tab);
      this.tabClickHandler(this.elContentsAccordion[tab], this.elButtonsAccordion[tab], tab);
    }
  }
}
