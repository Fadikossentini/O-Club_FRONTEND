import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentificationComponent } from './Remplissage/authentification/authentification.component';
import { InscriptionComponent } from './Remplissage/inscription/inscription.component';
import { FaqComponent } from './faq/faq.component';
import { SallesComponent } from './salles/salles.component';
import { ReservationComponent } from './Remplissage/reservation/reservation.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { LogoutGuard } from './guards/logout.guard';

const routes: Routes = [
  {
    path: 'register',
    component: InscriptionComponent,
    canActivate: [LogoutGuard],
  },
  {
    path: 'login',
    component: AuthentificationComponent,
    canActivate: [LogoutGuard],
  },
  { path: '', component: AcceuilComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'salles', component: SallesComponent },
  { path: 'reservation', component: ReservationComponent },
  {
    path: 'callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
    canActivate: [OktaAuthGuard],
  },
];

const oktaConfig = {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  nom: '{nom}',
  redirectUri: window.location.origin + '/callback',
};

@NgModule({
  imports: [RouterModule.forRoot(routes), OktaAuthModule],
  exports: [RouterModule],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
})
export class AppRoutingModule {}
