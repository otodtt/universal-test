import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidePageComponent } from '../pages/side-page.component';

/** Beans */
import { IntroductionComponent } from '../pages/introduction/introduction.component';
import { PhaseolusComponent } from '../pages/beans/phaseolus/phaseolus.component';
import { ViciaComponent } from '../pages/beans/vicia/vicia.component';
import { PisumComponent } from '../pages/beans/pisum/pisum.component';
import { GlycineComponent } from '../pages/beans/glycine/glycine.component';

export const routes: Routes = [
  { path: '', component: SidePageComponent, children: [
    { path: '', redirectTo: '/phases/introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent },
    { path: 'bean', component: PhaseolusComponent },
    { path: 'faba-bean', component: ViciaComponent },
    { path: 'pea', component: PisumComponent },
    { path: 'soybean', component: GlycineComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BeansPhasesRoutingModul {}

