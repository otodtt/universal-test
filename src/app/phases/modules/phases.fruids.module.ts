import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { FruidsPhasesRoutingModul } from '../routings/fruids.phases-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../../common/share.components.module';
import { MaterialModule } from '../../common/material/material.module';

/**  Pages */
import { PomeComponent } from '../pages/fruits/pome/pome.component';
import { StoneComponent } from '../pages/fruits/stone/stone.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    FruidsPhasesRoutingModul
  ],
  declarations: [
    PomeComponent,
    StoneComponent
  ]
})
export class PhasesFruidsModule { }
