# **Animated Text Letters**

Animate each letter in your text with a simple 0 dependencies React.js component.

<img src="./docs/demo.gif" />

**Access the live demo here https://lnardon.github.io/AnimatedText and try different configurations.**

## **Install**

```bash
npm install animated-text-letters
```

The package comes with 6 animations:

- fade-in
- pop-up
- slide-up
- slide-down
- slide-left
- slide-right

## **Usage**

```tsx
import AnimatedText from "animated-text-letters";
import "animated-text-letters/dist/index.css";

<AnimatedText
  text="Animated Text Demo"
  animation="slide-down"
  delay={32}
  easing="ease"
  animateOnlyDifferentLetters={true}
/>;
```
