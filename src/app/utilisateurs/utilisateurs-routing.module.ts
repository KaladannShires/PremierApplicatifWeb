import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUtilisateurComponent } from './create-utilisateur/create-utilisateur.component';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';

import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
    {path: 'utilisateurs', children : [
        // {path: '', component: UtilisateursRootingModule},
        {path: 'Createutilisateur', component : CreateUtilisateurComponent},
        {path: 'listutilisateurs', component : ListUtilisateursComponent}
    ]},
    { path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class UtilisateursRoutingModule { }
