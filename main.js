// Generates a random number in [0,max).
function rand(max){
  return Math.floor(Math.random() * max);
}

// Choose an initial random quote and swap in a new one whenever the user
// clicks on the block quote element.
var blockquote = document.querySelector('blockquote');
blockquote.addEventListener('click', (function changeQuote(){
  blockquote.innerHTML = quotes[rand(quotes.length)];
  return changeQuote;
})());

// Choose a random background image.
document.querySelector('.background').style.backgroundImage =
  'url("backgrounds/' + rand(27) + '.jpg")';
