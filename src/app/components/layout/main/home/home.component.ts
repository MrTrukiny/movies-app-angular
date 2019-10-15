import { Component, OnInit } from '@angular/core';
// import { MoviesService } from '../../../../services/movies.service';

import { Movie } from '../../../../models/movie.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingList: Movie[];

  constructor() {
    // this.moviesService.getUpComingMovies(1).subscribe(res => {
    //   this.trendingList = res.data;
    // });
  }

  ngOnInit() {}
}
