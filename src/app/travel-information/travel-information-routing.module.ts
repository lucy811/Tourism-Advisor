import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelInformationCreateComponent } from './travel-information-create/travel-information-create.component';
import { TravelInformationCollectionComponent } from './travel-information-collection/travel-information-collection.component';
import { TravelInformationDetailComponent } from './travel-information-detail/travel-information-detail.component';

const travelRoutes: Routes = [
  { path: 'travel-info-collection', component: TravelInformationCollectionComponent },
  { path: 'travel-info-create', component: TravelInformationCreateComponent },
  { path: 'travel-info-edit/:id', component: TravelInformationCreateComponent},
  { path: 'travel-info-detail/:id', component: TravelInformationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(travelRoutes)],
  exports: [RouterModule]
})
export class TravelRoutingModule { }