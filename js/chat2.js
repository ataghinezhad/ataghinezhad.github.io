 // Enhanced JavaScript functionality
 function setSuggestion(question) {
    document.getElementById('question').value = question;
    updateCharCount();
    document.getElementById('question').focus();
}

function updateCharCount() {
    const textarea = document.getElementById('question');
    const charCount = document.getElementById('charCount');
    if (charCount) {
        charCount.textContent = textarea.value.length;
        
        if (textarea.value.length > 800) {
            charCount.style.color = '#dc3545';
        } else if (textarea.value.length > 600) {
            charCount.style.color = '#ffc107';
        } else {
            charCount.style.color = '#6c757d';
        }
    }
}

function clearQuestion() {
    document.getElementById('question').value = '';
    document.getElementById('responseBox').innerHTML = `
        <div class="qa-welcome-state">
            <div class="welcome-icon">
                <i class="fas fa-lightbulb"></i>
            </div>
            <div class="welcome-content">
                <h6>Ready to assist you!</h6>
                <p>Ask any question about Dr. Ahmad Taghinezhad-Niar's research work, publications, or academic background.</p>
            </div>
        </div>
    `;
    updateCharCount();
}


// Initialize character counter on page load
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('question');
    if (textarea) {
        textarea.addEventListener('input', updateCharCount);
        textarea.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                askQuestion();
            }
        });
        updateCharCount();
    }
});