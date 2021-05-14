import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LivreurServiceService} from '../LivreurService/livreur-service.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {

  livreurs: Observable<any[]>;
  constructor(private service: LivreurServiceService) {
    this.livreurs = this.service.listeLivreur();
  }
  liv: any;
  supprimerLivreur(id: number)
  {
    const resp = this.service.supprimerLivreur(id);
    resp.subscribe((data) => this.liv = data);
  }
  ngOnInit() {
    const resp = this.service.listeLivreur();
    resp.subscribe((data) => this.liv = data);
  }

}
