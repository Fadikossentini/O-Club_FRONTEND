import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../Remplissage/authentification.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css'],
})
export class TopPageComponent implements OnInit {
  constructor(
    public authService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }

  test() {
    console.log(this.authService.isLogged());
  }

  reserver() {
    let link = ['login'];
    if (this.authService.isLogged()) {
      link = ['reservation'];
    }
    this.router.navigate(link);
  }
}
