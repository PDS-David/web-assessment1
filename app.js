// Application state
let studentName = '';
let whatsappNumber = '';
let currentQuestionIndex = 0;
let studentAnswers = {};
let startTime = null;
let timerInterval = null;
let timeRemaining = 3600; // 1 hour in seconds

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Handle registration form submission
    document.getElementById('registrationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        startAssessment();
    });

    // Validate phone number on input
    document.getElementById('whatsappNumber').addEventListener('input', (e) => {
        const phoneError = document.getElementById('phoneError');
        const phone = e.target.value;
        
        if (phone && !phone.startsWith('+234')) {
            phoneError.classList.remove('hidden');
        } else {
            phoneError.classList.add('hidden');
        }
    });
});

function startAssessment() {
    studentName = document.getElementById('studentName').value.trim();
    whatsappNumber = document.getElementById('whatsappNumber').value.trim();

    // Validate inputs
    if (!studentName) {
        alert('Please enter your name');
        return;
    }

    if (!whatsappNumber.startsWith('+234')) {
        alert('Please enter a valid WhatsApp number starting with +234');
        return;
    }

    // Hide registration, show assessment
    document.getElementById('registrationScreen').classList.add('hidden');
    document.getElementById('assessmentScreen').classList.remove('hidden');

    // Start timer
    startTime = Date.now();
    startTimer();

    // Load first question
    loadQuestion(0);
}

function startTimer() {
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        timeRemaining = 3600 - elapsed;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            autoSubmitAssessment();
            return;
        }

        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const display = `Time Remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const timerElement = document.getElementById('timer');
    timerElement.textContent = display;

    // Change color based on time remaining
    timerElement.classList.remove('warning', 'danger');
    if (timeRemaining <= 300) { // 5 minutes
        timerElement.classList.add('danger');
    } else if (timeRemaining <= 600) { // 10 minutes
        timerElement.classList.add('warning');
    }
}

function loadQuestion(index) {
    currentQuestionIndex = index;
    const question = questionsData[index];

    // Update question number and text
    document.getElementById('questionNumber').textContent = `Question ${question.number} of ${questionsData.length}`;
    document.getElementById('questionText').textContent = question.question;

    // Update progress bar
    const progress = ((index + 1) / questionsData.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';

    // Load options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const isSelected = studentAnswers[question.number] === option.label;
        if (isSelected) {
            optionDiv.classList.add('selected');
        }

        optionDiv.innerHTML = `
            <input type="radio" 
                   name="answer" 
                   value="${option.label}" 
                   id="option${option.label}"
                   ${isSelected ? 'checked' : ''}>
            <label for="option${option.label}" style="cursor: pointer; flex: 1;">
                ${option.label}. ${option.text}
            </label>
        `;

        optionDiv.addEventListener('click', (e) => {
            if (e.target.tagName !== 'INPUT') {
                const radio = optionDiv.querySelector('input[type="radio"]');
                radio.checked = true;
            }
            selectOption(question.number, option.label);
        });

        optionsContainer.appendChild(optionDiv);
    });

    // Update navigation buttons
    updateNavigationButtons();
}

function selectOption(questionNumber, answer) {
    studentAnswers[questionNumber] = answer;
    
    // Update visual selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    const selectedOption = document.querySelector(`input[value="${answer}"]`).closest('.option');
    selectedOption.classList.add('selected');
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    // Show/hide previous button
    prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';

    // Show/hide next and submit buttons
    if (currentQuestionIndex === questionsData.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questionsData.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

function submitAssessment() {
    const unanswered = questionsData.length - Object.keys(studentAnswers).length;
    
    if (unanswered > 0) {
        const confirmSubmit = confirm(`You have ${unanswered} unanswered question(s). Do you want to submit anyway?`);
        if (!confirmSubmit) {
            return;
        }
    }

    // Stop timer
    clearInterval(timerInterval);

    // Calculate results
    calculateAndShowResults();
}

function autoSubmitAssessment() {
    alert('Time is up! Your assessment will be submitted automatically.');
    calculateAndShowResults();
}

function calculateAndShowResults() {
    let score = 0;
    const topicScores = {
        'HTML': { correct: 0, total: 0 },
        'CSS': { correct: 0, total: 0 },
        'PHP': { correct: 0, total: 0 },
        'JavaScript': { correct: 0, total: 0 }
    };

    // Calculate score and topic breakdown
    questionsData.forEach(question => {
        const studentAnswer = studentAnswers[question.number];
        const correctAnswer = correctAnswers[question.number];
        
        if (question.topic in topicScores) {
            topicScores[question.topic].total++;
            
            if (studentAnswer === correctAnswer) {
                score++;
                topicScores[question.topic].correct++;
            }
        }
    });

    const percentage = ((score / questionsData.length) * 100).toFixed(1);

    // Generate report
    const report = generateReport(score, percentage, topicScores);

    // Save results to localStorage for admin panel
    saveResults(score, percentage, topicScores);

    // Show results screen
    document.getElementById('assessmentScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');

    document.getElementById('scoreDisplay').textContent = `${score}/${questionsData.length}`;
    document.getElementById('scoreLabel').textContent = `${percentage}% - ${getGrade(percentage)}`;

    // Store report for WhatsApp
    window.assessmentReport = report;
}

function getGrade(percentage) {
    if (percentage >= 90) return 'Excellent';
    if (percentage >= 80) return 'Very Good';
    if (percentage >= 70) return 'Good';
    if (percentage >= 60) return 'Fair';
    if (percentage >= 50) return 'Pass';
    return 'Needs Improvement';
}

function generateReport(score, percentage, topicScores) {
    let report = `WEB DEVELOPMENT ASSESSMENT REPORT\n`;
    report += `${'='.repeat(40)}\n\n`;
    report += `Student: ${studentName}\n`;
    report += `Date: ${new Date().toLocaleDateString()}\n`;
    report += `Time: ${new Date().toLocaleTimeString()}\n\n`;
    
    report += `OVERALL PERFORMANCE\n`;
    report += `-`.repeat(40) + `\n`;
    report += `Score: ${score}/${questionsData.length} (${percentage}%)\n`;
    report += `Grade: ${getGrade(percentage)}\n\n`;

    report += `PERFORMANCE BY TOPIC\n`;
    report += `-`.repeat(40) + `\n`;
    
    const weakAreas = [];
    
    for (const [topic, data] of Object.entries(topicScores)) {
        if (data.total > 0) {
            const topicPercentage = ((data.correct / data.total) * 100).toFixed(1);
            report += `${topic}: ${data.correct}/${data.total} (${topicPercentage}%)\n`;
            
            if (topicPercentage < 70) {
                weakAreas.push(topic);
            }
        }
    }

    report += `\nRECOMMENDATIONS\n`;
    report += `-`.repeat(40) + `\n`;
    
    if (percentage >= 80) {
        report += `Excellent work! You have a strong understanding of web development concepts.\n`;
    } else if (percentage >= 70) {
        report += `Good job! You have a solid foundation in web development.\n`;
    } else if (percentage >= 60) {
        report += `Fair performance. With more practice, you can improve significantly.\n`;
    } else {
        report += `You need to strengthen your understanding of web development fundamentals.\n`;
    }

    if (weakAreas.length > 0) {
        report += `\nFocus on improving your knowledge in:\n`;
        weakAreas.forEach(area => {
            report += `• ${area}\n`;
        });
    }

    report += `\nRESOURCES FOR IMPROVEMENT:\n`;
    if (weakAreas.includes('HTML')) {
        report += `• HTML: MDN Web Docs, W3Schools HTML Tutorial\n`;
    }
    if (weakAreas.includes('CSS')) {
        report += `• CSS: CSS-Tricks, Flexbox Froggy, Grid Garden\n`;
    }
    if (weakAreas.includes('PHP')) {
        report += `• PHP: PHP Manual, PHP The Right Way\n`;
    }
    if (weakAreas.includes('JavaScript')) {
        report += `• JavaScript: JavaScript.info, Eloquent JavaScript\n`;
    }

    return report;
}

function saveResults(score, percentage, topicScores) {
    const results = JSON.parse(localStorage.getItem('assessmentResults') || '[]');
    
    results.push({
        studentName,
        whatsappNumber,
        score,
        percentage,
        topicScores,
        date: new Date().toISOString(),
        totalQuestions: questionsData.length
    });

    localStorage.setItem('assessmentResults', JSON.stringify(results));
}

function sendToWhatsApp() {
    const report = window.assessmentReport;
    const encodedReport = encodeURIComponent(report);
    
    // Remove + from phone number for WhatsApp API
    const phoneNumber = whatsappNumber.replace('+', '');
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedReport}`;
    window.open(whatsappUrl, '_blank');
    
    // Show confirmation
    alert('WhatsApp opened! Please click "Send" to receive your report.');
}
