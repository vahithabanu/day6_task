class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getMoviesByRating(movies,rating){
        return movies.filter(movie=>movie.rating===rating);

    }
}

const movies=[];
movies.push(
    new Movie('leo','Seven Screen Studio','PG'),
    new Movie('master','XB Film Creators','A'),
    new Movie('lalsalam','Lyca Productions','PG'),
   
);
let Movie1=new Movie('name','studio','A');
console.log(Movie1.getMoviesByRating(movies,'PG'));