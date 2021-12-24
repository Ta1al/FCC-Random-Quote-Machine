function QuoteBox() {
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");
  React.useEffect(() => {
    getQuote();
  }, []);
  function getQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }

  return (
    <div class="container" id="quote-box">
      <h1>Randam Quote Machine</h1>
      <div id="quote">
        <p id="text">{quote}</p>
        <p id="author">- {author}</p>
      </div>
      <div>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
          target="_blank"
          rel="noreferrer"
        >
          Tweet it
        </a>
        <button onClick={() => getQuote()} id="new-quote">
          Get Another Quote
        </button>
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(<QuoteBox />, document.getElementById("root"));
