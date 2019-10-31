import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TravelInfo } from '../travel-information.model';
import { TravelInfoService } from '../travel-information.service';

@Component({
  selector: 'app-travel-information-collection',
  templateUrl: './travel-information-collection.component.html',
  styleUrls: ['./travel-information-collection.component.scss']
})

export class TravelInformationCollectionComponent implements OnInit, OnDestroy {
  travelInfoCollection: TravelInfo[] = [];
  private travelInfoCollectionSub: Subscription;

  constructor(public traveInfoService: TravelInfoService) { }

  ngOnInit() {
    this.traveInfoService.getTravelInfos();
    this.travelInfoCollectionSub = this.traveInfoService.getPostUpdateListener()
      .subscribe((travelInfoCollectionData: {travelInfoCollection: TravelInfo[]}) => {
        console.log('collection: ' + JSON.stringify(travelInfoCollectionData.travelInfoCollection));
        this.travelInfoCollection = travelInfoCollectionData.travelInfoCollection;
      });
  }

  ngOnDestroy() {
  }
}
