import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const link = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(private http: HttpClient, private router: Router) {}

  sendReservation(obj: any): Observable<any> {
    return this.http.post(`${link}`, obj);
  }

  sendInscription(obj: any): Observable<any> {
    return this.http.post(`${link}`, obj);
  }

  sendAuth(obj: any): Observable<any> {
    return this.http.post(`${link}`, obj);
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['login']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}
