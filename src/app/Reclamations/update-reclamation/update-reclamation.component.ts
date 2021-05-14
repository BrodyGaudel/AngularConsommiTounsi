import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../ReclamationModel/Reclamation';
import {ActivatedRoute, Router} from '@angular/router';
import {ReclamationServiceService} from '../ReclamationService/reclamation-service.service';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {

  currentReclamation = new Reclamation();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private reclamationService: ReclamationServiceService) {
  }

  ngOnInit() {
  }

  updateReclamation()
  {/*console.log(this.currentProduit);*/
    this.reclamationService.updateReclamation(this.currentReclamation);
    this.router.navigate(['reclamation']);
  }

}
