import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { TravelInfoService } from '../travel-information.service';
import { TravelInfo } from '../travel-information.model';

@Component({
  selector: 'app-travel-information-detail',
  templateUrl: './travel-information-detail.component.html',
  styleUrls: ['./travel-information-detail.component.scss']
})
export class TravelInformationDetailComponent implements OnInit {
  private travelInfoId: string;
  travelInfo: TravelInfo;

  constructor(public route: ActivatedRoute, private travelInfoService: TravelInfoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.travelInfoId = paramMap.get('id');
        this.travelInfoService.getTravelInfo(this.travelInfoId).subscribe(travelInfoData => {
          this.travelInfo = {
            id: travelInfoData._id, 
            name: travelInfoData.name, 
            price: travelInfoData.price,
            description: travelInfoData.description,
            imagePath: travelInfoData.imagePath,
          };
          console.log('travelInfo: ' + JSON.stringify(this.travelInfo));
        });
      } else {
        this.travelInfoId = null;
      }
    })
  }
}
