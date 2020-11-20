import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { StrawberryPhasesRoutingModul } from '../routings/strawberry.phases-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../../common/share.components.module';
import { MaterialModule } from '../../common/material/material.module';

/**  Pages */
import { StrawberryComponent } from '../pages/strawberry/strawberry/strawberry.component';
import { RibesComponent } from '../pages/strawberry/ribes/ribes.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    StrawberryPhasesRoutingModul
  ],
  declarations: [
    StrawberryComponent,
    RibesComponent
  ]
})
export class PhasesStrawberryModule { }
