import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment  } from '../../environments/environment';
import { APIResponse, Movie } from '../models';


@Injectable({

  providedIn: 'root'
})

export class HttpService {
 
  constructor(private http: HttpClient) { }

  getMovieList(): Observable<APIResponse<Movie>> {
    
    const movieListReguest = this.http.get<APIResponse<Movie>>(`${environment.BASE_URL}/discover/movie?${environment.API_KEY}`)
    
    return movieListReguest
    
  }

  
  getMovieDetails(id: string): Observable<any> {
    
    const movieInfoRequest = this.http.get(`${environment.BASE_URL}/movie/${id}?${environment.API_KEY}`)

    return movieInfoRequest
      
  }

}


