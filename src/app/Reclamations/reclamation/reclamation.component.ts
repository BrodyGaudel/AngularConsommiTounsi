import { Component, OnInit } from '@angular/core';
import {ReclamationServiceService} from '../ReclamationService/reclamation-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  reclamations: Observable<any[]>;

  constructor(private reclamationservice: ReclamationServiceService) {
    this.reclamations = this.reclamationservice.listeReclamation();
  }
  reclam: any;
  supprimerReclamation(id: number)
  {
    const resp = this.reclamationservice.supprimerReclamation(id);
    resp.subscribe((data) => this.reclam = data);
  }
  ngOnInit() {
    const resp = this.reclamationservice.listeReclamation();
    resp.subscribe((data) => this.reclam = data);
  }

}
