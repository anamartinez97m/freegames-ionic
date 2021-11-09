import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gameListFromApi: any;
  url = 'https://www.freetogame.com/api/games';

  constructor(private http: HttpClient) { }

  getGameListFromAPI(): Observable<any> {
    return this.http.get<any>(this.url)
      .pipe(
        map((data: any) => this.gameListFromApi = data)
      );
  }
}
