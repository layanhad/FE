// 1. Group Movies by Genre
    function groupMoviesByGenre(movies) {
        const groupedMovies = {};
    
        for (let movie of movies) {
        if (!groupedMovies[movie.genre]) {
            groupedMovies[movie.genre] = [];
        }
        groupedMovies[movie.genre].push(movie);
        }
    
        return groupedMovies;
    }
  
    const movies = [{title: "Inception", genre: "Action"},{title: "The Dark Knight", genre: "Action"},{title: "A Beautiful Mind", genre: "Drama"}];
    console.log("groupMoviesByGenre: ", groupMoviesByGenre(movies));

// 2. Find Top Rated Movie for Each Genre
    function topRatedMovieByGenre(movies){
        let topRatedMovies = {};
        for (let movie of movies) {
            if (!topRatedMovies[movie.genre]) {
            topRatedMovies[movie.genre] = movie;
            }
            else if (movie.rating > topRatedMovies[movie.genre].rating){
                topRatedMovies[movie.genre] = movie;
            }
        }
        return topRatedMovies;
    }

    const moviesWithRatings = [{title: "Inception", genre: "Action",rating: 8.8},{title: "The Dark Knight", genre: "Action",rating: 9.0},{title: "A Beautiful Mind", genre: "Drama",rating: 8.2}];
    console.log("topRatedMovieByGenre :",topRatedMovieByGenre(moviesWithRatings));

// 3. Count Movies by Genre
    function countMoviesByGenre(movies){
        let countMovies = {};
        for (let movie of movies) {
            if(!countMovies[movie.genre]){
                countMovies[movie.genre] = 1;
            }
            else {
                countMovies[movie.genre] ++;
            }
        }
        return countMovies;
    }

    console.log("countMovies :",countMoviesByGenre(movies) );

// 4. Genre Presence Across Years
    function genrePresenceAcrossYears(movies,genre){
        let genrePresencYears = {};
        for (let movie of movies) {
            if(movie.genre === genre)
                if(!genrePresencYears[movie.year]){
                    genrePresencYears[movie.year] = 1;
                } else{
                    genrePresencYears[movie.year] ++;
                }
            }
        return genrePresencYears;
    }

    const moviesWithYears = [{title: "Inception", genre: "Action",year: 2010},{title: "The Dark Knight", genre: "Action",year: 2008},{title: "A Beautiful Mind", genre: "Drama",year: 2001}];
    console.log("genrePresencYears :", genrePresenceAcrossYears(moviesWithYears,"Action"));

//  5. Movie with Rathing within Range
    function moviesWithRRatingWithinRange(movies,min,max){
        let moviesWithinRange = [];
        for (const movie of movies) { 
            if(movie.rating >= min && movie.rating <= max){
                moviesWithinRange.push(movie.title);
            }
        }
        return moviesWithinRange;
    }

    const moviesWithOutGenre = [{title: "Inception", rating: 8.8},{title: "The Dark Knight", rating: 9.0},{title: "A Beautiful Mind", rating: 8.2}];
    console.log("moviesWithRRatingWithinRange :",moviesWithRRatingWithinRange(moviesWithOutGenre,8.5,9.0));

