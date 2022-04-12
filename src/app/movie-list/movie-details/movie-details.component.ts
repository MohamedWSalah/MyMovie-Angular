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

  ngOnInit(): void {
    this.moviesAPI.getMovieDetailsByID(this.movieID).subscribe((data: any) => {
      this.movieDetails = data;
      console.log(this.movieDetails, 'SADSA');
    });
  }

  test() {
    console.log(
      this.moviesAPI.getCountryFlag(
        this.movieDetails.production_countries.iso_3166_1
      )
    );
  }
}
