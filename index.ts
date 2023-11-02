function animateText(text:string, target:string){
    const targetElement = document.getElementById(target);
    document.styleSheets[0].insertRule(appear)
    const container = document.createElement("div")
    text.split("").forEach((letter,index) => {
        const letterEl = document.createElement("span");
        letterEl.innerText = letter;
        letterEl.style.animation = "appear 1s ease forwads"
        letterEl.style.animationDelay = (35 * index) + "ms";
        container.appendChild(letterEl);
    });
    targetElement.appendChild(container)
}

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
`
