import {PhoneMask} from './phone-mask';

const initPhoneMask = () => {
  const elPhoneMasks = document.querySelectorAll('[data-phone-mask]');
  const matrix = '+7 (___) ___-__-__';

  for (let i = 0; i < elPhoneMasks.length; i++) {
    const phoneMask = new PhoneMask(elPhoneMasks[i], matrix);
    const inputFocusHandler = () => {
      phoneMask.init();

      elPhoneMasks[i].removeEventListener('focus', inputFocusHandler);
    };

    elPhoneMasks[i].addEventListener('focus', inputFocusHandler);
  }
};

export {initPhoneMask};
