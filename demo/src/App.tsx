import { useState } from "react";
import AnimatedText from "./AnimatedText";
import "./App.css";

function App() {
  const [text, setText] = useState("Hello World");
  const [animation, setAnimation] = useState("fade-in");
  const [delay, setDelay] = useState(32);
  const [duration, setDuration] = useState(1000);
  const [easing, setEasing] = useState("ease");
  const [animateOnlyDifferentLetters, setAnimateOnlyDifferentLetters] =
    useState(false);

  return (
    <>
      <AnimatedText
        text={text}
        animation={animation}
        delay={delay}
        duration={duration}
        easing={easing}
        animateOnlyDifferentLetters={animateOnlyDifferentLetters}
      />
      <div className="settings">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Text"
        />
        <select name="" id="" onChange={(e) => setAnimation(e.target.value)}>
          <option value="fade-in">Fade In</option>
          <option value="slide-down">Slide Down</option>
          <option value="slide-up">Slide Up</option>
          <option value="slide-left">Slide Left</option>
          <option value="slide-right">Slide Right</option>
        </select>
        <input
          type="text"
          value={delay}
          onChange={(e) => setDelay(parseInt(e.target.value))}
          placeholder="Delay"
        />
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          placeholder="Duration"
        />
        <input
          type="text"
          value={easing}
          onChange={(e) => setEasing(e.target.value)}
          placeholder="Easing"
        />
        <div>
          <input
            type="checkbox"
            checked={animateOnlyDifferentLetters}
            onChange={(e) => setAnimateOnlyDifferentLetters(e.target.checked)}
          />
          <label>Animate only different letters</label>
        </div>
        <button>Apply</button>
      </div>
    </>
  );
}

export default App;
