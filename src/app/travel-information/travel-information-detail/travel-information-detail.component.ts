import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { TravelInfoService } from '../travel-information.service';
import { AuthService } from '../../auth/auth.service';
import { TravelInfo } from '../travel-information.model';
import { Comment } from '../comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-information-detail',
  templateUrl: './travel-information-detail.component.html',
  styleUrls: ['./travel-information-detail.component.scss']
})
export class TravelInformationDetailComponent implements OnInit {
  private travelInfoId: string;
  travelInfo: TravelInfo;
  currentUser: string;
  comments: any;
  constructor(public route: ActivatedRoute, private travelInfoService: TravelInfoService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.travelInfoId = paramMap.get('id');
        this.currentUser = this.authService.getCurrentLoginUser();
        this.travelInfoService.getTravelInfo(this.travelInfoId).subscribe(travelInfoData => {
          this.travelInfo = {
            id: travelInfoData._id, 
            name: travelInfoData.name, 
            price: travelInfoData.price,
            description: travelInfoData.description,
            imagePath: travelInfoData.imagePath,
            creator: travelInfoData.creator
          };
        });

        this.travelInfoService.getComments(this.travelInfoId).subscribe(commentsData => {
          this.comments = commentsData;
        });
      } else {
        this.travelInfoId = null;
      }
    })
  }

  onDelete(travelInfoId: string) {
    this.travelInfoService.deleteTravelInfo(travelInfoId).subscribe(response => {
      this.router.navigate(['/travel-info-collection']);
    })
  }
}
