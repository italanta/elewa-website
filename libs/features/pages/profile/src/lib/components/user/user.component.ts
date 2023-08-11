import { Component, Input, OnInit } from '@angular/core';

import { __user as mockUser } from '@elewa-website/data/ui/user-profile';
import { Profile } from '@elewa-website/models/schemas/ui/profile';

@Component({
  selector: 'elewa-website-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user!:Profile;

  ngOnInit() {
    this.user = mockUser
  }
}
