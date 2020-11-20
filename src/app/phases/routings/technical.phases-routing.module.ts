import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidePageComponent } from '../pages/side-page.component';

/** Technical */
import { IntroductionComponent } from '../pages/introduction/introduction.component';
import { HelianthusComponent } from '../pages/technical/helianthus/helianthus.component';
import { BrassicaNapusComponent } from '../pages/technical/brassica/brassica-napus.component';
import { BetaComponent } from '../pages/technical/beta/beta.component';
import { HumulusComponent } from '../pages/technical/humulus/humulus.component';
import { GossypiumComponent } from '../pages/technical/gossypium/gossypium.component';

export const routes: Routes = [
  { path: '', component: SidePageComponent, children: [
    { path: '', redirectTo: '/phases/introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent },
    { path: 'sunflower', component: HelianthusComponent },
    { path: 'oilseed-rape', component: BrassicaNapusComponent },
    { path: 'beet', component: BetaComponent },
    { path: 'hop', component: HumulusComponent },
    { path: 'cotton', component: GossypiumComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TechnicalPhasesRoutingModul {}

