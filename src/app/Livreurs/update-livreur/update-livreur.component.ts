import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Livreur} from '../LivreurModel/Livreur';
import {LivreurServiceService} from '../LivreurService/livreur-service.service';

@Component({
  selector: 'app-update-livreur',
  templateUrl: './update-livreur.component.html',
  styleUrls: ['./update-livreur.component.css']
})
export class UpdateLivreurComponent implements OnInit {

  currentLivreur  = new Livreur();
  currentLivreur1  = new Livreur();

  id: number;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private livreurService: LivreurServiceService) { }

  ngOnInit(){
    this.livreurService.consulterLivreur(this.activatedRoute.snapshot.params.id).subscribe( prod => {
      if (prod instanceof Livreur) {
        this.currentLivreur = prod;
      } });
  }

  updateLivreur() {
    this.activatedRoute.params.subscribe((params: Params) => {this.id = params.ide; });
    console.log(this.id);
    this.currentLivreur.idLivreur = this.id;
    this.livreurService.updateLivreur(this.currentLivreur).subscribe(() => {
        this.router.navigate(['event']);
      }, (error) => { alert('Problème lors de la modification !'); }


    );
  }

}
