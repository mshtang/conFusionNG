import { Injectable } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    // return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(DISHES.filter(dish => dish.id === id)[0])
    //   }, 2000);
    // });
    //return of(DISHES.filter(dish => dish.id === id)[0]).pipe(delay(2000)).toPromise();
    return of(DISHES.filter(dish => dish.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    // return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(DISHES.filter(dish => dish.featured)[0])
    //   }, 3000);
    // });
    return of(DISHES.filter(dish => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id));
  }
}
