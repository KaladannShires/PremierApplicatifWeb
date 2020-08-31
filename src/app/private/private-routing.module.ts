import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { CreateClientsComponent } from './createClients/createClients.component';
import { ListClientsComponent } from './listClients/listClients.component';

import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { CreateUtilisateursComponent } from './createUtilisateurs/createUtilisateurs.component';
import { ListUtilisateursComponent } from './listUtilisateurs/listUtilisateurs.component';

import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
    {path: 'client', children : [
        {path: '', component: ClientsComponent},
        {path: 'CreateClients', component : CreateClientsComponent}
        {path: 'listClients', component : ListClientsComponent}
    ]},
    {path: 'utilisateurs', children : [
        {path: '', component: UtilisateursComponent},
        {path: 'CreateUtilisateurs', component : CreateUtilisateursComponent}
        {path: 'listUtilisateurs', component : ListUtilisateursComponent}
    ]}
    { path: '**', component: ErrorComponent}
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class PrivateRoutingModule { }