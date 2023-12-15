function searchMovie() {
    const apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your actual API key from OMDB API
    const movieTitle = document.getElementById('movieInput').value;

    if (movieTitle.trim() === '') {
        alert('Please enter a movie title.');
        return;
    }

    const apiUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=2aa9a1a2'

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayMovieDetails(data))
        .catch(error => console.error('Error fetching movie details:', error));
}

function displayMovieDetails(movieData) {
    const movieDetails = document.getElementById('movieDetails');

    if (movieData.Response === 'True') {
        movieDetails.innerHTML = `
            <h2>${movieData.Title}</h2>
            <p><strong>Year:</strong> ${movieData.Year}</p>
            <p><strong>Genre:</strong> ${movieData.Genre}</p>
            <p><strong>Director:</strong> ${movieData.Director}</p>
            <p><strong>Plot:</strong> ${movieData.Plot}</p>
            <p><strong>IMDB Rating:</strong> ${movieData.imdbRating}</p>
            <img src="${movieData.Poster}" alt="Movie Poster">
        `;
    } else {
        movieDetails.innerHTML = `<p>${movieData.Error}</p>`;
    }
}
