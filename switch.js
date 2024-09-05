// 1. Movie Screening Days
    switch (dayOfWeek) {
        case 1:
            console.log( "Sunday Premiere")
        case 2:
            console.log( "Monday Matinee")
        case 3:
            console.log( "Tuesday Discount")
        case 4:
            console.log( "Wednesday Fan Night")
        case 5:
            console.log( "Thursday Preview")
        case 6:
            console.log( "Friday Blockbuster")
        case 7:
            console.log( "Saturday Marathon")
        default:
            console.log( "Invalid day")
    }


// 2. Movie Theme Color Setting
    switch (themeColor) {
        case 'light':
            console.log( "#F5F5F5")
        case 'dark':
            console.log( "#1A1A1A")
        case 'night':
            console.log( "#000033")
        default:
            console.log( "#FFFFFF")
    }


// 3. Notification Status for Movie Releases
    switch (notificationStatus) {
        case 'new':
            console.log( "You have new movie notifications!")
        case 'unread':
            console.log( "You have unread movie notifications.")
        case 'unopened':
            console.log( "You have unopened movie notifications.")
        case 'read':
        default:
            console.log( "No new notifications.")
    }


// 4. Movie Rating Classification
    switch (movieRating) {
        case 'G':
            console.log("General Audience");
            break;
        case 'PG':
            console.log("Parental Guidance Suggested");
            break;
        case 'PG-13':
            console.log("Parents Strongly Cautioned");
            break;
        case 'R':
            console.log("Restricted");
            break;
        case 'NC-17':
            console.log("Adults Only");
            break;
        default:
            console.log("Not Rated");
    }


// 5. Audience Score Ranges
    if (audienceScore >= 90) {
        console.log("Must Watch!");
    } else if (audienceScore >= 75 && audienceScore <= 89) {
        console.log("Recommended");
    } else if (audienceScore >= 60 && audienceScore <= 74) {
        console.log("Mixed Reviews");
    } else {
        console.log("Skip It");
    }


// 6. User Input Handling
    switch (typeof userInput) {
        case 'string':
            console.log( "The type of the input is string.")
        case 'number':
             console.log( "The type of the input is number.")
        case 'boolean':
            console.log( "The type of the input is boolean.")
        default:
            console.log( "The type of the input is Unknown.")
    }


// 7. Movie Release Quarter
    switch (releaseMonth) {
        case 1:
        case 2:
        case 3:
            console.log( "Q1")
        case 4:
        case 5:
        case 6:
            console.log( "Q2")
        case 7:
        case 8:
        case 9:
            console.log( "Q3")
        case 10:
        case 11:
        case 12:
            console.log( "Q4")
        default:
            console.log( "Invalid month")
    }
