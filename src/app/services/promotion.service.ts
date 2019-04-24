import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of, ObservableLike } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service'
import { BASEURL } from '../shared/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    // return Promise.resolve(PROMOTIONS);
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(PROMOTIONS)
    //   }, 2500);
    // });
    // return of(PROMOTIONS).pipe(delay(1500));
    return this.http.get<Promotion[]>(BASEURL + 'promotions')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion> {
    // return Promise.resolve(PROMOTIONS.filter(promo => promo.id === id)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(PROMOTIONS.filter(promo => promo.id === id)[0])
    //   }, 2000);
    // });
    // return of(PROMOTIONS.filter(promo => promo.id === id)[0]).pipe(delay(1000));
    return this.http.get<Promotion>(BASEURL + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    // return Promise.resolve(PROMOTIONS.filter(promo => promo.featured)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(PROMOTIONS.filter(promo => promo.featured)[0])
    //   }, 2000);
    // });
    // return of(PROMOTIONS.filter(promo => promo.featured)[0]).pipe(delay(1200));
    return this.http.get<Promotion>(BASEURL + 'promotions?featured=true')
      .pipe(map(promo => promo[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
