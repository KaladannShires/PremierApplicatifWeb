// import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    //  Redirection vers l'index toujours au début
    { path: '', redirectTo: 'acceuil', pathMatch: 'full'},

    { path: 'acceuil', component: HomeComponent},
    { path: 'service', component: ServiceComponent},
    { path: 'contact', component: ContactComponent},

    {
      // tslint:disable-next-line: align
      path: 'clients', loadChildren: () => import('./clients/clients.module')
      .then(m => m.ClientsModule)
    },
    {
      // tslint:disable-next-line: align
      path: 'utilisateurs', loadChildren: () => import('./utilisateurs/utilisateurs.module')
      .then(m => m.UtilisateursModule)
    },

    //  Gestion des erreurs d'URL toujours à la fin
    { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
