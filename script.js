const letters = {
  letter1: {
    title: "Para quando sentir saudade",
    text: `Não sei em que momento você vai abrir esta carta. Talvez seja num dia tranquilo, talvez em um daqueles em que a saudade aparece sem avisar.

Queria dizer que algumas lembranças continuam sendo especiais para mim. Não porque tudo tenha sido perfeito, mas porque existiram momentos que tiveram significado. Às vezes, uma conversa, uma brincadeira ou um gesto pequeno consegue permanecer na memória por muito tempo.

Se algum dia você também se lembrar de alguma dessas coisas, espero que seja com carinho.`
  },

  letter2: {
    title: "Sobre aquilo que eu queria dizer",
    text: `Nem sempre eu consigo organizar tudo o que sinto. Existem coisas que parecem muito maiores por dentro do que conseguem ser quando saem em palavras.

Eu queria que você soubesse que este espaço foi feito com cuidado. Cada detalhe foi pensado para que você pudesse perceber que, por trás dele, existe alguém que quis demonstrar carinho de uma forma diferente.

Não escrevo esperando uma resposta específica. Só não queria deixar tudo isso sem forma, guardado para sempre em silêncio.`
  },

  letter3: {
    title: "Se um dia você reler",
    text: `Se você estiver lendo isto outra vez, espero que encontre aqui a mesma sinceridade com que escrevi.

Talvez muita coisa já tenha mudado. Talvez a vida tenha levado cada um para um caminho diferente. Ainda assim, desejo que você esteja bem, realizando seus planos e encontrando motivos para gostar dos seus dias.

Obrigada por ter feito parte de lembranças que, de alguma maneira, me ensinaram sobre cuidado, afeto e sobre a importância dos pequenos gestos.`
  }
};

// ABRIR AS CARTAS

const paper = document.getElementById("letterPaper");
const title = document.getElementById("letterTitle");
const text = document.getElementById("letterText");

document.querySelectorAll("[data-letter]").forEach(button => {
  button.addEventListener("click", () => {
    const letter = letters[button.dataset.letter];

    title.textContent = letter.title;
    text.textContent = letter.text;

    paper.hidden = false;

    paper.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});

// FECHAR A CARTA

document.getElementById("closeLetter").addEventListener("click", () => {
  paper.hidden = true;
});

// MENSAGENS ESCONDIDAS NAS MARCAS DE BEIJO

document.querySelectorAll(".kiss").forEach(kiss => {
  kiss.addEventListener("click", () => {
    document.getElementById("kissMessage").textContent =
      kiss.dataset.message;
  });
});

// REVELAR O POEMA ESCONDIDO

document.getElementById("revealPoem").addEventListener("click", () => {
  const hidden = document.getElementById("hiddenPoem");

  hidden.hidden = !hidden.hidden;

  document.getElementById("revealPoem").textContent =
    hidden.hidden
      ? "Encontrar um poema escondido ✧"
      : "Guardar este poema ✧";

  if (!hidden.hidden) {
    hidden.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});

// ENTRAR NO AMBIENTE ROXO

const purpleWorld = document.getElementById("purpleWorld");

function openPurple() {
  purpleWorld.classList.add("active");
  purpleWorld.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePurple() {
  purpleWorld.classList.remove("active");
  purpleWorld.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("purpleNav").addEventListener("click", openPurple);

document.getElementById("closePurple").addEventListener("click", closePurple);

// TAMBÉM FECHA O AMBIENTE ROXO COM A TECLA ESC

document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    purpleWorld.classList.contains("active")
  ) {
    closePurple();
  }
});

// ANIMAÇÕES AO ROLAR A PÁGINA

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".section-pad, .quote-band").forEach(section => {
  section.classList.add("reveal");
  observer.observe(section);
});