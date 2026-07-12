const letter = `I just want you to know something…

Thank you for being you.
You make my days lighter, and my heart calmer.
I’m really happy I get to talk to you.
I really hope that someday we'll be together forever.
I'm really glad that you have become a person in my life.
I hope that no matter what happens we'll be able to get through
it all, I love you so much. Thank you for everything you have done.
You're the best person in the world and nothing would change that.

Happy Birthday!
— Leo`;

const letterText = document.getElementById("letterText");
const openFlowers = document.getElementById("openFlowers");

let i = 0;

function typeLetter(){
  if(i < letter.length){
    letterText.textContent += letter[i];
    i++;
    setTimeout(typeLetter, 20);
  }
}
typeLetter();

openFlowers.addEventListener("click", () => {
  window.location.href = "flower.html";
});
