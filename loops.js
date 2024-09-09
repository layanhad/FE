// 1.Find the longest Movie Title
    const movieTitles = ["Inception", "The Dark Knight", "Interstellar"];
    let longestTitle = "";
    for (let title of movieTitles) {
        if (title.length > longestTitle.length) {
            longestTitle = title;
        }
    }
    console.log(`The longest movie title is: ${longestTitle}`);

// 2. Calculate the Average Rating
    movieRatings = [8.3, 7.5, 9.0, 8.7];
    let sum = 0;
    for (let rating of movieRatings) {
        sum += rating;
    }
    const average = sum / movieRatings.length;
    console.log(`The average rating is: ${average}`);

// 3. Reverse the Movie List
    let reversedList = [];
    for (let i = movieTitles.length - 1 ; i >= 0; i--) {
        reversedList.push(movieTitles[i]);
    }
    console.log("Reversed movie list:", reversedList);

// 4. Increase Movie Ratings
    let updatedRatings = [];
    for (let i = 0; i < movieRatings.length; i++) {
        updatedRatings.push(movieRatings[i] + 0.5);
    }
    console.log("Updated ratings:", updatedRatings);

// 5. Filter Movies by High Ratings
    let highRatings = [];
    for (let i = 0; i < movieRatings.length; i++) {
        if (movieRatings[i] > 8.0) {
            highRatings.push(movieRatings[i]);
        }
    }
    console.log("Ratings over 8.0:", highRatings);

// 6. Count a Specific Rating's Occurrence
    movieRatings = [8.3, 8.7, 9.0, 8.7, 8.3];
    specificRating = 8.7;
    let count = 0;
    for (let i = 0; i < movieRatings.length; i++) {
        if (movieRatings[i] === specificRating) {
            count++;
        }
    }
    console.log(`The rating ${specificRating} appears ${count} times.`);

// 7. Find Movies in Both Watched and Wish Lists
    watchedList = ["Inception", "The Dark Knight"]
    wishList = ["Interstellar","Inception"]
    let commonMovies = [];
    for (let i = 0; i < watchedList.length; i++) {
        for (let j = 0; j < wishList.length; j++) {
            if (watchedList[i] === wishList[j]) {
                commonMovies.push(watchedList[i]);
            }
        }
    }
    console.log("Movies in both lists:", commonMovies);

// 8. Check Ratings Against a Threshold
    movieRatings = [8.3, 7.5, 9.0, 8.7];
    minRating = 8.0;
    let allAboveThreshold = true;
    for (let i = 0; i < movieRatings.length; i++) {
        if (movieRatings[i] <= minRating) {
            allAboveThreshold = false;
            break;
        }
    }
    console.log(`All ratings above ${minRating}: ${allAboveThreshold}`);

// 9 & 10. Identify the Maximum/Highest Rating 
    let maxRating = movieRatings[0];
    for (let i = 1; i < movieRatings.length; i++) {
        if (movieRatings[i] > maxRating) {
            maxRating = movieRatings[i];
        }
    }
    console.log(`The highest rating is: ${maxRating}`);