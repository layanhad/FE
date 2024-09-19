function Movie(title, duration, ticketPrice) {
    return {
        title,
        duration,
        ticketPrice,
        seatsBooked: 0,

        getInfo: function() {
            return `${this.title} (${this.duration} mins) - $${this.ticketPrice}`;
        },

        calculateRevenue: function(seatsBooked) {
            return seatsBooked * this.ticketPrice;
        },

        updateTicketPrice: function(newPrice) {
            this.ticketPrice = newPrice;
        },

        applySeasonalPricing: function(multiplier) {
            this.ticketPrice *= multiplier;
        },

        bookSeats: function(numberOfSeats) {
            this.seatsBooked += numberOfSeats;
        }
    };
}

function Seat(number, row) {
    return {
        number,
        row,
        status: 'available',

        isOccupied: function() {
            return this.status === 'booked';
        },

        book: function() {
            this.status = 'booked';
        },

        changeSeatStatus: function(status) {
            if (status !== 'booked' && status !== 'available') {
                return("Invalid seat status");
            }
            this.status = status;
        }
    };
}

function RevenueCalculator() {
    return {
        movies: [],

        calculateTotalRevenue: function() {
            return this.movies.reduce((total, movie) => total + movie.calculateRevenue(movie.seatsBooked), 0);
        },

        calculateMovieRevenue: function(movieTitle) {
            const movie = this.movies.find(movie => movie.title === movieTitle);
            return movie ? movie.calculateRevenue(movie.seatsBooked) : 0;
        },

        addMovieRevenue: function(movie) {
            this.movies.push(movie);
        },

        calculateAverageRevenuePerMovie: function() {
            return this.movies.length ? this.calculateTotalRevenue() / this.movies.length : 0;
        }
    };
}

const MovieTheater = {
  
    movies: [],
    numberOfSeats: 0,
    seats: [],

    addMovie: function(movie) {
        this.movies.push(movie);
    },

    removeMovie: function(movieTitle) {
        this.movies = this.movies.filter(movie => movie.title !== movieTitle);
    },

    bookSeat: function(seatNumber, movieTitle) {
        if (seatNumber <= this.numberOfSeats && !this.seats[seatNumber].isOccupied()) {
            this.seats[seatNumber].book();
            const movie = this.findMovieByTitle(movieTitle);
            if (movie) {
                movie.bookSeats(1);
            }
            return true;
        }
        return false;
    },

    calculateRevenue: function() {
        return this.movies.reduce((total, movie) => total + movie.calculateRevenue(movie.seatsBooked), 0);
    },

    listMovies: function() {
        return this.movies.map(movie => movie.getInfo());
    },

    findMovieByTitle: function(title) {
        return this.movies.find(movie => movie.title === title);
    },

    findMostPopularMovie: function() {
        return this.movies.reduce((max, movie) => (movie.seatsBooked > max.seatsBooked ? movie : max), this.movies[0]);
    },

    getAvailableSeatsByRow: function(row) {
        return this.seats.filter(seat => seat.row === row && !seat.isOccupied());
    }
};

