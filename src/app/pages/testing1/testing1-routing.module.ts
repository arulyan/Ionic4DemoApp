import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Testing1Page } from './testing1.page';

const routes: Routes = [
  {
    path: '',
    component: Testing1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Testing1PageRoutingModule {}
