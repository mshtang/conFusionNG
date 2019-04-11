import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getFeaturedLeader(): Promise<Leader> {
    // return Promise.resolve(LEADERS.filter(leader => leader.featured === true)[0]);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(LEADERS.filter(leader => leader.featured === true)[0])
      }, 2500);
    });
  }

  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(LEADERS)
      }, 2500);
    });
  }
}
