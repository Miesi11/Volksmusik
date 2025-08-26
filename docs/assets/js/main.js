document.addEventListener('DOMContentLoaded', () => {
  // Random Gstanzl of the day
  const quotes = [
    "Mei Dirndl lacht liab, wia a Sunn auf der Wiesn, nur kocht’s a bissl schief – drum essen ma beim Priesen.",
    "I geh mit mein Dirl auf'n Tanz, weil tanzen, des kann s' ganz.",
    "Im Wirtshaus, do gehts lustig zua, bei Bier und a Musi nur.",
    "Ka Mäderl ist schea, es fehlt nur a Schnapserl."
  ];
  const dailyQuote = document.querySelector('.daily .quote-card p');
  if (dailyQuote) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // Insert line breaks for multi-line text
    dailyQuote.innerHTML = randomQuote.replace(/\n/g, '<br>');
  }
  // Mobile nav toggle handled by CSS; no JS needed
});
