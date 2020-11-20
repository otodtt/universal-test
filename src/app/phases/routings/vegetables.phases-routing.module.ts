import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidePageComponent } from '../pages/side-page.component';

import { IntroductionComponent } from '../pages/introduction/introduction.component';
import { SolanumComponent } from '../pages/vegetables/solanum/solanum.component';
import { SolanaceousComponent } from '../pages/vegetables/solanaceous/solanaceous.component';
import { CucurbitsComponent } from '../pages/vegetables/cucurbits/cucurbits.component';
import { BrassicaComponent } from '../pages/vegetables/brassica/brassica.component';
import { LeafComponent } from '../pages/vegetables/leaf/leaf.component';
import { OtherBrassicaComponent } from '../pages/vegetables/other-brassica/other-brassica.component';
import { RootComponent } from '../pages/vegetables/root/root.component';
import { BulbComponent } from '../pages/vegetables/bulb/bulb.component';

export const routes: Routes = [
  { path: '', component: SidePageComponent, children: [
    { path: '', redirectTo: '/phases/introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent },
    { path: 'potato', component: SolanumComponent },
    { path: 'solanaceous-fruits', component: SolanaceousComponent },
    { path: 'cucurbits', component: CucurbitsComponent },
    { path: 'brassica', component: BrassicaComponent },
    { path: 'leaf-vegetables', component: LeafComponent },
    { path: 'other-brassica', component: OtherBrassicaComponent },
    { path: 'root-and-stem', component: RootComponent },
    { path: 'bulb-vegetables', component: BulbComponent },
  ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VegetablesPhasesRoutingModul {}

