export class Accordion {
  constructor(elAccordion, defaultOpenedTab = 0) {
    this._elContentsAccordion = elAccordion.querySelectorAll('[data-accordion-content]');
    this._elButtonsAccordion = elAccordion.querySelectorAll('[data-accordion-button]');
    this._defaultOpenedTab = defaultOpenedTab;

    this._resetTabs;
    this._tabClickHandler;
    this._openDefaultTab;
    this.init;
  }

  _openDefaultTab(numberTab) {
    if (numberTab === this.defaultOpenedTab) {
      this._elContentsAccordion[numberTab].classList.remove("is-closed");
      this._elButtonsAccordion[numberTab].classList.remove("is-content-closed");
    } else {
      this._elContentsAccordion[numberTab].classList.add("is-closed");
      this._elButtonsAccordion[numberTab].classList.add("is-content-closed");
    }
  }

  _resetTabs() {
    for (let tab = 0; tab < this._elButtonsAccordion.length; tab++) {
      this._elContentsAccordion[tab].classList.add("is-closed");
      this._elButtonsAccordion[tab].classList.add("is-content-closed");
    }
  }

  _tabClickHandler(elContent, elButton) {
    elButton.addEventListener('click', () => {
      this._resetTabs();

      elContent.classList.toggle("is-closed");
      elButton.classList.toggle("is-content-closed");
    });
  }

  init() {
    for (let tab = 0; tab < this._elButtonsAccordion.length; tab++) {
      this._openDefaultTab(tab);

      this._tabClickHandler(this._elContentsAccordion[tab], this._elButtonsAccordion[tab]);
    }
  }
}

