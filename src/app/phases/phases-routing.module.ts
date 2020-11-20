import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhasesComponent } from './phases.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

import { VitisComponent } from './pages/vitis/vitis.component';
import { CitrusComponent } from './pages/citrus/citrus.component';
import { WeedComponent } from './pages/weed/weed.component';

export const routes: Routes = [
  { path: '', component: PhasesComponent, children: [
    { path: '', redirectTo: '/phases/introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent },
    { path: 'grains', loadChildren: () => import('../phases/modules/phases.grains.module').then(m => m.PhasesGrainsModule) },
    { path: 'beans', loadChildren: () => import('../phases/modules/phases.beans.module').then(m => m.PhasesBeansModule) },
    { path: 'technical', loadChildren: () => import('../phases/modules/phases.technical.module').then(m => m.PhasesTechnicalModule) },
    { path: 'vegetables', loadChildren: () => import('../phases/modules/phases.vegetables.module').then(m => m.PhasesVegetablesModule) },
    { path: 'fruids', loadChildren: () => import('../phases/modules/phases.fruids.module').then(m => m.PhasesFruidsModule) },
    { path: 'strawberry', loadChildren: () => import('../phases/modules/phases.strawberry.module').then(m => m.PhasesStrawberryModule) },
    { path: 'grapevine', component: VitisComponent },
    { path: 'citrus', component: CitrusComponent },
    { path: 'weed-species', component: WeedComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PhasesRoutingModul {}

