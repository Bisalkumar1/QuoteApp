let quotes=document.getElementById('quotes');
let  btn=document.getElementById('btn');
const url="https://api.quotable.io/random";

let getquote=()=>{
fetch(url)
.then((data)=>data.json())
.then((item)=>{
quotes.innerText=item.content;

});
};

window.addEventListener("load",getquote);
btn.addEventListener("click",getquote);

