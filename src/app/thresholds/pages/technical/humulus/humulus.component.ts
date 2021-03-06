import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './humulus.component.html',
    styleUrls: ['../../pages.scss']
})
export class HumulusComponent implements OnInit {
    private title = 'ПИВ - Хмел';
    private description = 'Прагове на икономическа вредност за вредители по хмел.';
    private keywords = 'ПИВ, хмел, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Хмел';

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
    }

    ngOnInit(): void {
        this.changeBreadcrumbService.emitName(this.breadcrumbName);
    }
}
