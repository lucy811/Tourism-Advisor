import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelInformationCreateComponent } from './travel-information-create/travel-information-create.component';
import { TravelInformationCollectionComponent } from './travel-information-collection/travel-information-collection.component';

const travelRoutes: Routes = [
  { path: 'travel-info-collection', component: TravelInformationCollectionComponent },
  { path: 'travel-info-create', component: TravelInformationCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(travelRoutes)],
  exports: [RouterModule]
})
export class TravelRoutingModule { }