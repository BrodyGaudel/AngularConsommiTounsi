import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Reclamation} from '../ReclamationModel/Reclamation';
import {ReclamationServiceService} from '../ReclamationService/reclamation-service.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {


  newReclamation = new Reclamation();

  message: string;

  constructor(private reclamationServiceService: ReclamationServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addReclamation() {
    this.reclamationServiceService.ajouterReclamation(this.newReclamation).subscribe(rec => {
      console.log(rec);

    });

    this.router.navigate(['reclamations']).then(() => {
      window.location.reload();
    });

  }

}
