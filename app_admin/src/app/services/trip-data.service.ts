import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { Authresponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(
    private http: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage) { }
    
  url = 'http://localhost:3000/api/trips';
  apiBaseUrl = 'http://localhost:3000/api/';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    return this.http.post<Trip>(this.url, formData, httpOptions);
  }

  getTrip(tripCode: string) : Observable<Trip[]>{
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    return this.http.put<Trip>(this.url + '/' + formData.code, formData, httpOptions);
  }

  private handleError(error: any): Promise<any>{
    console.error('Something has gone wrong', error); // For demo purposes only
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<Authresponse> { 
    return this.makeAuthApiCall('login', user); 
  } 
    
  public register(user: User): Promise<Authresponse> { 
    return this.makeAuthApiCall('register', user); 
  } 
    
  private async makeAuthApiCall(urlPath: string, user: User):
  Promise<Authresponse> { 
    const url: string = `${this.apiBaseUrl}/${urlPath}`; 

    try {
      const response = await this.http
        .post(url, user)
        .toPromise();
      return response as Authresponse;
    } catch (error) {
      return this.handleError(error);
    } 
    } 
}