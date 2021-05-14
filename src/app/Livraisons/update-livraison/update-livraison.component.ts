import { Component, OnInit } from '@angular/core';
import {Livraison} from '../LivraisonModel/Livraison';
import {ActivatedRoute, Router} from '@angular/router';
import {LivraisonServiceService} from '../LivraisonService/livraison-service.service';

@Component({
  selector: 'app-update-livraison',
  templateUrl: './update-livraison.component.html',
  styleUrls: ['./update-livraison.component.css']
})
export class UpdateLivraisonComponent implements OnInit {

  currentLivraison = new Livraison();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private livraisonServiceService: LivraisonServiceService) {

  }

  ngOnInit() {
  }

  updateLivraison()
  {/*console.log(this.currentProduit);*/
    this.livraisonServiceService.updateLivraison(this.currentLivraison);
    this.router.navigate(['livraisons']);
  }

}
