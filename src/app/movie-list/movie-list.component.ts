import { Component, OnInit } from '@angular/core';
import { MoviesAPIService } from '../shared/movies-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  constructor(private moviesAPI: MoviesAPIService) {}
  movieList = [];

  ngOnInit(): void {
    this.moviesAPI.getTopRatedMovies().subscribe((data: any) => {
      console.log(data);
      this.movieList = data['results'];
      console.log(this.movieList);
    });
  }

  printx() {
    console.log(this.movieList);
  }
}
