import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { TravelInfo } from '../travel-information.model';
import { TravelInfoService } from '../travel-information.service';
import { AuthService } from '../../auth/auth.service';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-travel-information-create',
  templateUrl: './travel-information-create.component.html',
  styleUrls: ['./travel-information-create.component.scss']
})
export class TravelInformationCreateComponent implements OnInit {
  private mode = 'create';
  private travelInfoId: string;
  imagePreview: any;
  travelInfoForm: FormGroup;
  travelInfo: TravelInfo;
  currentUser: string;

  constructor(public route: ActivatedRoute, public traveInfoService: TravelInfoService, public authService: AuthService) { }

  ngOnInit() {
    this.travelInfoForm = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    });
    // this.currentUser = this.authService.getUserName();
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.travelInfoId = paramMap.get('id');
        this.traveInfoService.getTravelInfo(this.travelInfoId).subscribe(travelInfoData => {
          this.travelInfo = {
            id: travelInfoData._id,
            name: travelInfoData.name,
            price: travelInfoData.price,
            description: travelInfoData.description,
            imagePath: travelInfoData.imagePath,
            creator: travelInfoData.creator

          };
          this.travelInfoForm.setValue({
            name: this.travelInfo.name,
            price: this.travelInfo.price,
            description: this.travelInfo.description,
            image: this.travelInfo.imagePath
          });
        });
      } else {
        this.mode = 'create';
        this.travelInfoId = null;
      }
    })
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.travelInfoForm.patchValue({image: file});
    // informs Angular that I changed the value and it should re-evaluate that, store the value
    this.travelInfoForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSaveTravalInfo() {
    if (this.travelInfoForm.invalid) {
      return ;
    }
    if (this.mode === 'create') {
      this.traveInfoService.addTravelInfo(
        this.travelInfoForm.value.name,
        this.travelInfoForm.value.price,
        this.travelInfoForm.value.description,
        this.travelInfoForm.value.image,
        this.currentUser
      );
    } else {
      this.traveInfoService.updateTravelInfo(
        this.travelInfo.id,
        this.travelInfoForm.value.name,
        this.travelInfoForm.value.price,
        this.travelInfoForm.value.description,
        this.travelInfoForm.value.image
      )
    }
    this.travelInfoForm.reset();
  }
}
