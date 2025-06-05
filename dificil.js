const questions = [
  {
    question:
      "Qual é o nome da estrutura que os tubarões usam para detectar campos elétricos?",
    options: [
      "Ampolas de Lorenzini",
      "Células de Malpighi",
      "Órgãos de Golgi",
      "Corpúsculos de Pacini",
    ],
    correct: 0,
  },
  {
    question:
      "Qual tubarão pode sobreviver em água doce por períodos prolongados?",
    options: [
      "Tubarão-mako",
      "Tubarão-baleia",
      "Tubarão-cabeça-chata",
      "Tubarão-martelo",
    ],
    correct: 2,
  },
  {
    question:
      "Quantos anos estima-se que os tubarões tenham existido na Terra?",
    options: ["10 milhões", "50 milhões", "100 milhões", "400 milhões"],
    correct: 3,
  },
  {
    question: "Qual é a espécie de tubarão mais rápida registrada?",
    options: [
      "Tubarão-branco",
      "Tubarão-mako",
      "Tubarão-tigre",
      "Tubarão-lixa",
    ],
    correct: 1,
  },
  {
    question:
      "Qual tubarão é conhecido por sua capacidade de andar no fundo do oceano?",
    options: [
      "Tubarão-zebra",
      "Tubarão-cobre",
      "Tubarão-epaulette",
      "Tubarão-martelo",
    ],
    correct: 2,
  },
  {
    question: "Os tubarões possuem ossos em seus corpos?",
    options: ["Sim", "Não", "Apenas na cabeça", "Apenas nas barbatanas"],
    correct: 1,
  },
  {
    question: "Qual dessas espécies tem a mordida mais forte registrada?",
    options: [
      "Tubarão-mako",
      "Tubarão-branco",
      "Tubarão-tigre",
      "Tubarão-touro",
    ],
    correct: 3,
  },
  {
    question:
      "Qual é a principal razão pela qual os tubarões são caçados por humanos?",
    options: ["Pele", "Dentes", "Nadadeiras", "Órgãos internos"],
    correct: 2,
  },
  {
    question:
      "Qual tubarão é capaz de modificar sua temperatura corporal para se adaptar a diferentes ambientes?",
    options: [
      "Tubarão-mako",
      "Tubarão-tigre",
      "Tubarão-branco",
      "Tubarão-baleia",
    ],
    correct: 2,
  },
  {
    question: "Qual espécie de tubarão pode viver por mais de 400 anos?",
    options: [
      "Tubarão-martelo",
      "Tubarão-da-Groenlândia",
      "Tubarão-branco",
      "Tubarão-azul",
    ],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionData = questions[currentQuestion];
  document.getElementById("question-text").innerText = questionData.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  questionData.options.forEach((option, index) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = option;
    div.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(div);
  });
}

function checkAnswer(selectedIndex) {
  const questionData = questions[currentQuestion];
  const optionsContainer = document.getElementById("options");
  optionsContainer.childNodes.forEach((optionDiv, index) => {
    optionDiv.classList.add(
      index === questionData.correct ? "correct" : "incorrect"
    );
  });

  if (selectedIndex === questionData.correct) {
    score++;
    document.getElementById("score").innerText = `Acertos: ${score}`;
  }

  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    document.getElementById("next-button").style.display = "none";
  } else {
    document.getElementById(
      "quiz-container"
    ).innerHTML = `<h2>Quiz Finalizado!</h2><p>Você acertou ${score} de ${questions.length} perguntas.</p>`;
  }
}

loadQuestion();

function menu(){
    window.location.href="index.html";
  }