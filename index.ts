export function animateText(
  text: string,
  target: string,
  delay: number = 0,
  animation: string = slideDown
) {
  const targetElement = document.getElementById(target);
  document.styleSheets[0].insertRule(animation);
  const container = document.createElement("div");
  text.split("").forEach((letter, index) => {
    const letterEl = document.createElement("span");
    letterEl.innerText = letter;
    letterEl.style.animation = "appear 1s ease forwads";
    letterEl.style.animationDelay = delay * index + "ms";
    container.appendChild(letterEl);
  });
  targetElement.appendChild(container);
}

export const appear = `
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
export const slideDown = `
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
export const slideUp = `
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
export const slideLeft = `
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateX(2rem);
    }
    to {
        opacity: 1;
        transform: translateX(0rem)
    }
}
`;
export const slideRight = `
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateX(-2rem);
    }
    to {
        opacity: 1;
        transform: translateX(0rem)
    }
}
`;
