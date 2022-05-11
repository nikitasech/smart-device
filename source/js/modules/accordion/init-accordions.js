import {Accordion} from './accordion';

const initAccordions = () => {
  const elAccordions = document.querySelectorAll('[data-accordion]');
  const MAX_VIEWPORT_SIZE = 770;
  const DEFAULT_OPEN_TAB = 1;

  for (let i = 0; i < elAccordions.length; i++) {
    const accordion = new Accordion(elAccordions[i], MAX_VIEWPORT_SIZE, DEFAULT_OPEN_TAB);

    accordion.init();
  }
}

export {initAccordions};
