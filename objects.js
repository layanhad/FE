const movieDatabase = {
    movies: [],
  
    addMovie: function(title) {
      if (typeof title !== 'string' || title.trim() === '') {
        return("Movie title must be a string.");
      }
      if (this.movies.some(movie => movie.title === title)) {
        return("Movie title already exists.");
      }
      const newMovie = {
        title: title.trim(),
        ratings: [],
        averageRating: 0,
      };

      this.movies.push(newMovie);
    },
  
    removeMovie: function(title) {
      if (typeof title !== 'string' || title.trim() === '') {
        return("Movie title must be a string.");
      }
      const index = this.movies.findIndex(movie => movie.title === title);
      if (index === -1) {
        return("Movie title does not exist.");
      }

      this.movies.splice(index, 1);
    },
  
    addRating: function(title, rating) {
      if (typeof rating !== 'number' || rating < 0 || rating > 10) {
        return("Rating must be a number between 0 and 10.");
      }
      const movie = this.movies.find(movie => movie.title === title);
      if (movie) {
        movie.ratings.push(rating);
        this.calculateAverageRating(title);
      }
      else{
        return("Movie title does not exist.");
      }
    },
  
    removeRating: function(title, rating) {
      const movie = this.movies.find(movie => movie.title === title);
      if (movie) {
        const index = movie.ratings.indexOf(rating);
        if (index !== -1) {
          movie.ratings.splice(index, 1);
          this.calculateAverageRating(title);
        } else {
          return("Movie rating does not exist.");
        }
      } else {
        return("Movie title does not exist.");
      }

    },
  
    calculateAverageRating: function(title) {
      const movie = this.movies.find(movie => movie.title === title);
      if (movie && movie.ratings.length > 0) {
        const total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
        movie.averageRating = total / movie.ratings.length;
      } else if (movie) {
        movie.averageRating = 0;
      }
    },
  
    searchMovie: function(str) {
      if(typeof str !== 'string'){
        return("Input must be a string")
      }
      return this.movies.filter(movie => movie.title.toLowerCase().includes(str.toLowerCase()));
    },
  
    sortMoviesByRating: function() {
      this.movies.sort((m1, m2) => {
        if (m2.averageRating !== m1.averageRating) {
          return m2.averageRating - m1.averageRating;
        }
        return m1.title.localeCompare(m2.title);
      });
    },
  
    sortMoviesByTitle: function() {
      this.movies.sort((m1, m2) => m1.title.localeCompare(m2.title));
    }
  };
  
   movieDatabase.addMovie("Inception");
   movieDatabase.addMovie("The Matrix");
   movieDatabase.addMovie("");
   movieDatabase.addMovie("Inception");
   movieDatabase.addRating("Inception", 5);
   movieDatabase.addRating("Inception", 4);
   console.log(movieDatabase.movies); 
   movieDatabase.addRating("The Matrix", 14);
   movieDatabase.removeMovie("Movie");
   movieDatabase.addMovie("Step Up");
   console.log(movieDatabase.movies); 
   movieDatabase.removeMovie("The Matrix");
   console.log(movieDatabase.movies); 
   movieDatabase.calculateAverageRating("Inception"); 
   console.log(movieDatabase.movies); 
  