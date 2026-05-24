const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("new-quote-btn");

async function getQuote() {
  try {
    const response = await fetch("http://localhost:3000/quote");
    const data = await response.json();

    quoteElement.textContent = `"${data.text}"`;
    authorElement.textContent = `- ${data.author}`;
  } catch (error) {
    console.error(error);
    quoteElement.textContent = "Failed to load quote";
    authorElement.textContent = "";
  }
}

button.addEventListener("click", getQuote);

// load first quote when page opens
getQuote();
