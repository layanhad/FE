// 1. Check if a Movie is in the Library
    const movieLibrary = ["Inception", "The Matrix", "Interstellar"];
    const movieToCheck = "Inception";

    if (movieLibrary.includes(movieToCheck)) {
        console.log(`${movieToCheck} exists in the movie library.`);
    } else {
        console.log(`${movieToCheck} is not in the movie library.`);
    }

// 2. Reverse Movie Release Order
    const releaseDates = ["1999", "2010", "2014"];
    const reversedDates = releaseDates.reverse();
    console.log("Release dates in reverse order:", reversedDates);

// 3. Create a String of Movie Genres
    const movieGenres = ["Sci-Fi", "Action", "Adventure"];
    const movieGenresString = movieGenres.join(", ");
    console.log("Movie genres:", movieGenresString);

// 4. Check for a Specific Genre
    const genreToCheck = "Action";
    if (movieGenres.includes(genreToCheck)) {
        console.log(`${genreToCheck} is in the movie genres.`);
    } else {
        console.log(`${genreToCheck} is not in the movie genres.`);
    }

// 5. Find Index of a Specific Movie
    const movieTitles =  ["Inception", "The Matrix", "Interstellar"];
    const specificMovie = "Interstellar";
    const index = movieTitles.indexOf(specificMovie);
    if (index !== -1) {
        console.log(`${specificMovie} found at index ${index}.`);
    } else {
        console.log(`${specificMovie} not found.`);
    }

// 6. Remove the Last Movie
    const upcomingReleases = ["Avatar", "Dune", "Tenet"];
    upcomingReleases.pop();
    console.log("Updated upcoming releases:", upcomingReleases);

// 7. Insert a Movie at the Beginning
    const classicMovies = ["The Godfather", "Citizen Kane"];
    const newMovie = "Casablanca";
    classicMovies.unshift(newMovie);
    console.log("Updated classic movies:", classicMovies);

// 8. Remove First Movie and Log It
    const filmNoir = ["The Maltese Falcon", "Touch of Evil", "Double Indemnity"];
    const removedMovie = filmNoir.shift(0);
    console.log("Removed movie:", removedMovie);

// 9. Concatenate Two Arrays of Movie Titles
    const actionMovies = ["Die Hard", "John Wick"];
    const comedyMovies = ["Superbad", "The Hangover"];
    const allMovies = actionMovies.concat(comedyMovies);
    console.log("All movies:", allMovies);

// 10. Sort Movies Alphabetically
    const sortedMovieTitles = movieTitles.sort();
    console.log("Sorted movies:", sortedMovieTitles);

// 11. Create Array from Movie Quotes
    const quotesString = "I'll be back,May the Force be with you,To infinity and beyond";
    const quotesArray = quotesString.split(",");
    console.log("Movie quotes array:", quotesArray);

// 12. Slice Array to Get Top Rated Movies
    const topMovies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];
    const n = 2;
    const topNMovies = topMovies.slice(0, n);
    console.log(`Top ${n} movies:`, topNMovies);

// 13. Empty the MovieWishlist 
    const movieWishlist = ["The Matrix 4", "Avatar 2", "Dune"];
    while(movieWishlist.length > 0){
        movieWishlist.pop();
    }
    console.log("Emptied wishlist:", movieWishlist);

// 14. Add a New Movie
    const movies = ["Inception", "Interstellar"];
    const new_Movie = "Tenet";
    movies.push(new_Movie);
    console.log("Updated movie list:", movies);

// 15. Remove the First Movie
    console.log("removied movie: ", movies.slice(0));

// 16. Create a String of Movie Titles
    const movieTitlesString = movies.join(", ");
    console.log("Movie titles:", movieTitlesString);

// 17. Find Index of a Specific Movie
    const movieToFind = "Interstellar";
    const indexx = movies.indexOf(movieToFind);
    if (indexx !== -1) {
        console.log(`${movieToFind} found at index ${indexx}.`);
    } else {
        console.log(`${movieToFind} not found.`);
    }

// 18. Reverse Order of Movies
    const reversedMovies = movies.reverse();
    console.log("Reversed movie order:", reversedMovies);

// 19. Sort Movies Release Years
    releaseYears = [2001, 2023, 1998, 2014];
    console.log("Sorted realeased years: ", releaseYears.sort());