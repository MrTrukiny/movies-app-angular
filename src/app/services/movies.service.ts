import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '115c800a6bca44af6cc79df3b240f6af';
  language: string = 'en-US';
  region: string = 'US';

  constructor(private http: HttpClient) {}

  getNowPlaying(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  searchMovies(searchStr: string, page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getPopular(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getUpComingMovies(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/top_rated?api_key=${this.apiKey}`
    );
  }
}
