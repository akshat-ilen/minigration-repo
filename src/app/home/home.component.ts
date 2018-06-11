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

    menuSideBar: Boolean = false


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
                styleClass : 'mainMenuElements',
                items: [
                    [
                        {
                            label: 'Cameras',
                            items: [{ label: 'Nikon',  }, { label: 'Canon' }]
                        },
                        {
                            label: 'Party',
                            styleClass : 'categoryMenu',
                            items: [{ label: 'Nikon' }, { label: 'Canon' }]
                        },
                    ],
                    [
                        {
                            label: 'Outdoor',
                            styleClass : 'categoryMenu',
                            items: [{ label: 'Nikon' }, { label: 'Canon' }]
                        },
                        {
                            label: 'Electronics',
                            styleClass : 'categoryMenu',
                            items: [{ label: 'Nikon' }, { label: 'Canon' }]
                        },
                    ]
                ]
            },
            {
                label: 'Experiences',
                styleClass : 'mainMenuElements',
                items: [
                    [
                        {
                            label: 'Camera',
                            items: [{ label: 'Nikon' }, { label: 'Canon' }]
                        },
                        {
                            label: 'Camera',
                            items: [{ label: 'Nikon' }, { label: 'Canon' }]
                        },
                    ],
                ]
            },
            {
                label: 'List Item',
                styleClass : 'mainMenuElements menuButtons',
                style : {
                    'border' : '2px solid white',
                    'border-radius': '10px'
                }
            },
            {
                label: 'Sign up',
                styleClass : 'mainMenuElements menuButtons',
                style : {
                    'border' : '2px solid white',
                    'border-radius': '10px'
                }
            },
        ];

    }

    openMenu() {
        if (window.innerWidth <= 850) {
            this.menuSideBar = true
        }
    }

    onResize($event) {
        if (this.menuSideBar) {
            this.menuSideBar = (window.innerWidth <= 850)
        }
    }

}
