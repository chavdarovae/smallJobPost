import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchJobComponent } from './search-job/search-job.component';
import { OfferJobComponent } from './offer-job/offer-job.component';



@NgModule({
  declarations: [
    SearchJobComponent, 
    OfferJobComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchJobComponent, 
    OfferJobComponent
  ],
})
export class JobsModule { }
