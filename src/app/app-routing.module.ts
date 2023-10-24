import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuelistComponent } from './components/issuelist/issuelist.component';
import { CreateticketComponent } from './components/createticket/createticket.component';

const routes: Routes = [
  {path:"",component:IssuelistComponent},
  {path:"createticket",component:CreateticketComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
