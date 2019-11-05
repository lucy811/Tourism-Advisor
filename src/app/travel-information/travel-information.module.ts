import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { TravelInformationCollectionComponent } from './travel-information-collection/travel-information-collection.component';
import { TravelInformationCreateComponent } from './travel-information-create/travel-information-create.component';
import { TravelInformationDetailComponent } from './travel-information-detail/travel-information-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TravelRoutingModule } from './travel-information-routing.module';

@NgModule({
  declarations: [
    TravelInformationCollectionComponent,
    TravelInformationCreateComponent,
    TravelInformationDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    TravelRoutingModule
  ]
})

export class TravelInformationModule { }