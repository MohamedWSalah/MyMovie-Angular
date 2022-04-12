import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MoviesAPIService } from 'src/app/shared/movies-api.service';

@Component({
  selector: 'app-movie-box',
  templateUrl: './movie-box.component.html',
  styleUrls: ['./movie-box.component.scss'],
})
export class MovieBoxComponent implements OnInit {
  @Input() movie: any;
  constructor(public moviesAPI: MoviesAPIService) {}

  imageLoaded: boolean = false;

  readMoreEnabled: boolean = true;

  @ViewChild('readMoreField', { static: false }) readMoreField: any;
  @ViewChild('spinner', { static: false }) spinner: any;

  ngOnInit(): void {}

  onImageLoad() {
    this.imageLoaded = true;
  }

  readMore() {
    this.readMoreEnabled = !this.readMoreEnabled;
    this.readMoreEnabled
      ? (this.readMoreField.nativeElement.innerHTML = '... Read More')
      : (this.readMoreField.nativeElement.innerHTML = 'Read Less');
  }
}
