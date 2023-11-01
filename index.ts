function animateText(text:string, target:string){
    const targetElement = document.getElementById(target);

    const container = document.createElement("div")
    text.split("").forEach(letter => {
        const letterEl = document.createElement("span");
        letterEl.innerText = letter;
        container.appendChild(letterEl)
    });
    targetElement.appendChild(container)
}
