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

    //  Gestion des erreurs d'URL toujours à la fin
    { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
