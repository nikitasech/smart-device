export class PhoneMask {
  constructor(elInput, matrix) {
    this._elInput = elInput;
    this._matrix = matrix;
    this._startPosition = null;
    this._position = null;
    this._start = null;

    this.init = this.init;
  }

  _preventDelStart() {
    if (
      this._position <= this._startPosition ||
      this._elInput.value.substring(0, this._startPosition) !== this._start
    ) {
      this._elInput.value = this._start;
    }
  }

  _preventSymbolAxceptNumber(evt) {
    if (isNaN(-evt.data) || evt.data === ' ') {
      this._elInput.value = this._elInput.value.slice(0, -1);
    }
  }

  _limitByMask(evt) {
    while (this._matrix[this._position] !== '_' && this._matrix[this._position]) {
      if (
        this._position <= this._startPosition ||
        this._elInput.value.substring(0, this._startPosition) !== this._start
      ) {
        this._elInput.value = this._start;
      } else if (evt.inputType === 'deleteContentBackward') {
        this._elInput.value = this._elInput.value.slice(0, -1);
      } else {
        this._elInput.value += this._matrix[this._position];
      }
      this._position = this._elInput.value.length;
    }
  }

  _inputChangeHandler() {
    this._preventDelStart();

    this._elInput.addEventListener('input', this._addListeners.bind(this));
  }

  _addListeners(evt) {
    evt.preventDefault();
    this._preventSymbolAxceptNumber(evt);

    this._position = this._elInput.value.length;
    this._limitByMask(evt);
  }

  init() {
    this._startPosition = this._matrix.indexOf('_');
    this._position = this._startPosition;
    this._start = this._matrix.substring(0, this._position);

    this._elInput.value = this._start;

    this._inputChangeHandler();
  }
}
