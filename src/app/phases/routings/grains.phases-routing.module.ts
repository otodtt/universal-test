import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidePageComponent } from '../pages/side-page.component';

/** Grains */
import { IntroductionComponent } from '../pages/introduction/introduction.component';
import { GrainsComponent } from '../pages/grains/grains/grains.component';
import { ZeaComponent } from '../pages/grains/zea/zea.component';
import { OryzaComponent } from '../pages/grains/oryza/oryza.component';

export const routes: Routes = [
  { path: '', component: SidePageComponent, children: [
    { path: '', redirectTo: '/phases/introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent },
    { path: 'cereals', component: GrainsComponent},
    { path: 'maize', component: ZeaComponent },
    { path: 'rice', component: OryzaComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GrainsPhasesRoutingModul {}

