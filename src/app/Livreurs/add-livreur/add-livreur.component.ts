import { Component, OnInit } from '@angular/core';
import {Livreur} from '../LivreurModel/Livreur';
import {LivreurServiceService} from '../LivreurService/livreur-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-livreur',
  templateUrl: './add-livreur.component.html',
  styleUrls: ['./add-livreur.component.css']
})
export class AddLivreurComponent implements OnInit {


  newLivreur = new Livreur();

  message: string;

  constructor(private livreurServiceService: LivreurServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addLivreur() {
    this.livreurServiceService.ajouterLivreur(this.newLivreur).subscribe(livr => {
      console.log(livr);

    });

    this.router.navigate(['livreurs']).then(() => {
      window.location.reload();
    });

  }

}
