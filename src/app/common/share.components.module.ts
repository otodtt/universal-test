import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { SanitizeHtmlPipe } from '../practices/practices/shared/pipes/keep-html.pipe';

import { HeaderComponent } from '../shared/header/header.component';
import { SidePageComponent } from '../phases/pages/side-page.component';

import { PhasesSideMenuComponent } from '../phases/side-menu/phases-side-menu.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    HeaderComponent,
    SanitizeHtmlPipe,
    SidePageComponent,
    PhasesSideMenuComponent
  ],
  exports: [
    HeaderComponent,
    SanitizeHtmlPipe,
    SidePageComponent,
    PhasesSideMenuComponent
  ]
})

export class ShareComponentsModule {}
