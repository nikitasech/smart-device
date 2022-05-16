import {Expander} from './expander';

const initExpanders = () => {
  const elExpanders = document.querySelectorAll('[data-expander]');

  for (let i = 0; i < elExpanders.length; i++) {
    const expander = new Expander(elExpanders[i]);

    expander.init();
  }
};

export {initExpanders};
