// Select all feature cards
const featureCards = document.querySelectorAll('.feature-card');

// Function to handle click
function handleCardClick(event) {
    // Remove the active class from all cards
    featureCards.forEach(card => card.classList.remove('active'));
    
    // Add the active class to the clicked card
    event.currentTarget.classList.add('active');
}

// Attach click event listener to each card
featureCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});
