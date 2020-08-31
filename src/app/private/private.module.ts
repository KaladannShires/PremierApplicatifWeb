import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ClientsComponent } from './clients/clients.component';
import { CreateClientsComponent } from './createClients/createClients.component';
import { ListClientsComponent } from './listClients/listClients.component';

import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { CreateUtilisateursComponent } from './createUtilisateurs/createUtilisateurs.component';
import { ListUtilisateursComponent } from './listUtilisateurs/listUtilisateurs.component';

@NgModule({
  declarations: [
    ClientsComponent,
    CreateClientsComponent,
    ListClientsComponent,
    UtilisateursComponent,
    CreateUtilisateursComponent,
    ListUtilisateursComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule
  ]
})
export class PrivateModule { }
