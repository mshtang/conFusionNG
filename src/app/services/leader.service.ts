import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getFeaturedLeader(): Observable<Leader> {
    // return Promise.resolve(LEADERS.filter(leader => leader.featured === true)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(LEADERS.filter(leader => leader.featured === true)[0])
    //   }, 2500);
    // });
    return of(LEADERS.filter(leader => leader.featured === true)[0]).pipe(delay(1000));
  }

  getLeaders(): Observable<Leader[]> {
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(LEADERS)
    //   }, 2500);
    // });
    return of(LEADERS).pipe(delay(1000));
  }
}
