// 1. Movie Rating Check
    if (movieRating > 7) {
        console.log("Highly rated movie")
    } else {
         console.log("This movie has room for improvement")
    }


// 2. Movie Budget Range Check
    if (movieBudget >= 1000000 && movieBudget <= 100000000) {
        console.log("Big-budget movie")
    } else {
        console.log("Indie movie")
    }


// 3. Nested If-Else for Movie Genre and Audience
    if (movieGenre === "Horror") {
        if (audienceAge >= 18) {
            console.log("Suitable for the audience")
        } else {
            console.log("Not suitable for the audience")
        }
    } else {
            console.log("Suitable for all audience")
    }


// 4. Comparing Movie Duration
    if (firstMovieDuration === secondMovieDuration) {
        console.log( "Movies have the same duration")
    } else if (firstMovieDuration > secondMovieDuration) {
        console.log( "The first movie is longer")
    } else {
        console.log( "The second movie is longer")
    }


// 5. Check Viewer Age for Movie Content
    if (viewerAge >= 13 && viewerAge <= 18) {
        console.log("Suitable for teens")
    } else if (viewerAge > 18) {
        console.log("Suitable for adults")
    } else {
        console.log("Suitable for kids")
    }


// 6. Movie Popularity Score Evaluation
    if (popularityScore >= 80) {
        console.log("Popular movie")
    } else {
        console.log("Less known movie")
    }


// 7. Check Number of Awards 
    if (numOfAwards % 2 === 0) {
        console.log("Even number of awards")
    } else {
        console.log("Odd number of awards")
    }


// 8. Actor Age Group Classification
    if (actorAge < 14) {
        console.log("Child Actor")
    } else if (actorAge < 25) {
        console.log("Young Actor")
    } else {
        console.log("Adult Actor")
    }


// 9. Access Control to a Premiere Event
    if (hasInvitation) {
        console.log("Welcome to the premiere")
    } else {
        console.log("Please check your invitation")
    }


// 10. Movie Screening Duration Category
    if (screeningDuration < 40) {
        console.log("Short film")
    } else if (screeningDuration <= 120) {
        console.log("Feature film")
    } else {
        console.log("Epic length movie")
    }


// 11. Special Movie Screening on Weekends
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        console.log("Special screening event!")
    } else {
        console.log("Regular movie showtimes")
    }


// 12. Check Movie Release Year
    if (releaseYear >= 2001 && releaseYear <= 2100) {
        console.log("21st century movie")
    } else {
        console.log("20th century movie")
    }


// 13. Check Movie Genre and Rating
    if (movieGenre === "Action" && movieRating >= 7) {
        console.log("Must Watch")
    } else {
        console.log("Check reviews before watching")
    }


// 14. Evaluate Movie Ticket Price
    if (ticketPrice < 10) {
        console.log("Discounted ticket")
    } else {
        console.log("Regular ticket price")
    }


// 15. Check Movie Age Restriction
    if (age >= 18 || !isAdult) {
        console.log("Allowed to watch")
    } else {
        console.log("Age-restricted content")
    }

// 16. Determine if Movie is a Sequel
    if (movieTitle.includes("2") || movieTitle.includes("part")) {
        console.log("This movie is a sequel")
    } else {
        console.log("This movie is not a sequel")
    }


