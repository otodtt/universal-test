import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
    templateUrl: './decorate.component.html',
    styleUrls: ['../../pages.scss', '../../media.scss']
})
export class DecorateComponent implements OnInit {

    private title = 'ДРЗП - Украсни култури в съоражения';
    private description =   'Добра Растителнозащитна Пракатика при украсни култури в оранжерии. ' +
                            'Борба с болести, неприятели и плевели при украсни култури в оранжерии.';
    private keywords = 'украсни култури, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Украсни';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('decorate').valueChanges();
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
