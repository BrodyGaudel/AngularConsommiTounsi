import { Injectable } from '@angular/core';
import {Livreur} from '../LivreurModel/Livreur';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreurServiceService {

  constructor(private http: HttpClient) {
  }

  listeLivreur() {
    return this.http.get<any[]>( 'http://localhost:8080/SpringMVC/servlet/livreur/get');
  }
  ajouterLivreur(livreur) {
    // @ts-ignore
    return this.http.post('http://localhost:8080/SpringMVC/servlet/livreur/post' , livreur, {responseType: 'text' as 'json'});
  }
  supprimerLivreur(id) {
    return this.http.delete('http://localhost:8080/SpringMVC/servlet/livreur/delete/' + id);
  }
  consulterLivreur(id) {
    return this.http.get('http://localhost:8080/SpringMVC/servlet/livreur/get/' + id);
  }
  updateLivreur(livreur) {
    return this.http.put<Livreur>('http://localhost:8080/SpringMVC/servlet/livreur/put/', livreur, {responseType: 'text' as 'json'});
  }
}
