import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { BASEURL } from '../shared/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  getFeaturedLeader(): Observable<Leader> {
    // return Promise.resolve(LEADERS.filter(leader => leader.featured === true)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(LEADERS.filter(leader => leader.featured === true)[0])
    //   }, 2500);
    // });
    // return of(LEADERS.filter(leader => leader.featured === true)[0]).pipe(delay(1000));
    return this.http.get<Leader>(BASEURL + 'leadership?featured=true')
      .pipe(map(leader => leader[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeaders(): Observable<Leader[]> {
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(LEADERS)
    //   }, 2500);
    // });
    // return of(LEADERS).pipe(delay(1000));
    return this.http.get<Leader[]>(BASEURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
