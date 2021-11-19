import React from "react";
import { useState, useEffect } from "react";
import { Quote } from "./components/Quote";
import { Spinner } from "./components/Spinner";

const initialQuote = {
  text: "Quote",
  author: "Author",
};

function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false);

  const upDateQuote = async () => {
    setLoading(true);
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json();
    // setQuote({
    //   text: newQuote.quote,
    //   author: newQuote.author,
    // });

    const { quote: text, author } = newQuote;

    setQuote({
      text,
      author,
    });
    setLoading(false);
  };

  useEffect(() => {
    upDateQuote();
  }, []);

  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={() => upDateQuote()}> Get Another</button>
      {loading ? <Spinner /> : <Quote quote={quote} />}
    </div>
  );
}

export default App;
