import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReclamationServiceService {

  constructor(private http: HttpClient) {
  }

  listeReclamation() {
    return this.http.get<any[]>( 'http://localhost:8080/SpringMVC/servlet/reclamation/get');
  }
  ajouterReclamation(reclamation) {
    // @ts-ignore
    return this.http.post('http://localhost:8080/SpringMVC/servlet/reclamation/post' , reclamation, {responseType: 'text' as 'json'});
  }
  supprimerReclamation(id) {
    return this.http.delete('http://localhost:8080/SpringMVC/servlet/reclamation/delete/' + id);
  }
  consulterReclamation(id) {
    return this.http.get('http://localhost:8080/SpringMVC/servlet/reclamation/get/' + id);
  }
  updateReclamation(reclamation) {
    return this.http.put('http://localhost:8080/SpringMVC/servlet/reclamation/put/', reclamation, {responseType: 'text' as 'json'});
  }
}
