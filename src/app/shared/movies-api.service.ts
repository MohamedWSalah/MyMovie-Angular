import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesAPIService {
  constructor(private http: HttpClient) {}

  getTopRatedMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=798d5d5d77f771954061c371c63dbaf6&page=1'
    );
  }

  getCurrentMoviePoster(url: String) {
    return `https://image.tmdb.org/t/p/original/${url}`;
  }
}

// .subscribe((data: any) => {
//   console.log(data);
//   this.movieList = data['results'];
//   console.log(this.movieList);
// });
