import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLivraisonComponent } from './Livraisons/add-livraison/add-livraison.component';
import { UpdateLivraisonComponent } from './Livraisons/update-livraison/update-livraison.component';
import { LivraisonComponent } from './Livraisons/livraison/livraison.component';
import { AddLivreurComponent } from './Livreurs/add-livreur/add-livreur.component';
import { UpdateLivreurComponent } from './Livreurs/update-livreur/update-livreur.component';
import { LivreurComponent } from './Livreurs/livreur/livreur.component';
import { AddReclamationComponent } from './Reclamations/add-reclamation/add-reclamation.component';
import { UpdateReclamationComponent } from './Reclamations/update-reclamation/update-reclamation.component';
import { ReclamationComponent } from './Reclamations/reclamation/reclamation.component';
import { DocComponent } from './Template/doc/doc.component';
import { PrintlivreurComponent } from './Template/printlivreur/printlivreur.component';
import { PrintlivraisonComponent } from './Template/printlivraison/printlivraison.component';
import { PrintreclamationComponent } from './Template/printreclamation/printreclamation.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailsLivreurComponent } from './Livreurs/details-livreur/details-livreur.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLivraisonComponent,
    UpdateLivraisonComponent,
    LivraisonComponent,
    AddLivreurComponent,
    UpdateLivreurComponent,
    LivreurComponent,
    AddReclamationComponent,
    UpdateReclamationComponent,
    ReclamationComponent,
    DocComponent,
    PrintlivreurComponent,
    PrintlivraisonComponent,
    PrintreclamationComponent,
    DetailsLivreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
