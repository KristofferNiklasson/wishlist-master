import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WishItem } from '../shared/models/WishItem';

@Injectable({
  providedIn: 'root'
})

export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions: any {

    return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
    }
  }

  getWishes() {
    let options = this.getStandardOptions();
    return this.http.get('assets/wishes.json', options);
  }

  AddWish(wish: WishItem) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization','value-need-for-authorization' );
    this.http.post('assets/wishes.json', wish, options)
  }
}
