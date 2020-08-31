import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'PremierApplicatifWeb';

  //  version raccourcie du constructor
  constructor(private router: Router){}

  items: NbMenuItem[] = [
    {
      title: 'Acceuil',
      link: 'acceuil', // goes into angular `routerLink`
    },
    {
      title: 'Service',
      link: 'service', // goes directly into `href` attribute
    },
    {
      title: 'Menu clients',
      expanded: false,
      children: [
        {
          title: 'Create clients',
          link: 'clients/createclient', // goes into angular `routerLink`
        },
        {
          title: 'List clients',
          link: 'clients/listclients', // goes directly into `href` attribute
        },
      ],
    },
    {
      title: 'Menu utilisateurs',
      expanded: false,
      children: [
        {
          title: 'Create utilisateur',
          link: 'utilisateurs/createutilisateur', // goes into angular `routerLink`
        },
        {
          title: 'List utilisateurs',
          link: 'utilisateurs/listutilisateurs', // goes directly into `href` attribute
        },
      ],
    },
    {
      title: 'Contact',
      link: 'contact', // goes directly into `href` attribute
    },
    {
      title: 'Test 404',
      link: 'groumph', // goes directly into `href` attribute
    }
  ];
}
