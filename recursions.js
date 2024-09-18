// 1.  Count Movies Watched
    function countMoviesWatched(movies){
        if(movies.length === 0) return 0;
        return 1 + countMoviesWatched(movies.slice(1));
    }

   const movies = ['Inception', 'The Matrix', 'Interstellar'];
    console.log("Count Movies Watched :",countMoviesWatched(movies)); 

// 2. Find Movie by Title
    function findMoviebyTitle(movies, title) {
        if (movies.length === 0) return false;
        if (Array.isArray(movies[0])) { 
            return findMoviebyTitle(movies[0], title) || findMoviebyTitle(movies.slice(1), title);
        }
        return movies[0] === title || findMoviebyTitle(movies.slice(1), title);
        }

    const nestedMovies = [['Inception', 'The Matrix'], ['Interstellar', 'Dunkirk']];
    console.log("Find Movie by Title :",findMoviebyTitle(nestedMovies, 'Inception'));

// 3. Total Movie Duration
    function totalMovieDuration(durations) {
        if (durations.length === 0) return 0;
        return durations[0] + totalMovieDuration(durations.slice(1));
    }

    const durations = [120, 150, 180]
    console.log("Total Movie Duration :",totalMovieDuration(durations));

// 4. Find Longest Movie
    function findLongestMovie(durations) {
        if (durations.length === 1) return durations[0];
        return Math.max(durations[0],findLongestMovie(durations.slice(1)));
    }

    console.log("Find Longest Movie :",findLongestMovie(durations));

// 5. Calculate Average Movie Rating
    function calculateAverageMovieRating(ratings){
        return helperAverageRating(ratings,0,0);
    }

    function helperAverageRating(ratings,index,sum){
        if (index === ratings.length) {
            return ratings.length === 0 ? 0 : sum / ratings.length;
        }
        return helperAverageRating(ratings, index+1, sum + ratings[index]);
    }

    const ratings =  [4.5, 4.0, 5.0];
    console.log("Calculate Average Movie Rating :",calculateAverageMovieRating(ratings));

// 6. List All Genres
    function listAllGenres(genres){
        if (genres.length === 0)  return [];
        if (Array.isArray(genres[0])) {
            return [...new Set([...genres[0], ...listAllGenres(genres.slice(1))])];
        }
        return [...new Set([genres[0], ...listAllGenres(genres.slice(1))])];
    }

    const genres = [['Action', 'Thriller'], ['Drama', 'Action'], ['Sci-Fi']];
    console.log("List All Genres :",listAllGenres(genres));

// 7. Find Movies by Director
    function findMoviesByDirector(movies, director) {
        if (movies.length === 0) return [];
        const currentMovie = movies[0];
        const result = currentMovie.director === director ? [currentMovie.title] : [];
        return result.concat(findMoviesByDirector(movies.slice(1), director));
    }

    const moviesWithDirectors = [{title: 'Inception', director: 'Nolan'}, {title: 'The Matrix', director: 'Wachowski'}, {title: 'Dunkirk', director:'Nolan'}];
    console.log("Find Movies by Director :",findMoviesByDirector(moviesWithDirectors,'Nolan'));

// 8. Calculate Total Box Office Earnings
    function totalBoxOfficeEarnings(movies) {
        if (movies.length === 0) return 0;
        return movies[0].earnings + totalBoxOfficeEarnings(movies.slice(1));
    }

    const moviesWithEarnings = [{title: 'Inception', earnings: 800}, {title: 'The Matrix', earnings: 700}];
    console.log("Calculate Total Box Office Earnings :",totalBoxOfficeEarnings(moviesWithEarnings));

// 9. Find Movie with Highest Rating
    function findHighestRatedMovie(movies) {
        if (movies.length === 1) return movies[0].title;
        return movies[0].rating > movies.slice(1)[0].rating ? movies[0].title : findHighestRatedMovie(movies.slice(1));
    }

    const moviesWithRatings =  [{title: 'Inception', rating: 4.5}, {title: 'The Matrix', rating: 4.0}];
    console.log("Find Movie with Highest Rating :",findHighestRatedMovie(moviesWithRatings));

// 10. Count Movies by Genre
    function countMoviesByGenre(movies, genre) {
        if (movies.length === 0) return 0;
        return (movies[0].genre === genre ? 1 : 0) + countMoviesByGenre(movies.slice(1), genre);
    }

    const moviesWithGenre =  [{title: 'Inception', genre: 'Sci-Fi'}, {title: 'The Matrix', genre: 'Sci-Fi'}, {title: 'Titanic', genre:'Drama'}];
    console.log("Count Movies by Genre :",countMoviesByGenre(moviesWithGenre,'Sci-Fi'));

// 11. Find Shortest Movie Title
    function findShortestMovieTitle(titles) {
        if (titles.length === 1) return titles[0];
        return titles[0].length < findShortestMovieTitle(titles.slice(1)).length ? titles[0] : findShortestMovieTitle(titles.slice(1));    }

    const titles =  ['Inception', 'The Matrix', 'Up'];
    console.log("Find Shortest Movie Title :",findShortestMovieTitle(titles));

// 12. Filter Movies by Minimum Rating
    function filterMoviesByRating(movies, minRating) {
        if (movies.length === 0) return [];
        const filtered = movies[0].rating >= minRating ? [movies[0]] : [];
        return filtered.concat(filterMoviesByRating(movies.slice(1), minRating));
    }

    console.log("Filter Movies by Minimum Rating :",filterMoviesByRating(moviesWithRatings,4.5));

// 13. Find Director with Most Movies
    function findDirectorWithMostMovies(movies) {
        if (movies.length === 1) return movies[0].director;
        return helperDirectorCountMovies(movies, movies[0].director) > helperDirectorCountMovies(movies, findDirectorWithMostMovies(movies.slice(1))) 
        ? movies[0].director : findDirectorWithMostMovies(movies.slice(1));
    }

    function helperDirectorCountMovies(movies, director){
        if (movies.length === 0) return 0;
        return (movies[0].director === director ? 1 : 0) + helperDirectorCountMovies(movies.slice(1), director);
    }

    console.log("Find Director with Most Movies: ",findDirectorWithMostMovies(moviesWithDirectors));


// 14. Flatten Movie Lists
    function flattenMovieLists(movieLists) {
        if (movieLists.length === 0) return [];
        const first = Array.isArray(movieLists[0]) ? flattenMovieLists(movieLists[0]) : [movieLists[0]];
        return first.concat(flattenMovieLists(movieLists.slice(1)));
    }

    const movieLists = [['Inception', 'The Matrix'], ['Interstellar',['Dunkirk']]];
    console.log("Flatten Movie Lists  :",flattenMovieLists(movieLists));
    
// 15. Merge Movie Ratings
    function mergeMovieRatings(ratingLists) {
        if (ratingLists.length === 0) return [];
        const first = Array.isArray(ratingLists[0]) ? mergeMovieRatings(ratingLists[0]) : [ratingLists[0]];
        return first.concat(mergeMovieRatings(ratingLists.slice(1))).sort((a, b) => a - b);
    }

    const ratingLists =  [[4.5, 4.0], [5.0, 3.5]];
    console.log("Merge Movie Ratings :",mergeMovieRatings(ratingLists));

// 16. Sum Movie Budgets
    function sumMovieBudgets(movies) {
        if (movies.length === 0) return 0;
        return movies[0].budget + sumMovieBudgets(movies.slice(1));
    }

    const moviesWithBudgets = [{title: 'Inception', budget: 160}, {title: 'The Matrix',budget: 150}];
    console.log("Sum Movie Budgets :",sumMovieBudgets(moviesWithBudgets));

// 17. Find Actor in Movies
    function findActorInMovies(movies, actor) {
        if (movies.length === 0) return false;
        return movies[0].actors.includes(actor) || findActorInMovies(movies.slice(1), actor);
    }

    const moviesWithActors = [{title: 'Inception', actors: ['Leonardo DiCaprio']},{title: 'The Matrix', actors: ['Keanu Reeves']}];
    console.log("Find Actor in Movies :",findActorInMovies(moviesWithActors,'Leonardo DiCaprio'));

// 18. Check if All Movies are Rated Above
    function areAllMoviesRatedAbove(movies, minRating) {
        if (movies.length === 0) return true;
        return movies[0].rating > minRating && areAllMoviesRatedAbove(movies.slice(1), minRating);
    }

    console.log("Check if All Movies are Rated Above :",areAllMoviesRatedAbove(moviesWithRatings,4.0));