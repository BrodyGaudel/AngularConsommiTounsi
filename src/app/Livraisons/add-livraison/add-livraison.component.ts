import { Component, OnInit } from '@angular/core';
import {Livraison} from '../LivraisonModel/Livraison';
import {Router} from '@angular/router';
import {LivraisonServiceService} from '../LivraisonService/livraison-service.service';

@Component({
  selector: 'app-add-livraison',
  templateUrl: './add-livraison.component.html',
  styleUrls: ['./add-livraison.component.css']
})
export class AddLivraisonComponent implements OnInit {

  newLivraison = new Livraison();

  message: string;

  constructor(private livraisonServiceService: LivraisonServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addLivraison() {
    this.livraisonServiceService.ajouterLivraison(this.newLivraison).subscribe(livrai => {
      console.log(livrai);

    });

    this.router.navigate(['livraisons']).then(() => {
      window.location.reload();
    });


  }

}
