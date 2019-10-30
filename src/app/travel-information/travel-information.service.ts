import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { TravelInfo } from './travel-information.model';

const BACKEND_URL = environment.apiUrl + '/travel-info';

@Injectable({providedIn: 'root'})
export class TravelInfoService {
  private travelInfoCollection: TravelInfo[] = [];
  private travelInfoCollectionUpdated = new Subject<{travelInfoCollection: TravelInfo[], travelInfoCount: number}>();

  constructor(private http: HttpClient, private router: Router) {}

  getTravelInfos() {  
    this.http.get<{travelInfoCollection: any }>(BACKEND_URL)
      .subscribe(responseData => {
        this.travelInfoCollection = responseData.travelInfoCollection;
      }
    );
  }

  getPostUpdateListener() {
    return this.travelInfoCollectionUpdated.asObservable();
  }

  addTravelInfo(name: string, price: string, description: string, image: File) {
    console.log('Travel info service: ' + name + ':' + price + ':' + description + ':' + JSON.stringify(image));
    const travelInfoData = new FormData();
    travelInfoData.append('name', name);
    travelInfoData.append('price', price);
    travelInfoData.append('description', description);
    travelInfoData.append('image', image, name);
    this.http
      .post<{message: string, travelInfo: TravelInfo}>(BACKEND_URL + '/post', travelInfoData)
      .subscribe((responseData) => {
        this.router.navigate(['/travel-info-collection']);
      });
  }
}