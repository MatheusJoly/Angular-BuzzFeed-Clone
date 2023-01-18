import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContentComponent } from './components/card-content/card-content.component';

const routes: Routes = [
  {path: '', component: CardContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
