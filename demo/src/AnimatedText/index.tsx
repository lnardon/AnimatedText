import React from "react";
import styles from "./styles.module.css";

interface AnimatedTextProps {
  text: string;
  animation?: string;
  delay?: number;
  easing?: string;
  transitionOnlyDifferentLetters?: boolean;
  animationDuration?: number;
  style?: React.CSSProperties;
}

const AnimatedText = ({
  text,
  animation = "fade-in",
  delay = 32,
  easing = "ease",
  transitionOnlyDifferentLetters = false,
  animationDuration = 1000,
  style,
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
    styles.revealUp,
    styles.revealDown,
    styles.revealLeft,
    styles.revealRight,
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
      case "reveal-up":
        return styles.revealUp;
      case "reveal-down":
        return styles.revealDown;
      case "reveal-left":
        return styles.revealLeft;
      case "reveal-right":
        return styles.revealRight;
      case "random":
        // const number = Math.floor(Math.random() * animations.length);
        return animations[1];
      default:
        return styles.fadeIn;
    }
  }

  return (
    <div
      style={
        style
          ? style
          : {
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }
      }
    >
      {text?.split(" ").map((word, idx) => {
        return (
          <div
            style={{
              display: "flex",
              marginRight: "1.5rem",
            }}
          >
            {word.split("").map((letter, index) => {
              index = idx + 1 * word.length + index;
              return (
                <div
                  key={
                    transitionOnlyDifferentLetters
                      ? index + letter
                      : Math.random()
                  }
                  className={styles.char + " " + getAnimation(animation)}
                  style={{
                    animationDelay: `${index * delay}ms`,
                    animationDuration: `${animationDuration}ms`,
                    animationTimingFunction: easing,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedText;
