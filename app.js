const colors = ["green", "red","yellow", "blue", "purple", 'pink', "rgba(133,122,200)", "rgba(3,242,800)", "rgba(783,922,490,1),","rgba(233,322,680,0.5)","#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
 // getting random number between 0 and 3(index 3)
 const randomNumber = getRandomNumber();
 console.log(randomNumber);
 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent = colors[randomNumber];
})

function getRandomNumber() {
 return Math.floor(Math.random()*colors.length);
}