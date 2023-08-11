import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProfileComponent } from './main/main-profile/main-profile.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

export const PROFILE_ROUTES: Routes = [
  { path: '', component: MainProfileComponent },

  { path: 'settings', component: UserSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(PROFILE_ROUTES)],
  exports: [],
})
export class ProfileRoutesModule {}
