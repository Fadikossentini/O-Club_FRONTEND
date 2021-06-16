import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './Remplissage/authentification/authentification.component';
import { TopPageComponent } from './top-page/top-page.component';
import { InscriptionComponent } from './Remplissage/inscription/inscription.component';
import { TopAfterLoginComponent } from './top-after-login/top-after-login.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { SallesComponent } from './salles/salles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { ReservationComponent } from './Remplissage/reservation/reservation.component';
import { DescriptionComponent } from './description/description.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginInterceptor } from './interceptor/login.interceptor';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    TopPageComponent,
    InscriptionComponent,
    TopAfterLoginComponent,
    AcceuilComponent,
    FooterComponent,
    FaqComponent,
    SallesComponent,
    CarouselComponent,
    ReservationComponent,
    DescriptionComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true,
    },
    LoginGuard,
    LogoutGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
