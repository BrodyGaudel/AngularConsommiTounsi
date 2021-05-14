import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivraisonServiceService {


  constructor(private http: HttpClient) {
  }

  listeLivraison() {
    return this.http.get<any[]>( 'http://localhost:8080/SpringMVC/servlet/livraison/get');
  }
  ajouterLivraison(livraison) {
    // @ts-ignore
    return this.http.post('http://localhost:8080/SpringMVC/servlet/livraison/post' , livraison, {responseType: 'text' as 'json'});
  }
  supprimerLivraison(idLivraison) {
    return this.http.delete('http://localhost:8080/SpringMVC/servlet/livraison/delete/' + idLivraison);
  }
  consulterLivraison(id) {
    return this.http.get('http://localhost:8080/SpringMVC/servlet/livraison/get/' + id);
  }
  updateLivraison(livraison) {
    return this.http.put('http://localhost:8080/SpringMVC/servlet/livraison/put/', livraison, {responseType: 'text' as 'json'});
  }
  getlivraisonlist(){
    return this.http.get<Array<any>>('http://localhost:8080/SpringMVC/servlet/livraison/listpdf');
  }
}
