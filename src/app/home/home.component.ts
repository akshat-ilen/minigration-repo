import { AppStorage } from './../../forStorage/universal.inject';
import { TransferHttp } from './../../modules/transfer-http/transfer-http';
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';

import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    
    menuSideBar:Boolean = false


    items: MenuItem[];
    items2: MenuItem[];

    constructor(
        private http: TransferHttp, @Inject(AppStorage) private appStorage: Storage
    ) { }

    ngOnInit(): void {

        this.appStorage.setItem('test', 'test2');
        const resultCookie = this.appStorage.getItem('test');
        const t = window;
        const t1 = document;


        this.items = [
            {
                label: 'Products',
                items: [{
                    label: 'New',
                    icon: 'fa fa-fw fa-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { separator: true },
                { label: 'Quit' }
                ]
            },
            {
                label: 'Experiences',
                items: [
                    { label: 'Undo', icon: 'fa fa-fw fa-mail-forward' },
                    { label: 'Redo', icon: 'fa fa-fw fa-mail-reply' }
                ]
            },
            {
                label: 'List Items',
                items: [
                    {
                        label: 'Contents'
                    }
                ]
            },
            {
                label: 'Sign Up',
                items: [{
                    label: 'New',
                    icon: 'fa fa-fw fa-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { separator: true },
                { label: 'Quit' }
                ]
            },
        ];

    }

    openMenu() {
        if(window.innerWidth <= 850) {
            this.menuSideBar = true
        }
    }

    onResize($event) {
        if(this.menuSideBar) {
            this.menuSideBar = (window.innerWidth <= 850)
        }
    }

}
