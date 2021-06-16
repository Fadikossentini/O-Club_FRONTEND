import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  dateS: Date = new Date();
  alert: boolean;

  obj = {
    nom: this.nom,
    duree: this.duree,
    date: this.date,
    salle: this.id_type,
    type_event: this.type_event,
    id_club: this.dateS,
  };

  constructor(private authService: AuthentificationService) {}
  ngOnInit() {
    this.alert = false;
  }

  send() {
    this.alert = true;
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

  async save() {
    var date_soumission = '2021-06-16';
    var date_debut = '2021-06-16';
    var date_fin = '2021-06-16';
    var etat = 'valide';
    var nom_event = this.obj.nom;
    var type_event = 'Hackathon';
    var id_club = 1;
    var id_type = 1;
    console.log('this is working');

    try {
      const res = await fetch('http://127.0.0.1:8080/api/reservation', {
        method: 'POST',
        body: JSON.stringify({
          date_soumission,
          date_debut,
          date_fin,
          etat,
          nom_event,
          type_event,
          id_club,
          id_type,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        // emailError.textContent = data.errors.email;
        // passwordError.textContent = data.errors.password;
      }
      if (data.user) {
        window.location.assign('/');
      }
    } catch (err) {
      console.log(err);
    }
  }

  closeAlert() {
    this.alert = false;
  }
}
