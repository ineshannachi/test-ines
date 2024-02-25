import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
les fonctions 
  // exemple de méthode pour lancer une requete http get qui retourne un Observable (Callback)
  chargerListAppareil() : Observable<Appareil[]>{
    return this.http.get<Appareil[]>('http://localhost:3000/appareilsAPI');
  }}
