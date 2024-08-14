document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('musicPlaying')) {
        localStorage.setItem('musicPlaying', 'true');
        var audio = document.getElementById('background-music');
        audio.play();
    }
});
