import {Accordion} from './accordion';

const initAccordions = () => {
  const elAccordions = document.querySelectorAll('[data-accordion]');
  const MAX_VIEWPORT_SIZE = 768;

  for (let i = 0; i < elAccordions.length; i++) {
    const accordion = new Accordion(elAccordions[i], MAX_VIEWPORT_SIZE);

    accordion.init();
  }
};

export {initAccordions};
