const noticias = [
  "Nova IA revoluciona mercado de tecnologia",
  "Brasil investe em ciência e inovação",
  "Robôs ganham espaço na indústria"
];

const container = document.getElementById("posts");
const btn = document.getElementById("verMais");

let index = 0;

btn.addEventListener("click", () => {
  if(index < noticias.length){
    const p = document.createElement("p");
    p.textContent = noticias[index];
    container.appendChild(p);
    index++;
  } else {
    btn.textContent = "Sem mais notícias";
    btn.disabled = true;
  }
});