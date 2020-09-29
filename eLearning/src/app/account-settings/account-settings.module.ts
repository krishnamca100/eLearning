import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSettingsRoutingModule } from './account-settings-routing.module';
import { ProfileandvisibilityComponent } from './profileandvisibility/profileandvisibility.component';
import { EmailComponent } from './email/email.component';
import { SecurityComponent } from './security/security.component';
import { AccountpreferenceComponent } from './accountpreference/accountpreference.component';
import { ConceptappComponent } from './conceptapp/conceptapp.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [ProfileandvisibilityComponent, EmailComponent, SecurityComponent, AccountpreferenceComponent, ConceptappComponent, ProductsComponent, AccountpreferenceComponent],
  imports: [
    CommonModule,
    AccountSettingsRoutingModule
  ]
})
export class AccountSettingsModule { }
