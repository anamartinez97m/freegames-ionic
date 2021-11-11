import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gameListFromApi: any;
  isLoading = true;
  url = 'https://www.freetogame.com/api/games';

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController) { }

  getGameListFromAPI(): Observable<any> {
    return this.http.get<any>(this.url)
      .pipe(
        map((data: any) => this.gameListFromApi = data)
      );
  }

  showLoader() {
    this.loadingController.create({
      message: 'Loading games...'
    }).then((response) => {
      response.present().then(() => {
        if(!this.isLoading) {
          response.dismiss().then(() => console.log('Loading controller aborted'));
        }
      });
    });
  }

  hideLoader() {
    this.isLoading = false;

    this.loadingController.getTop().then(x => {
      if(x) {
        console.log('present');
        this.loadingController.dismiss()
          .then((response) => {
            console.log('games loaded');
          })
          .catch((error) => {
            console.log('error', error);
          });
      } else {
        console.log('not present');
      }
    });
  }
}
