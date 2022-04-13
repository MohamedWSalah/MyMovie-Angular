import { TestBed } from '@angular/core/testing';

import { MoviesAPIService } from './movies-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoviesAPIService', () => {
  let service: MoviesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [MoviesAPIService],
    });
    service = TestBed.inject(MoviesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
