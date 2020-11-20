import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidePageComponent } from '../pages/side-page.component';

import { IntroductionComponent } from '../pages/introduction/introduction.component';
import { StrawberryComponent } from '../pages/strawberry/strawberry/strawberry.component';
import { RibesComponent } from '../pages/strawberry/ribes/ribes.component';

export const routes: Routes = [
  { path: '', component: SidePageComponent, children: [
    { path: '', redirectTo: '/phases/introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent },
    { path: 'fragaria', component: StrawberryComponent },
    { path: 'currants', component: RibesComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StrawberryPhasesRoutingModul {}

