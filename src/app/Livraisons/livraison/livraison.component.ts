import { Component, OnInit } from '@angular/core';
import {LivraisonServiceService} from '../LivraisonService/livraison-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  livraisons: Observable<any[]>;

  constructor(private livraisonservice: LivraisonServiceService) {
    this.livraisons = this.livraisonservice.listeLivraison();
  }
  livr: any;
  supprimerLivraison(idLivraison: number)
  {
    const resp = this.livraisonservice.supprimerLivraison(idLivraison);
    resp.subscribe((data) => this.livr = data);
  }
  ngOnInit() {
    const resp = this.livraisonservice.listeLivraison();
    resp.subscribe((data) => this.livr = data);
  }

}
