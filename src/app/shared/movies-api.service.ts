import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesAPIService {
  constructor(private http: HttpClient) {}

  //calls top rated movies api (retreives a list of top rated movies)
  getTopRatedMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=798d5d5d77f771954061c371c63dbaf6&page=1'
    );
  }

  //calls image api for different movie images
  getCurrentMoviePoster(url: string) {
    return `https://image.tmdb.org/t/p/original/${url}`;
  }

  getMovieDetailsByID(movieID: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=798d5d5d77f771954061c371c63dbaf6`
    );
  }

  getCountryFlag(country: string) {
    return this.http.get(`https://countryflagsapi.com/png/${country}`);
  }
}

// .subscribe((data: any) => {
//   console.log(data);
//   this.movieList = data['results'];
//   console.log(this.movieList);
// });
