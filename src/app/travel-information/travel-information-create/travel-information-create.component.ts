import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-travel-information-create',
  templateUrl: './travel-information-create.component.html',
  styleUrls: ['./travel-information-create.component.scss']
})
export class TravelInformationCreateComponent implements OnInit {
  private mode = 'create';
  imagePreview: any;
  travelInfoForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.travelInfoForm = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.travelInfoForm.patchValue({image: file});
    // informs Angular that I changed the value and it should re-evaluate that, store the value
    this.travelInfoForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      console.log('imagePreview: ' + this.imagePreview);
    };
    reader.readAsDataURL(file);
  }

  onSaveTravalInfo() {
    if (this.travelInfoForm.invalid) {
      return ;
    }
    console.log('form value: ' + JSON.stringify(this.travelInfoForm.value));
  }
}
