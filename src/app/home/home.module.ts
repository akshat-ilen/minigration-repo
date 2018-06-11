import { HomeRoutes } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    MegaMenuModule,
    PanelMenuModule,
    SidebarModule,
    ScrollPanelModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
