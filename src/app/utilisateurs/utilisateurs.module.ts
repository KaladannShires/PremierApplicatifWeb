import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';

import { CreateUtilisateurComponent } from './create-utilisateur/create-utilisateur.component';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';

@NgModule({
  declarations: [CreateUtilisateurComponent, ListUtilisateursComponent],
  imports: [
    CommonModule,
    UtilisateursRoutingModule
  ]
})
export class UtilisateursModule { }
