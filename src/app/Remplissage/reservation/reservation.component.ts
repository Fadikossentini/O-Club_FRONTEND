import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';

const link = 'http://localhost:8080';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  nom: string = '';
  duree: string = '';
  date: Date = new Date();
  id_type: string = '';
  type_event: string = '';
  id_club: string = '';

  obj = {
    nom: this.nom,
    duree: this.duree,
    date: this.date,
    salle: this.id_type,
    type_event: this.type_event,
    id_club: this.id_club,
  };

  constructor(private authService: AuthentificationService) {}
  ngOnInit() {}

  send() {
    this.authService.sendReservation(this.obj).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
