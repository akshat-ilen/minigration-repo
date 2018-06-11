import { HomeRoutes } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    MenubarModule,
    SidebarModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
