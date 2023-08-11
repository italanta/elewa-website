import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './components/user/user.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { MainProfileComponent } from './main/main-profile/main-profile.component';

import { ProfileRoutesModule } from './profile.routing';

@NgModule({
  imports: [CommonModule, ProfileRoutesModule],
  declarations: [UserComponent, MainProfileComponent, UserSettingsComponent],
})
export class ProfilePageModule {}
