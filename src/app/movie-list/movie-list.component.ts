import { Component, OnInit, SimpleChange } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MoviesAPIService } from '../shared/movies-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  constructor(private moviesAPI: MoviesAPIService) {}

  movieList = [];
  page = 1;
  totalPages = 0;
  totalItems = 0;

  fetchMovies(page: number) {
    this.moviesAPI.getTopRatedMovies(page).subscribe((data: any) => {
      console.log(data);
      this.totalPages = data.total_pages;
      this.totalItems = data.total_results;
      this.movieList = data['results'];
      console.log(this.movieList);
    });
  }

  ngOnInit(): void {
    this.fetchMovies(this.page);
  }

  ngAfterViewChecked() {
    const list = document.getElementsByClassName('mat-paginator-range-label');
    list[0].innerHTML =
      'Page: ' + this.page.toString() + ' of ' + this.totalPages.toString();
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.page = event.pageIndex + 1;
    this.fetchMovies(this.page);
    window.scrollTo(0, 0);
  }

  printx() {
    console.log('HERE');
  }
}
