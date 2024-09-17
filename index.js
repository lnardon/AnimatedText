function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"char":"_IO_LD","fadeIn":"_3uImN","popUp":"_3dcVk","popup":"_1sRVg","slideUp":"_1VsJA","slide-up":"_3njXV","slideDown":"_3UPkY","slide-down":"_2f2WE","slideRight":"_3PgoG","slide-right":"_23i2I","slideLeft":"_2zM2M","slide-left":"_2S2Gt","rotateClockwise":"_2mfWh","rotate-clockwise":"_by4Wa","rotateCounterClockwise":"_2nSbU","rotate-counter-clockwise":"_3KZhJ","revealUp":"_3biuZ","reveal-up":"_2Es-0","revealDown":"_3QFND","reveal-down":"_tw2Dp","revealRight":"_jo4TG","reveal-right":"_P7sh0","revealLeft":"_3N77a","reveal-left":"_2Y7_a"};

var AnimatedText = function AnimatedText(_ref) {
  var text = _ref.text,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? 'fade-in' : _ref$animation,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 32 : _ref$delay,
    _ref$easing = _ref.easing,
    easing = _ref$easing === void 0 ? 'ease' : _ref$easing,
    _ref$transitionOnlyDi = _ref.transitionOnlyDifferentLetters,
    transitionOnlyDifferentLetters = _ref$transitionOnlyDi === void 0 ? false : _ref$transitionOnlyDi,
    _ref$animationDuratio = _ref.animationDuration,
    animationDuration = _ref$animationDuratio === void 0 ? 1000 : _ref$animationDuratio,
    style = _ref.style;
  var animations = [styles.slideDown, styles.slideUp, styles.slideLeft, styles.slideRight, styles.popUp, styles.fadeIn, styles.rotateClockwise, styles.rotateCounterClockwise, styles.revealUp, styles.revealDown, styles.revealLeft, styles.revealRight];
  function getAnimation(animation) {
    switch (animation) {
      case 'slide-down':
        return styles.slideDown;
      case 'slide-up':
        return styles.slideUp;
      case 'slide-left':
        return styles.slideLeft;
      case 'slide-right':
        return styles.slideRight;
      case 'pop-up':
        return styles.popUp;
      case 'rotate-clockwise':
        return styles.rotateClockwise;
      case 'rotate-counter-clockwise':
        return styles.rotateCounterClockwise;
      case 'reveal-up':
        return styles.revealUp;
      case 'reveal-down':
        return styles.revealDown;
      case 'reveal-left':
        return styles.revealLeft;
      case 'reveal-right':
        return styles.revealRight;
      case 'random':
        var number = Math.floor(Math.random() * animations.length);
        return animations[number];
      default:
        return styles.fadeIn;
    }
  }
  return React.createElement("div", {
    style: style ? style : {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, text === null || text === void 0 ? void 0 : text.split(' ').map(function (word, idx) {
    return React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, word.split('').map(function (letter, index) {
      var relative_index = index;
      index = idx + 1 * word.length + index;
      return React.createElement("div", {
        key: transitionOnlyDifferentLetters ? index + letter : Math.random(),
        className: styles["char"] + ' ' + getAnimation(animation),
        style: {
          animationDelay: index * delay + "ms",
          animationDuration: animationDuration + "ms",
          animationTimingFunction: easing
        }
      }, relative_index === word.length - 1 ? letter + '\xA0' : letter);
    }));
  }));
};

module.exports = AnimatedText;
//# sourceMappingURL=index.js.map
