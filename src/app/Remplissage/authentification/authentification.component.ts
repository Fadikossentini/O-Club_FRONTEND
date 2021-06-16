import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthentificationService } from '../authentification.service';

const link = 'http://localhost:8080';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
})
export class AuthentificationComponent implements OnInit {
  nomC: string = '';
  mdp: string = '';

  obj = {
    nomC: this.nomC,
    mdp: this.mdp,
  };
  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {}
  ngOnInit() {}

  send() {
    // const accessToken = data.accessToken;
    console.log('verif');
    const accessToken = 'token12sqdqsdsqdqsfdqfsfr3';
    localStorage.setItem('accessToken', accessToken);
    // navigate to the home page
    const link = ['/'];
    this.router.navigate(link);

    // this.authService.sendAuth(this.obj).subscribe(
    //   (data) => {
    //      const accessToken = data.accessToken;

    //     localStorage.setItem('accessToken', accessToken);
    //     // navigate to the home page
    //     const link = ['/'];
    //     this.router.navigate(link);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('completed');
    //   }
    // );
  }
}
