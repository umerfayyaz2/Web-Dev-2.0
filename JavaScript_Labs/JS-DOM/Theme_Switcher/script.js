document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.theme-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active state from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active state to clicked button
            this.classList.add('active');
            
            // Get the theme from dataset
            const theme = this.dataset.theme;
            
            // Remove all theme classes
            document.body.className = '';
            
            // Add new theme class
            document.body.classList.add(theme);
        });
    });
});