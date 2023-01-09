import React, { useState } from "react";
import "./styles.css";

var emojis = {
  "😜": "Winking With Tongue",
  "🤪": "Zany",
  "🫣": "Peeking Eye",
  "😑": "Expressionless",
  "🫡": "Saluting",
  "🤫": "Shushing",
  "😒": "Unamused",
  "😪": "Sleepy",
  "🥶": "Cold",
  "🥳": "Partying",
  "😲": "Astonished",
  "😣": "Persevering"
};

var emojisWeKnow = Object.keys(emojis);

export default function App() {
  // state handling
  const [meaning, setMeaning] = useState("");

  // function definition
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojis[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this emoji.";
    }

    setMeaning(meaning);
  }

  function emojiHandler(item) {
    var meaning = emojis[item];
    setMeaning(meaning);
  }

  // view
  return (
    <div className="App">
      <header id="header">
        <h1
          style={{
            color: "black",
            padding: "2rem"
          }}
        >
          Emoji Interpreter
        </h1>
      </header>

      <input
        placeholder="Input your emoji here"
        style={{ padding: "1rem 3rem", textAlign: "center" }}
        onChange={emojiInputHandler}
      />

      <div style={{ color: "black", padding: "2rem", fontSize: "26px" }}>
        <span style={{ color: "white" }}>Your emoji meaning ----</span>

        {meaning}
      </div>

      <h2 style={{ fontSize: "30px", color: "white" }}>
        Here are the emojis we know:
      </h2>

      {emojisWeKnow.map(function (item) {
        return (
          <span
            style={{ fontSize: "1.5rem", padding: "1rem", cursor: "pointer" }}
            onClick={() => emojiHandler(item)}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
