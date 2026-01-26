import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { RickymortyService } from './services/rickymorty.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ],
  providers:[
    RickymortyService
  ]
})
export class CharacterModule { }
