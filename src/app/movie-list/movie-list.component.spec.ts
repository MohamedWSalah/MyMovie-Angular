import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieListComponent } from './movie-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { of } from 'rxjs';
import { MoviesAPIService } from '../shared/movies-api.service';
import { By } from '@angular/platform-browser';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(() => {
    fakeMoviesAPI = jasmine.createSpyObj('MoviesAPIService', [
      'getTopRatedMovies',
    ]);

    fakeMoviesAPI.getTopRatedMovies.and.returnValue(
      of({
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: '/wPU78OPN4BYEgWYdXyg0phMee64.jpg',
            genre_ids: [18, 80],
            id: 278,
            original_language: 'en',
            original_title: 'The Shawshank Redemption',
            overview: '',
            popularity: 70.845,
            poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
            release_date: '1994-09-23',
            title: 'The Shawshank Redemption',
            video: false,
            vote_average: 8.7,
            vote_count: 21166,
          },
          {
            adult: false,
            backdrop_path: '/wPU78OPN4BYEgWYdXyg0phMee64.jpg',
            genre_ids: [18, 80],
            id: 278,
            original_language: 'en',
            original_title: 'The Shawshank Redemption',
            overview: '',
            popularity: 70.845,
            poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
            release_date: '1994-09-23',
            title: 'The Shawshank Redemption',
            video: false,
            vote_average: 8.7,
            vote_count: 21166,
          },
        ],
        total_pages: 493,
        total_results: 9848,
      })
    );
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [HttpClientTestingModule, MatPaginatorModule],
      providers: [{ provide: MoviesAPIService, useValue: fakeMoviesAPI }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  let fakeMoviesAPI: jasmine.SpyObj<MoviesAPIService>;

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should have movieList', async () => {
    expect(component.movieList).toBeTruthy();
    expect(component.movieList.length).toBe(2);
    expect(fixture.debugElement.queryAll(By.css('app-movie-box')).length).toBe(
      2
    );
  });

  // it('should render movie boxes', () => {
  //   let fixture = TestBed.createComponent(MovieListComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app.movieList.length).toBeGreaterThan(0);
  // });
});
