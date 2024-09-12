/*---------------------------- Impure Functions ----------------------------*/

// 1. Initialize Movie Ratings
    let movieRatings;

    function initializeRatings() {
         movieRatings = [];
    }

// 2. Add a Movie Rating
    function addRating(movieTitle, rating) {
        movieRatings.push([movieTitle, rating]);
    }

// 3. Find a Movie Rating
    function findRating(movieTitle) {
        const movie = movieRatings.find(movie => movie[0] === movieTitle);
        if (movie) {
            console.log(`Rating of ${movieTitle}: ${movie[1]}`);
        } else {
            console.log('Movie was not found');
        }
    }

// 4. Update a Movie Rating
    function updateRating(movieTitle, newRating) {
        const movie = movieRatings.find(movie => movie[0] === movieTitle);
        if (movie) {
            movie[1] = newRating;
            console.log(`Rating of ${movieTitle} updated to ${newRating}`);
        } else {
            console.log('Movie was not found');
        }
    }

// 5. Remove a Movie Rating
    function removeRating(movieTitle) {
        const index = movieRatings.findIndex(movie => movie[0] === movieTitle);
        if (index !== -1) {
            movieRatings.splice(index, 1);
            console.log(`${movieTitle} has been removed`);
        } else {
            console.log('Movie was not found');
        }
    }

// 6. List All Movies and Ratings
    function listMovies() {
        if (movieRatings.length === 0) {
            console.log('There are No Movies');
        } else {
            for (let movie of movieRatings){
                console.log(`${movie[0]} - ${movie[1]}`);
            }
        }
    }

// 7.Find Highest Rated Movie
    function highestRatedMovie() {
        if (movieRatings.length === 0) {
            console.log('There are No Movies');
            return;
        }
        let highestRated = movieRatings [0];
        for (let movie of movieRatings){
            if (movie[1] > highestRated[1]){
                highestRated = movie;
            }
        }
        console.log(`Highest Rated Movie: ${highestRated[0]} - ${highestRated[1]}`);
    }


console.log("Impure Functions");
initializeRatings();
addRating("The Godfather", 9.2);
addRating("The Dark Knight", 9.0);
addRating("StepUp 1", 9);
addRating("StepUp 2", 9.2);
addRating("StepUp 3", 9.4);
findRating("The Godfather");
updateRating("The Godfather", 9.5);
removeRating("The Dark Knight");
listMovies();
highestRatedMovie();



/*---------------------------- Pure Functions ----------------------------*/

// 1. Average Rating
    function calculateAverageRating(ratings) {
        let sum = 0;
        for (let i = 0; i < ratings.length; i++) {
            sum += ratings[i];
        }
        return Math.round(sum / ratings.length);
    }

// 2. Filter Movies by Rating
    function filterByRating(ratings, minRating) {
        return ratings.filter(rating => rating >= minRating);
    }

// 3. Find Highest Rated Movie
    function findHighestRating(ratings) {
        let highest = ratings[0];
        for (let rating of ratings){
            if (rating > highest){
                highest = rating;
            }
        }
        return highest;
    }

// 4. Ratings Above Threshold
    function ratingsAboveThreshold(ratings, threshold) {
        return ratings.filter(rating => rating > threshold);
    }

// 5. Count Movies in Rating Range
    function countInRatingRange(ratings, min, max) {
        let count = 0;
        for (let rating of ratings){
            if(rating >= min && rating <= max){
                count ++;
            }
        }
        return count;
    }

// 6. Filter Unique Ratings 
    function uniqueRatings(ratings) {
        let unique = [];
        for (let rating of ratings){
            if(!unique.includes(rating)){
                unique.push(rating);
            }
        }
        return unique;
    }

// 7. Merge Ratings
    function mergeRatings(ratings1, ratings2) {
        let merged = ratings1.concat(ratings2);
        return uniqueRatings(merged);
    }

// 8. Ratings Differential
    function ratingsDifferential(ratings1, ratings2) {
        const avg1 = calculateAverageRating(ratings1);
        const avg2 = calculateAverageRating(ratings2);
        return (avg1 - avg2);
    }


// 9. Filter Ratings by Multiple Criteria
    function filterRatingsByCriteria(ratings, greaterThan, lessThan) {
        return ratings.filter(rating => rating > greaterThan && rating < lessThan);
    }



console.log("Pure Functions");
console.log("Average Ratings: ",calculateAverageRating([3,4,5,3,5]));
console.log("Filtered Ratings: ",filterByRating([3,4,5,3,5],4));
console.log("Highest Rating: ",findHighestRating([3,4,5,3,5]));
console.log("Above Threshold Ratings: ",ratingsAboveThreshold([3,4,5,3,5],3));
console.log("Ratings Within Range: ",countInRatingRange([3,4,5,2,1,5],4,5));
console.log("Unique Ratings: ",uniqueRatings([5,3,4,3,5,4,5]));
console.log("Meged ratings: ",mergeRatings([5,3,4],[2,3,5]));
console.log("Average Diff: ",ratingsDifferential([4,4,4,4,5],[3,3,3,3]));
console.log("Filtered Ratings: ",filterRatingsByCriteria([1,2,3,4,5],2,5));


/*---------------------------- Bonus Exercises ----------------------------*/
