import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Testing1PageRoutingModule } from './testing1-routing.module';

import { Testing1Page } from './testing1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Testing1PageRoutingModule
  ],
  declarations: [Testing1Page]
})
export class Testing1PageModule {}
