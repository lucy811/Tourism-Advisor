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
  }

  ngOnDestroy() {
  }
}
