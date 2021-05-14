import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocComponent} from './Template/doc/doc.component';
import {AddReclamationComponent} from './Reclamations/add-reclamation/add-reclamation.component';
import {UpdateReclamationComponent} from './Reclamations/update-reclamation/update-reclamation.component';
import {PrintreclamationComponent} from './Template/printreclamation/printreclamation.component';
import {UpdateLivraisonComponent} from './Livraisons/update-livraison/update-livraison.component';
import {AddLivraisonComponent} from './Livraisons/add-livraison/add-livraison.component';
import {PrintlivraisonComponent} from './Template/printlivraison/printlivraison.component';
import {UpdateLivreurComponent} from './Livreurs/update-livreur/update-livreur.component';
import {AddLivreurComponent} from './Livreurs/add-livreur/add-livreur.component';
import {PrintlivreurComponent} from './Template/printlivreur/printlivreur.component';


const routes: Routes = [
  {path: 'Printlivreur', component: PrintlivreurComponent},
  {path: 'AddLivreur', component : AddLivreurComponent },
  {path: 'UpdateLivreur/:idliv', component : UpdateLivreurComponent },
  {path: 'Printlivraison', component: PrintlivraisonComponent},
  {path: 'AddLivraison', component : AddLivraisonComponent },
  {path: 'UpdateLivraison/:idLivraison', component : UpdateLivraisonComponent },
  {path: 'Printreclamation', component: PrintreclamationComponent},
  {path: 'updateReclamation/:idrec',  component: UpdateReclamationComponent},
  {path: 'addReclamation', component : AddReclamationComponent},
  { path: 'doc', component: DocComponent },
  {path: '', redirectTo: 'Printlivreur', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
