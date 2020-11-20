import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { GrainsPhasesRoutingModul } from '../routings/grains.phases-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../../common/share.components.module';
import { MaterialModule } from '../../common/material/material.module';

/**  Pages */
import { GrainsComponent } from '../pages/grains/grains/grains.component';
import { ZeaComponent } from '../pages/grains/zea/zea.component';
import { OryzaComponent } from '../pages/grains/oryza/oryza.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    GrainsPhasesRoutingModul,
  ],
  declarations: [
    GrainsComponent,
    ZeaComponent,
    OryzaComponent
  ]
})
export class PhasesGrainsModule { }
