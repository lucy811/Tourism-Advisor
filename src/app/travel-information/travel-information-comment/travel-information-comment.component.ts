import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TravelInfoService } from '../travel-information.service';
import { Router } from '@angular/router';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel-information-comment',
  templateUrl: './travel-information-comment.component.html',
  styleUrls: ['./travel-information-comment.component.scss']
})
export class TravelInformationCommentComponent implements OnInit {
  private mode = 'create';
  private travelInfoId: string;
  private creator: string;
  private name: string;
  commentForm: FormGroup;

  constructor(public route: ActivatedRoute, public traveInfoService: TravelInfoService,  private router: Router) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      comment: new FormControl(null, {validators: [Validators.required]}),
    })

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.travelInfoId = paramMap.get('id');
        this.traveInfoService.getTravelInfo(this.travelInfoId).subscribe(response => {
          this.creator = response.creator;
          this.name = response.name;
        })
      }
    })
  }

  onSaveComment() {
    if (this.commentForm.invalid) {
      return ;
    }
    if (this.mode === 'create') {
      this.traveInfoService.addComment(
        this.commentForm.value.comment,
        this.travelInfoId,
        this.creator,
        this.name
      )
    }
    this.commentForm.reset();
  }
}
