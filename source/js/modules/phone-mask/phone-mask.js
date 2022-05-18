export class PhoneMask {
  constructor(elInput, matrix) {
    this.elInput = elInput;
    this.matrix = matrix;
    this.startPosition = null;
    this.position = null;
    this.start = null;

    this.init = this.init;
  }

  preventDelStart() {
    if (
      this.position <= this.startPosition ||
      this.elInput.value.substring(0, this.startPosition) !== this.start
    ) {
      this.elInput.value = this.start;
    }
  }

  preventSymbolAxceptNumber(evt) {
    if (isNaN(-evt.data) || evt.data === ' ') {
      this.elInput.value = this.elInput.value.slice(0, -1);
    }
  }

  limitByMask(evt) {
    while (this.matrix[this.position] !== '_' && this.matrix[this.position]) {
      if (
        this.position <= this.startPosition ||
        this.elInput.value.substring(0, this.startPosition) !== this.start
      ) {
        this.elInput.value = this.start;
      } else if (evt.inputType === 'deleteContentBackward') {
        this.elInput.value = this.elInput.value.slice(0, -1);
      } else {
        this.elInput.value += this.matrix[this.position];
      }
      this.position = this.elInput.value.length;
    }
  }

  inputChangeHandler() {
    this.preventDelStart();

    this.elInput.addEventListener('input', this.addListeners.bind(this));
  }

  addListeners(evt) {
    evt.preventDefault();
    this.preventSymbolAxceptNumber(evt);

    this.position = this.elInput.value.length;
    this.limitByMask(evt);
  }

  init() {
    this.startPosition = this.matrix.indexOf('_');
    this.position = this.startPosition;
    this.start = this.matrix.substring(0, this.position);

    this.elInput.value = this.start;

    this.inputChangeHandler();
  }
}
