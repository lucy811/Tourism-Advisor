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
  private travelInfoCollectionUpdated = new Subject<{travelInfoCollection: TravelInfo[]}>();

  constructor(private http: HttpClient, private router: Router) {}

  getTravelInfos() {  
    this.http
      .get<{travelInfoCollection: any }>(BACKEND_URL
      ).pipe(map((responseData)=> {
        return responseData.travelInfoCollection.map(travelInfo => {
          return {
            id: travelInfo._id,
            name: travelInfo.name,
            price: travelInfo.price,
            description: travelInfo.description,
            imagePath: travelInfo.imagePath
          }
        })
      }))
      .subscribe(transformedTravelInfos => {
        this.travelInfoCollection = transformedTravelInfos;
        this.travelInfoCollectionUpdated.next({
          travelInfoCollection: [... this.travelInfoCollection]
        });
      }
    );
  }

  getTravelInfo(id: string) {
    return this.http.get<{_id: string, name: string, price: string, imagePath: string, description: string}>(BACKEND_URL + '/' + id);
  }

  getPostUpdateListener() {
    return this.travelInfoCollectionUpdated.asObservable();
  }

  addTravelInfo(name: string, price: string, description: string, image: File) {
    const travelInfoData = new FormData();
    travelInfoData.append('name', name);
    travelInfoData.append('price', price);
    travelInfoData.append('description', description);
    travelInfoData.append('image', image, name);
    this.http
      .post<{message: string, travelInfo: TravelInfo}>(BACKEND_URL, travelInfoData)
      .subscribe((responseData) => {
        this.router.navigate(['/travel-info-collection']);
      });
  }
}