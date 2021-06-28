import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MyProfilrComponent } from '././my-profilr/my-profilr.component';


import { ElectrocardiographyComponent } from './electrocardiography/electrocardiography.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'electrocardiography', component: ElectrocardiographyComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'update-profile', component: UpdateProfileComponent},
  { path: 'my-profilr', component: MyProfilrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
