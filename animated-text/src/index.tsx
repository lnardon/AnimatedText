import React from 'react'
import styles from './styles.module.css'

interface AnimatedTextProps {
  text: string
  animation?: string
  delay?: number
  easing?: string
  animateOnlyDifferentLetters?: boolean
}

const AnimatedText = ({
  text,
  animation = 'fade-in',
  delay = 32,
  easing = 'ease',
  animateOnlyDifferentLetters = false
}: AnimatedTextProps) => {
  function getAnimation(animation: string) {
    switch (animation) {
      case 'slide-down':
        return styles.slideDown
      case 'slide-up':
        return styles.slideUp
      case 'slide-left':
        return styles.slideLeft
      case 'slide-right':
        return styles.slideRight
      case 'pop-up':
        return styles.popUp
      default:
        return styles.fadeIn
    }
  }

  return (
    <div className={styles.container}>
      {text?.split('').map((char, index) => {
        return (
          <div
            key={animateOnlyDifferentLetters ? index + char : Math.random()}
            className={styles.char + ' ' + getAnimation(animation)}
            style={{
              animationDelay: `${index * delay}ms`,
              animationDuration: `${delay * text.split('').length}ms`,
              animationTimingFunction: easing
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </div>
        )
      })}
    </div>
  )
}

export default AnimatedText
