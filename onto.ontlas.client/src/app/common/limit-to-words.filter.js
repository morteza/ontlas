'use strict';

class LimitToWordsFilter {
  constructor() {
  }

  static factory(input, words) {
    if (isNaN(words)) {return input;}
    if (words <= 0) {return '';}
    if (input) {
      var inputWords = input.split(/\s+/);
      if (inputWords.length > words) {
        input = inputWords.slice(0, words).join(' ') + '…';
      }
    }
    return input ? String(input).replace(/<[^>]+>/gm, '') : '';;
  }
}

LimitToWordsFilter.factory.$inject = [
  'input', 'words'
];

export default LimitToWordsFilter;
