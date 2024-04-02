import styles from "./styles.module.css";

interface AnimatedTextProps {
  text: string;
  animation?: string;
  delay?: number;
  easing?: string;
  transitionOnlyDifferentLetters?: boolean;
  animationDuration?: number;
}

const AnimatedText = ({
  text,
  animation = "fade-in",
  delay = 32,
  easing = "ease",
  transitionOnlyDifferentLetters = false,
  animationDuration = 1000,
}: AnimatedTextProps) => {
  const animations = [
    styles.slideDown,
    styles.slideUp,
    styles.slideLeft,
    styles.slideRight,
    styles.popUp,
    styles.fadeIn,
    styles.rotateClockwise,
    styles.rotateCounterClockwise,
  ];

  function getAnimation(animation: string) {
    switch (animation) {
      case "slide-down":
        return styles.slideDown;
      case "slide-up":
        return styles.slideUp;
      case "slide-left":
        return styles.slideLeft;
      case "slide-right":
        return styles.slideRight;
      case "pop-up":
        return styles.popUp;
      case "rotate-clockwise":
        return styles.rotateClockwise;
      case "rotate-counter-clockwise":
        return styles.rotateCounterClockwise;
      case "random":
        const number = Math.floor(Math.random() * animations.length);
        return animations[number];
      default:
        return styles.fadeIn;
    }
  }

  return (
    <div className={styles.container}>
      {text?.split("").map((char, index) => {
        return (
          <div
            key={transitionOnlyDifferentLetters ? index + char : Math.random()}
            className={styles.char + " " + getAnimation(animation)}
            style={{
              animationDelay: `${index * delay}ms`,
              animationDuration: `${animationDuration}ms`,
              animationTimingFunction: easing,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedText;
