
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.liste button');

    toggleButtons.forEach(button => {
        const arrowImage = button.querySelector('img');
        arrowImage.classList.add('down-arrow-unactive');

        button.addEventListener('click', () => {
            const container = button.nextElementSibling;
            container.classList.toggle('show');
            arrowImage.classList.toggle('down-arrow-active');
            arrowImage.classList.toggle('down-arrow-unactive');
        });
    });
});

const liste1 = [
    {
        imageSrc: 'assets/images/affiches/liste1/forrest-gump.jpg',
        imageAlt: 'Forrest-Gump',
        title: 'Forrest Gump',
        duration: '2h 22m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/very-bad-trip.jpg',
        imageAlt: 'Very bad trip',
        title: 'Very Bad Trip',
        duration: '90 min',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/kill-bill.jpg',
        imageAlt: 'kill bill',
        title: 'Kill Bill',
        duration: '2h 22m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/django-unchained.jpg',
        imageAlt: 'Djongo unchained',
        title: 'Django Unchained',
        duration: '90 min',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/elysium.jpg',
        imageAlt: 'Elysium',
        title: 'Elysium',
        duration: '2h 22m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/fight-club.jpg',
        imageAlt: 'Fight Club',
        title: 'Fight Club',
        duration: '90 min',
        description: "Mérite pas sa place sur l'étagère des classique apparement"
    },
    {
        imageSrc: 'assets/images/affiches/liste1/bienvenue-a-gattaca.jpg',
        imageAlt: 'Bienvenue à Gattaca',
        title: 'Bienvenue à Gattaca',
        duration: '2h 22m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/Rango.jpg',
        imageAlt: 'Affiche du film 2',
        title: 'Rango',
        duration: '90 min',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/noce-funebre.jpg',
        imageAlt: 'Noce Funèbre',
        title: 'Django Unchained',
        duration: '90 min',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/noel-jack.jpg',
        imageAlt: "L'Étrange Noël de monsieur Jack",
        title: "L'Étrange Noël de monsieur Jack",
        duration: '2h 22m',
        description: 'Pas fou'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/frankenweenie.jpg',
        imageAlt: 'Franken Weenie',
        title: 'Franken Weenie',
        duration: '90 min',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/pacific_rim.jpg',
        imageAlt: 'Pacific Rim',
        title: 'Pacific Rim',
        duration: '2h 22m',
        description: 'Meilleur film de tout les temps je ne veut rien savoir je ne pourrais pas écrire quelque chose de négatif à son sujet'
    },
    {
        imageSrc: 'assets/images/affiches/liste1/Starchip-Troopers.jpg',
        imageAlt: 'Starchip Troopers',
        title: 'Starchip Troopers',
        duration: '90 min',
        description: 'A venir'
    },
];

const liste2 = [
    {
        imageSrc: 'assets/images/affiches/liste2/dune.jpg',
        imageAlt: 'Dune (1984)',
        title: 'Dune (1984)',
        duration: '2h 17m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/Conan-le-barbare.jpg',
        imageAlt: 'Conan le barbare',
        title: 'Conan le barbare',
        duration: '1h 35m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/austin-power.jpg',
        imageAlt: "Austin Power (j'adore)",
        title: "Austin Power",
        duration: '1h 56m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/full-metal-jacket.jpg',
        imageAlt: 'Full Metal Jacket',
        title: 'Full Metal Jacket',
        duration: '1h 56m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/Rasta-Rocket.jpg',
        imageAlt: 'Rasta Rocket',
        title: 'Rasta Rocket',
        comment: "(juste pour le kiff)",
        duration: '1h 38m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/adieu-les-cons.jpg',
        imageAlt: 'Adieu les cons',
        title: 'Adieu les cons',
        comment: '(Très bien mais vraiment pas gay)',
        duration: '1h 27m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/minority-report.jpg',
        imageAlt: 'Minority Report',
        title: 'Minority Report',
        duration: '2h 25m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/snowpiercer.jpg',
        imageAlt: 'Snowpiercer',
        title: 'Snowpiercer',
        duration: '2h 6m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/le-marin-des-mers-de-chine.jpg',
        imageAlt: 'Le Marin des mers de Chine',
        title: 'Le Marin des mers de Chine',
        duration: '1h 46m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/y-a-t-il-un-flic.jpg',
        imageAlt: 'Y a-t-il un flic pour sauver la reine ?',
        title: 'Y a-t-il un flic pour sauver la reine ?',
        duration: '1h 25m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/indepandance-day.jpg',
        imageAlt: 'Indepandance day',
        title: 'Indepandance day',
        duration: '2h 25m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/the-revenant.jpg',
        imageAlt: 'The Revenant',
        title: "The Revenant",
        duration: '2h 36m',
        description: 'A venir'
    },
    {
        imageSrc: 'assets/images/affiches/liste2/le_sorcier_et_le_serpent_blanc.jpg',
        imageAlt: 'Le Sorcier et le Serpent blanc',
        title: 'Le Sorcier et le Serpent blanc',
        duration: '1h 40m',
        description: 'A venir'
    },

];

const moviesContainer = document.getElementById('movies-container');

function dynamique(movies, containerId){
    const moviesContainer = document.querySelector(`#${containerId} .movies-container`);
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
    
        const movieImageDiv = document.createElement('div');
        movieImageDiv.classList.add('movie-image');
    
        const movieImg = document.createElement('img');
        movieImg.src = movie.imageSrc;
        movieImg.alt = movie.imageAlt;
    
        movieImageDiv.appendChild(movieImg);
    
        const movieInfoDiv = document.createElement('div');
        movieInfoDiv.classList.add('movie-info');
    
        // Crée la div main-info pour le titre et la durée
        const mainInfoDiv = document.createElement('div');
        mainInfoDiv.classList.add('main-info');
    
        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        const movieComment = document.createElement('h4');
        movieComment.textContent = movie.comment;
    
        const movieDuration = document.createElement('p');
        movieDuration.textContent = `Durée : ${movie.duration}`;
    
        mainInfoDiv.appendChild(movieTitle);
        mainInfoDiv.appendChild(movieDuration);
    
        // Ajoute la div main-info à movieInfoDiv
        movieInfoDiv.appendChild(mainInfoDiv);
    
        // Crée la div description
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
    
        // Crée et ajoute le h4 description-title
        const descriptionTitle = document.createElement('h4');
        descriptionTitle.classList.add('description-title');
        descriptionTitle.textContent = 'Description :';
    
        descriptionDiv.appendChild(descriptionTitle);
    
        // Crée la div description-text qui contient le paragraphe de description
        const descriptionTextDiv = document.createElement('div');
        descriptionTextDiv.classList.add('description-text');
    
        const movieDescription = document.createElement('p');
        movieDescription.textContent = movie.description;
    
        descriptionTextDiv.appendChild(movieDescription);
    
        // Ajoute descriptionTextDiv à descriptionDiv
        descriptionDiv.appendChild(descriptionTextDiv);
    
        // Ajoute descriptionDiv à movieInfoDiv
        movieInfoDiv.appendChild(descriptionDiv);
    
        // Crée et ajoute le lien "Voir l'avis"
        const reviewLink = document.createElement('a');
        reviewLink.href = "#";
        reviewLink.textContent = "Voir l'avis";
    
        // Ajoute le lien à movieInfoDiv
        movieInfoDiv.appendChild(reviewLink);
    
        movieDiv.appendChild(movieImageDiv);
        movieDiv.appendChild(movieInfoDiv);
    
        moviesContainer.appendChild(movieDiv);
    });
}

dynamique(liste1, 'liste1');
dynamique(liste2, 'liste2');