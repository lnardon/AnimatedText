(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedText = exports.animateText = void 0;
function animateText(text, target) {
    const targetElement = document.getElementById(target);
    document.styleSheets[0].insertRule(slideDown);
    const container = document.createElement("div");
    text.split("").forEach((letter, index) => {
        const letterEl = document.createElement("span");
        letterEl.innerText = letter;
        letterEl.style.animation = "slideDown 1s ease forwards";
        letterEl.style.animationDelay = (35 * index) + "ms";
        container.appendChild(letterEl);
    });
    targetElement.appendChild(container);
}
exports.animateText = animateText;
const appear = `
@keyframes appear {
    from {
        opacity: 0;
        transform: scale(0.7)
    }

    to {
        opacity: 1;
        transform: scale(1)
    }
}
`;
const slideDown = `
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-2rem);
    }

    
    to {
        opacity: 1;
        transform: translateY(0rem);
    }
}
`;
const slideUp = `
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(2rem);
    }
    to {
        opacity: 1;
        transform: translateY(0rem)
    }
}
`;

},{}],2:[function(require,module,exports){
var animateText = require("animated-text-letters").animateText;

window.onload = () => {
  animateText("Hello World", "animated-text");
};

},{"animated-text-letters":1}]},{},[2]);
