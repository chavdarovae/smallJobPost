import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfferJobComponent } from './jobs/offer-job/offer-job.component';
import { SearchJobComponent } from './jobs/search-job/search-job.component';


const routes = [
  {
    path: '',
    pathMath: 'full',
    component: HomeComponent
  },
  {
    path: 'jobs/search',
    component: SearchJobComponent
  },
  {
    path: 'jobs/offer',
    component: OfferJobComponent
  },

]

export const AppRoutingModule = RouterModule.forRoot(routes);
