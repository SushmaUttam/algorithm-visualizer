import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';


const routes: Routes = [
  {path: 'bubbleSort', component: BubbleSortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
