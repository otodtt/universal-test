import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { PhasesRoutingModul } from './phases-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

import { PhasesComponent } from './phases.component';

/**  Moduls */
import { PhasesGrainsModule } from './modules/phases.grains.module';
import { PhasesBeansModule } from './modules/phases.beans.module';
import { PhasesTechnicalModule } from './modules/phases.technical.module';
import { PhasesVegetablesModule } from './modules/phases.vegetables.module';
import { PhasesFruidsModule } from './modules/phases.fruids.module';
import { PhasesStrawberryModule } from './modules/phases.strawberry.module';

/**  Pages */
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { VitisComponent } from './pages/vitis/vitis.component';
import { WeedComponent } from './pages/weed/weed.component';
import { CitrusComponent } from './pages/citrus/citrus.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    PhasesRoutingModul,
    PhasesGrainsModule,
    PhasesBeansModule,
    PhasesTechnicalModule,
    PhasesVegetablesModule,
    PhasesFruidsModule,
    PhasesStrawberryModule
  ],
  declarations: [
    PhasesComponent,
    IntroductionComponent,
    VitisComponent,
    WeedComponent,
    CitrusComponent
  ]
})
export class PhasesModule { }
