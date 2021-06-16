import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

const link = 'http://localhost:8080';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  pwd: string = '';
  description: string = '';
  dateF: Date = new Date();
  nomC: string = '';
  nomP: string = '';
  email: string = '';
  numtel: string = '';

  obj = {
    pwd: this.pwd,
    description: this.description,
    dateF: this.dateF,
    nomC: this.nomC,
    nomP: this.nomP,
    email: this.email,
    numtel: this.numtel,
  };
  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {}
  ngOnInit() {}

  send() {
    const link = ['/login'];
    this.router.navigate(link);

    //   this.authService.sendInscription(this.obj).subscribe(
    //     (data) => {
    //       console.log(data);
    //       const link = ['/login'];
    //       this.router.navigate(link);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('completed');
    //     }
    //   );
  }
}
