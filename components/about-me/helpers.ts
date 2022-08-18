import { typingText } from "./text";

export const TypingText = () => {
var i = 0;
var txt = typingText;
var speed = 50; /* Скорость/длительность эффекта в миллисекундах */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("area")!.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()
}
