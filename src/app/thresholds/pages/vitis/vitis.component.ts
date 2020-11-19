import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './vitis.component.html',
    styleUrls: ['../pages.scss']
})
export class VitisComponent implements OnInit {
    private title = 'ПИВ - Лоза';
    private description = 'Прагове на икономическа вредност за вредители по лоза.';
    private keywords = 'ПИВ, лоза, болести, неприятели, плевели, ПРЗ';

    breadcrumbName = 'Лоза';

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
