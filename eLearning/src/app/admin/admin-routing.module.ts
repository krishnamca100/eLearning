import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {path: 'home/login', component: LoginComponent},
  {path: 'home/register', component: RegisterComponent},
  {path: 'home/verify', component: VerifyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
