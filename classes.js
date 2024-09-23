// Exercise 1: The Media Superclass
class Media {
    #title;
    #duration;
    #ratings;
  
    constructor(title, duration) {
      this.#title = title;
      this.#duration = duration;
      this.#ratings = [];
    }
  
    getTitle() {
      return this.#title;
    }
  
    getDuration() {
      return this.#duration;
    }
  
    addRating(rating) {
      this.#ratings.push(rating);
    }
  
    #getAverageRating() {
      if (this.#ratings.length === 0) {
        return "No ratings yet.";
      }
      const sum = this.#ratings.reduce((a, b) => a + b, 0);
      return sum / this.#ratings.length;
    }
  
    displayDetails() {
      return `Title: ${this.getTitle()}, Duration: ${this.getDuration()}, Average Rating: ${this.#getAverageRating()}`;
    }
  }
  
  // Exercise 2: The Movie and Series Subclasses
  class Movie extends Media {
    #director;
    #genre;
  
    constructor(title, duration, director, genre) {
      super(title, duration);
      this.#director = director;
      this.#genre = genre;
    }
  
    getDirector() {
      return this.#director;
    }
  
    getGenre() {
      return this.#genre;
    }
  
    displayDetails() {
      return `${super.displayDetails()}, Director: ${this.getDirector()}, Genre: ${this.getGenre()}`;
    }
  }
  
  class Series extends Media {
    #seasons;
  
    constructor(title, duration, seasons) {
      super(title, duration);
      this.#seasons = seasons;
    }
  
    getSeasons() {
      return this.#seasons;
    }
  
    displayDetails() {
      return `${super.displayDetails()}, Seasons: ${this.getSeasons()}`;
    }
  }
  
  // Exercise 3: The User Class
  class User {
    #username;
    #watchedMedia;
  
    constructor(username) {
      this.#username = username;
      this.#watchedMedia = [];
    }
  
    getUsername() {
      return this.#username;
    }
  
    addMedia(media) {
      this.#watchedMedia.push(media);
    }
  
    rateMedia(media, rating) {
      if (this.#watchedMedia.includes(media)) {
        media.addRating(rating);
        return `You rated ${media.getTitle()} with ${rating} stars.`;
      } else {
        return "You can only rate watched media.";
      }
    }
  
    displayWatchedMedia() {
      let result = `${this.getUsername()}'s watched media:\n`;
      this.#watchedMedia.forEach(media => {
        result += media.displayDetails() + "\n";
      });
      return result;
    }
  }
  
  const movie1 = new Movie("Inception", "2h 28min", "Christopher Nolan", "Sci-Fi");

  const series1 = new Series("Breaking Bad", "5 seasons", 5);
  
  const user1 = new User("user1");
  user1.addMedia(movie1);
  user1.addMedia(series1);
  
  console.log(user1.rateMedia(movie1, 5));
  console.log(user1.rateMedia(series1, 4));
  
  console.log(user1.displayWatchedMedia());