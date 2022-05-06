import {Accordion} from './accordion';

const initAccordions = () => {
  const elAccordions = document.querySelectorAll('[data-accordion]');

  for (let i = 0; i < elAccordions.length; i++) {
    const accordion = new Accordion(elAccordions[i]);

    accordion.init();
  }
}

export {initAccordions};
