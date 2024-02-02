import { useState } from "react";
import AnimatedText from "./AnimatedText";
import "./App.css";

function App() {
  const [text, setText] = useState("Animated Text Demo");
  const [animation, setAnimation] = useState("fade-in");
  const [delay, setDelay] = useState(32);
  const [easing, setEasing] = useState("ease");
  const [animateOnlyDifferentLetters, setAnimateOnlyDifferentLetters] =
    useState(false);

  function copyToClipboard() {
    const el = document.createElement("textarea");
    el.value = `<AnimatedText text="${text}" animation="${animation}" delay={${delay}} easing="${easing}" animateOnlyDifferentLetters={${animateOnlyDifferentLetters}} />`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied to clipboard!");
  }

  return (
    <div className="container">
      <div className="text">
        <AnimatedText
          text={text}
          animation={animation}
          delay={delay}
          easing={easing}
          animateOnlyDifferentLetters={animateOnlyDifferentLetters}
        />
      </div>
      <div className="settings">
        <div className="input-container">
          <h3 className="input-title">Sample Text</h3>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
            className="input"
          />
        </div>
        <div className="input-container">
          <h3 className="input-title">Animation</h3>
          <select
            onChange={(e) => setAnimation(e.target.value)}
            className="select"
          >
            <option value="fade-in">Fade In</option>
            <option value="pop-up">Pop Up</option>
            <option value="slide-down">Slide Down</option>
            <option value="slide-up">Slide Up</option>
            <option value="slide-left">Slide Left</option>
            <option value="slide-right">Slide Right</option>
          </select>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "1rem",
          }}
        >
          <div className="input-container">
            <h3 className="input-title">Letters delay (ms)</h3>
            <input
              type="number"
              value={delay}
              onChange={(e) => setDelay(parseInt(e.target.value))}
              placeholder="Delay"
              className="input"
            />
          </div>
          <div className="input-container">
            <h3 className="input-title">Animation easing</h3>
            <input
              type="text"
              value={easing}
              onChange={(e) => setEasing(e.target.value)}
              placeholder="Easing"
              className="input"
            />
          </div>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={animateOnlyDifferentLetters}
            onChange={(e) => setAnimateOnlyDifferentLetters(e.target.checked)}
            className="checkbox"
            id="animateOnlyDifferentLetters"
          />
          <label
            className="checkbox-label"
            htmlFor="animateOnlyDifferentLetters"
          >
            Animate only different letters
          </label>
        </div>
        <button className="copy-btn" onClick={copyToClipboard}>
          Copy JSX Element
        </button>
      </div>
    </div>
  );
}

export default App;
