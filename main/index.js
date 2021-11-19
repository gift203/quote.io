const quoteContainer = document.getElementById('quote-container');
const linkQuote = document.getElementById('link-quote');
const random = document.getElementById('random');
const bigContainer = document.getElementById('big-container');
const svg = document.getElementById('svg');
random.addEventListener('click', () => {
    svg.style.transform = "rotate(360deg) translateZ(0)";
    quoteAppel();


});



 let quoteAppel = function() {
     
    
fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
.then((res) => res.json())
.then((data) =>{
console.log(data.data[0]);
let quota = data.data[0].quoteText;
console.log(data);
quoteContainer.innerHTML = `<p>"${quota}"</p>`;
linkQuote.innerHTML = `<div id="icon-link"> <h1>${data.data[0].quoteAuthor}</h1>
<span>${data.data[0].quoteGenre}</span>
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z"></path></svg>

`;


});
 };

 quoteAppel();

 fetch('https://quote-garden.herokuapp.com/api/v3/quotes').then((res) => res.json())
 .then((aData) => {
     console.log(aData);
     console.log(aData.pagination)
 })



