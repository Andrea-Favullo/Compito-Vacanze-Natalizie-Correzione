import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchStatiComponent } from './search-stati/search-stati.component';
import { StatoComponent } from './search-stati/stato/stato.component';

const routes: Routes = [
  { path: 'search-stati', component: SearchStatiComponent },
  { path: 'stato/:alpha2Code', component: StatoComponent },
  { path: '', redirectTo: '/search-stati', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
