function verifierDisponibilite() {
    const dateSelection = document.getElementById('date-selection').value;
    const messageElement = document.getElementById('disponibilite-message');

    // Liste des dates réservées (exemple)
    const datesReservees = ['2024-10-15', '2024-10-20', '2024-10-25'];

    if (datesReservees.includes(dateSelection)) {
        messageElement.textContent = "Désolé, la chambre n'est pas disponible à cette date.";
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = "La chambre est disponible à cette date.";
        messageElement.style.color = 'green';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slideshow .slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 5000);
});

