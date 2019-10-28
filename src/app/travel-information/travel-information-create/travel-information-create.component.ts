import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel-information-create',
  templateUrl: './travel-information-create.component.html',
  styleUrls: ['./travel-information-create.component.scss']
})
export class TravelInformationCreateComponent implements OnInit {
  private mode = 'create';
  travelInfoForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.travelInfoForm = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]})
    });
  }

  onSaveTravalInfo() {
    
  }
}
