import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProfileComponent } from './main/main-profile/main-profile.component';

export const PROFILE_ROUTES: Routes = [
  { path: '', component: MainProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(PROFILE_ROUTES)],
  exports: [],
})
export class ProfileRoutesModule {}
