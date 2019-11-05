import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TravelInfo } from '../travel-information.model';
import { TravelInfoService } from '../travel-information.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-travel-information-collection',
  templateUrl: './travel-information-collection.component.html',
  styleUrls: ['./travel-information-collection.component.scss']
})

export class TravelInformationCollectionComponent implements OnInit, OnDestroy {
  travelInfoCollection: TravelInfo[] = [];
  isLoaded: boolean;
  private travelInfoCollectionSub: Subscription;

  constructor(public traveInfoService: TravelInfoService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.isLoaded = true;
    this.spinner.show();
    this.traveInfoService.getTravelInfos();
    this.travelInfoCollectionSub = this.traveInfoService.getPostUpdateListener()
      .subscribe((travelInfoCollectionData: {travelInfoCollection: any}) => {
        this.travelInfoCollection = travelInfoCollectionData.travelInfoCollection;
        this.isLoaded = false;
        this.spinner.hide();
      });
  }

  ngOnDestroy() {
  }
}
