import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { VegetablesPhasesRoutingModul } from '../routings/vegetables.phases-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../../common/share.components.module';
import { MaterialModule } from '../../common/material/material.module';

/**  Pages */
import { SolanumComponent } from '../pages/vegetables/solanum/solanum.component';
import { SolanaceousComponent } from '../pages/vegetables/solanaceous/solanaceous.component';
import { CucurbitsComponent } from '../pages/vegetables/cucurbits/cucurbits.component';
import { BrassicaComponent } from '../pages/vegetables/brassica/brassica.component';
import { OtherBrassicaComponent } from '../pages/vegetables/other-brassica/other-brassica.component';
import { LeafComponent } from '../pages/vegetables/leaf/leaf.component';
import { RootComponent } from '../pages/vegetables/root/root.component';
import { BulbComponent } from '../pages/vegetables/bulb/bulb.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    VegetablesPhasesRoutingModul
  ],
  declarations: [
    SolanumComponent,
    SolanaceousComponent,
    CucurbitsComponent,
    BrassicaComponent,
    OtherBrassicaComponent,
    LeafComponent,
    RootComponent,
    BulbComponent
  ]
})
export class PhasesVegetablesModule { }
