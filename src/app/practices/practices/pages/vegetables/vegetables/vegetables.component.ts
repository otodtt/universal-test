import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
    templateUrl: './vegetables.component.html',
    styleUrls: ['../../pages.scss', '../../media.scss']
})
export class VegetablesComponent implements OnInit {

    private title = 'ДРЗП - Зеленчуци';
    private description =   'Добра Растителнозащитна Пракатика при домати, пипер и патладжан. ' +
                            'Добра Растителнозащитна Пракатика при зеленчуци. ' +
                            ' Борба с болести, неприятели и плевели при домати, пипер и патладжан.';
    private keywords = 'домати, пипер, патладжан, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Зеленчуци';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('vegetables').valueChanges();
    }

    ngOnInit(): void {
        this.changeBreadcrumbService.emitName(this.breadcrumbName);
    }

    openDialog(table: string): void {
        this.dialog.open(DialogComponent, {
            data: { table }
        });
    }
}
