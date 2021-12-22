import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quote: data.content,
          author: data.author,
        });
      });
  }

  render() {
    return (
      <div id="quote-box">
        <h1>Randam Quote Machine</h1>
        <p id="text">{this.state.quote}</p>
        <p id="author">- {this.state.author}</p>
        <p>
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`}
            target="_blank"
            rel="noreferrer"
          >
            Tweet
          </a>
        </p>
        <button onClick={() => this.getQuote()} id="new-quote">
          Get Quote
        </button>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<QuoteBox />, document.getElementById("root"));
