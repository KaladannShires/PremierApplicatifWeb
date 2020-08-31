import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateClientComponent } from './create-client/create-client.component';
import { ListClientsComponent } from './list-clients/list-clients.component';

import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
    {path: 'clients', children : [
        // {path: '', component: ClientsRootingModule},
        {path: 'createclient', component : CreateClientComponent},
        {path: 'listclients', component : ListClientsComponent}
    ]},
    { path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class ClientsRoutingModule { }
