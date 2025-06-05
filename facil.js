const questions = [
  { question: "Qual é o maior tubarão do mundo?", options: ["Tubarão-martelo", "Tubarão-branco", "Tubarão-baleia", "Tubarão-tigre"], correct: 2 },
  { question: "Quantas filas de dentes um tubarão normalmente tem?", options: ["1", "2", "5", "10"], correct: 2 },
  { question: "O que um tubarão usa para detectar suas presas?", options: ["Nariz", "Sonar", "Eletro-receptores", "Voz"], correct: 2 },
  { question: "Os tubarões são peixes ou mamíferos?", options: ["Peixes", "Mamíferos", "Anfíbios", "Répteis"], correct: 0 },
  { question: "Qual dessas espécies é famosa no filme Tubarão?", options: ["Tubarão-tigre", "Tubarão-branco", "Tubarão-martelo", "Tubarão-baleia"], correct: 1 },
  { question: "Onde os tubarões vivem?", options: ["No deserto", "Na selva", "No oceano", "No gelo"], correct: 2 },
  { question: "Qual é a principal fonte de alimento do tubarão branco?", options: ["Peixes", "Plâncton", "Frutas", "Grama"], correct: 0 },
  { question: "Os tubarões precisam de água salgada para sobreviver?", options: ["Sim", "Não", "só água doce", "Algumas espécies podem viver em ambos", "Nenhuma das anteriores"], correct: 2 },
  { question: "Como os tubarões respiram?", options: ["Pela pele", "Com pulmões", "Através das brânquias", "Pelo nariz"], correct: 2 },
  { question: "Os tubarões podem regenerar seus dentes?", options: ["Sim", "Não", "Apenas uma vez na vida", "Apenas se machucarem"], correct: 0 }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById('question-text').innerText = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = "";
    questionData.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.classList.add('option');
        div.innerText = option;
        div.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(div);
    });
}

function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestion];
    const optionsContainer = document.getElementById('options');
    optionsContainer.childNodes.forEach((optionDiv, index) => {
        optionDiv.classList.add(index === questionData.correct ? "correct" : "incorrect");
    });

    if (selectedIndex === questionData.correct) {
        score++;
        document.getElementById('score').innerText = `Acertos: ${score}`;
    }

    document.getElementById('next-button').style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById('next-button').style.display = "none";
    } else {
        document.getElementById('quiz-container').innerHTML = `<h2>Quiz Finalizado!</h2><p>Você acertou ${score} de ${questions.length} perguntas.</p>`;
    }
}

loadQuestion();

function menu(){
    window.location.href="index.html";
  }