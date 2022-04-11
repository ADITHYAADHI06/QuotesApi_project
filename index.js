console.log("connected");
let Quotes = document.querySelector(".Quotes");
let Author = document.querySelector(".Author");
let NewQ = document.querySelector(".NewQ");
let Tweet = document.querySelector(".Tweet");

let realData = "";
let randomNum;
const tweetQuotes = () => {
  let TweetPost = `https://twitter.com/intent/tweet?text=${realData[randomNum].text}`;
  window.open(TweetPost);
};

const getNweQuotes = () => {
  randomNum = Math.floor(Math.random() * 20);
  Quotes.innerText = `${realData[randomNum].text}`;
  if (realData[randomNum].author === null) {
    Author.innerText = `by unKnown`;
  } else {
    Author.innerText = `by ${realData[randomNum].author}`;
  }
};

const getQuotes = async () => {
  try {
    const api = "https://type.fit/api/quotes";
    let data = await fetch(api);
    realData = await data.json();
    getNweQuotes();
  } catch (error) {}
};

NewQ.addEventListener("click", getNweQuotes);
Tweet.addEventListener("click", tweetQuotes);

getQuotes();
