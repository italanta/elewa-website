import { Component } from '@angular/core';
import { InfoCard } from '@elewa-website/models/schema/ui/cards';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'elewa-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elewa-website';

  infoCards: InfoCard[] = [
    {
      title: 'Course Design',
      description:
        'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure',
      icon: faArrowUpRightDots,
    },
  ];
}