import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountpreferenceComponent} from './accountpreference/accountpreference.component';
import { ConceptappComponent} from './conceptapp/conceptapp.component';
import { EmailComponent} from './email/email.component';
import { ProductsComponent} from './products/products.component';
import { ProfileandvisibilityComponent} from './profileandvisibility/profileandvisibility.component';
import { SecurityComponent} from './security/security.component';


const routes: Routes = [
  {path: 'account/accountpreference', component: AccountpreferenceComponent},
  {path: 'account/conceptapp', component: ConceptappComponent},
  {path: 'account/email', component: EmailComponent},
  {path: 'account/products', component: ProductsComponent},
  {path: 'account/profileandvisibility', component: ProfileandvisibilityComponent},
  {path: 'account/security', component: SecurityComponent},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingsRoutingModule { }
