const questions = [
            { question: "Qual é o um tuba?", options: ["pato", "jacaré", "martelo", "Sapo"], correct: 2 },
            
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