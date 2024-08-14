document.addEventListener('DOMContentLoaded', function() {
    var loadingSpinner = document.getElementById('loadingSpinner');
    
    // Simulate loading
    loadingSpinner.style.display = 'block';
    setTimeout(function() {
        loadingSpinner.style.display = 'none';
    }, 2000);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
