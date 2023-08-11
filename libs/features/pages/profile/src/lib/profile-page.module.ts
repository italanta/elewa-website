import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { MainProfileComponent } from './main/main-profile/main-profile.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserComponent, MainProfileComponent],
})
export class ProfilePageModule {}
