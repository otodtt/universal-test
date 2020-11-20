import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { TechnicalPhasesRoutingModul } from '../routings/technical.phases-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../../common/share.components.module';
import { MaterialModule } from '../../common/material/material.module';

/**  Pages */
import { HelianthusComponent } from '../pages/technical/helianthus/helianthus.component';
import { BrassicaNapusComponent } from '../pages/technical/brassica/brassica-napus.component';
import { BetaComponent } from '../pages/technical/beta/beta.component';
import { GossypiumComponent } from '../pages/technical/gossypium/gossypium.component';
import { HumulusComponent } from '../pages/technical/humulus/humulus.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    TechnicalPhasesRoutingModul,
  ],
  declarations: [
    HelianthusComponent,
    BrassicaNapusComponent,
    BetaComponent,
    GossypiumComponent,
    HumulusComponent
  ]
})
export class PhasesTechnicalModule { }
