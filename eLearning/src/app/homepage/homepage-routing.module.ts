import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent} from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
