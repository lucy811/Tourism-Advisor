import { NgModule } from '@angular/core';
import { HomeComponent } from './core/home/home.component';
import { TravelInformationCollectionComponent } from './travel-information/travel-information-collection/travel-information-collection.component';
import { TravelInformationCreateComponent } from './travel-information/travel-information-create/travel-information-create.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'travel-info-collection', component: TravelInformationCollectionComponent },
  { path: 'travel-info-create', component: TravelInformationCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
