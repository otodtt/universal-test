import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { BeansPhasesRoutingModul } from '../routings/beans.phases-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../../common/share.components.module';
import { MaterialModule } from '../../common/material/material.module';

/**  Pages */
import { PhaseolusComponent } from '../pages/beans/phaseolus/phaseolus.component';
import { ViciaComponent } from '../pages/beans/vicia/vicia.component';
import { PisumComponent } from '../pages/beans/pisum/pisum.component';
import { GlycineComponent } from '../pages/beans/glycine/glycine.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    BeansPhasesRoutingModul,
  ],
  declarations: [
    PhaseolusComponent,
    ViciaComponent,
    PisumComponent,
    GlycineComponent
  ]
})
export class PhasesBeansModule { }
