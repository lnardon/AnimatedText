# **Animated Text Letters**

Animate each letter in your text with a simple 0 dependencies React.js component.

<img src="./docs/demo.gif" />

**Access the live demo here https://lnardon.github.io/AnimatedText and try different configurations.**

## **Install**

```bash
npm install animated-text-letters
```

The package comes with 13 animations:

- fade-in
- pop-up
- slide-up
- slide-down
- slide-left
- slide-right
- rotate-clockwise
- rotate-counter-clockwise
- reveal-up
- reveal-down
- reveal-left
- reveal-right
- random

## **Usage**

```tsx
import AnimatedText from "animated-text-letters";
import "animated-text-letters/index.css";

<AnimatedText
  text="Animated Text Demo"
  animation="slide-down"
  delay={32}
  easing="ease"
  transitionOnlyDifferentLetters={true}
  animationDuration={1000}
/>;
```

| Prop                             | Type                                                                                                                                                                   | Default Value | Description                                                                                                |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| `text`                           | `string`                                                                                                                                                               | _Required_    | The text string to be animated. This prop is required and does not have a default value.                   |
| `animation`                      | `"fade-in"`<br>`"pop-up"`<br>`"slide-up"`<br>`"slide-down"`<br>`"slide-left"`<br>`"slide-right"`<br>`"rotate-clockwise"`<br>`"rotate-counter-clockwise"`<br>`"random"` | `"fade-in"`   | Specifies the animation type. Choose from fade-in, pop-up, slide directions, rotate directions, or random. |
| `delay`                          | `number`                                                                                                                                                               | `32`          | The delay between each letter animation, in milliseconds.                                                  |
| `easing`                         | `"linear"`<br>`"ease"`<br>`"ease-in"`<br>`"ease-out"`<br>`"ease-in-out"`<br>or custom CSS values                                                                       | `"ease"`      | Defines the acceleration curve for the animation, for natural or dynamic movements.                        |
| `transitionOnlyDifferentLetters` | `boolean`                                                                                                                                                              | `false`       | If true, animation applies only to letters that change when the `text` prop updates.                       |
| `animationDuration`              | `number`                                                                                                                                                               | `1000`        | The duration of the entire text animation, in milliseconds.                                                |
