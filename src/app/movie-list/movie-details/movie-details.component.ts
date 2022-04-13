import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesAPIService } from 'src/app/shared/movies-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public moviesAPI: MoviesAPIService
  ) {}

  movieID = this.route.snapshot.params['id'];
  movieDetails: any = {};

  imageLoaded: boolean = false;

  ngOnInit(): void {
    this.moviesAPI.getMovieDetailsByID(this.movieID).subscribe((data: any) => {
      this.movieDetails = data;
    });
  }

  onImageLoad() {
    this.imageLoaded = true;
  }
}
