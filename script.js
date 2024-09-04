
        function changeCardColor(button) {
            const card = button.closest('.card');
            card.classList.add('custom-bg-color');
            button.dataset.cardId = card.id;
        }
        
        function removeCardColor(cardId) {
            const card = document.getElementById(cardId);
            if (card) {
                card.classList.remove('custom-bg-color');
            }
        }
        
        document.getElementById('project1Modal').addEventListener('hide.bs.modal', function () {
            removeCardColor('card1');
        });
        
        document.getElementById('project2Modal').addEventListener('hide.bs.modal', function () {
            removeCardColor('card2');
        });
        
        document.getElementById('project3Modal').addEventListener('hide.bs.modal', function () {
            removeCardColor('card3');
        });
        
        function searchSections(event) {
        event.preventDefault(); 
        const query = document.getElementById('search-input').value.toLowerCase();

        if (query.includes('portfolio')) {
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        } else if (query.includes('contact')) {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Error, not found. Please search for "Portfolio" or "Contact"');
        }
        }
        function submitContactForm(event) {
        event.preventDefault();
        alert('Your message has been submitted successfully.');
        event.target.reset();
        }
