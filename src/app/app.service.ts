import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  
  public getAllMissions(): Observable<any>{
    return this.http.get('https//api.spacexdata.com/v3/launches');
  }
  
  public getMissionByYear(year : string): Observable<any>{
    return this.http.get('https//api.spacexdata.com/v3/launches&mission_year');
  }
}
