import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../Remplissage/authentification.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css'],
})
export class SallesComponent implements OnInit {
  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  reserver() {
    let link = ['login'];
    if (this.authService.isLogged()) {
      link = ['reservation'];
    }
    this.router.navigate(link);
  }
}
