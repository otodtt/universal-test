import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidePageComponent } from '../pages/side-page.component';

import { IntroductionComponent } from '../pages/introduction/introduction.component';
import { PomeComponent } from '../pages/fruits/pome/pome.component';
import { StoneComponent } from '../pages/fruits/stone/stone.component';

export const routes: Routes = [
  { path: '', component: SidePageComponent, children: [
    { path: '', redirectTo: '/phases/introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent },
    { path: 'pome-fruit', component: PomeComponent },
    { path: 'stone-fruit', component: StoneComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FruidsPhasesRoutingModul {}

