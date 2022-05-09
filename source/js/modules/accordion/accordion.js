export class Accordion {
  constructor(elAccordion, maxViewportSize, defaultOpenedTab = 0) {
    this._elContentsAccordion = elAccordion.querySelectorAll('[data-accordion-content]');
    this._elButtonsAccordion = elAccordion.querySelectorAll('[data-accordion-button]');
    this._defaultOpenedTab = defaultOpenedTab;
    this._maxViewportSize = maxViewportSize;

    this._resetTabs;
    this._tabClickHandler;
    this._openDefaultTab;
    this.init;
  }

  _openDefaultTab(numberTab) {
    if (numberTab == this._defaultOpenedTab) {
      this._elContentsAccordion[numberTab].classList.remove("is-closed");
      this._elButtonsAccordion[numberTab].classList.remove("is-content-closed");
    } else {
      this._elContentsAccordion[numberTab].classList.add("is-closed");
      this._elButtonsAccordion[numberTab].classList.add("is-content-closed");
    }
  }

  _resetTabs(openedTabNumber) {
    for (let tab = 0; tab < this._elButtonsAccordion.length; tab++) {
      if (tab !== openedTabNumber) {
        this._elContentsAccordion[tab].classList.add("is-closed");
        this._elButtonsAccordion[tab].classList.add("is-content-closed");
      }
    }
  }

  _tabClickHandler(elContent, elButton, openedTabNumber) {
    elButton.addEventListener('click', (evt) => {
      this._resetTabs(openedTabNumber);

      elContent.classList.toggle("is-closed");
      elButton.classList.toggle("is-content-closed");
    });
  }

  init() {
    console.log(this._maxViewportSize);
    console.log(window.innerWidth);

    for (let tab = 0; tab < this._elButtonsAccordion.length; tab++) {
      if (this._maxViewportSize <= window.innerWidth) {
        this._elButtonsAccordion[tab].setAttribute('disabled', '');
      }

      this._openDefaultTab(tab);
      this._tabClickHandler(this._elContentsAccordion[tab], this._elButtonsAccordion[tab], tab);
    }
  }
}
