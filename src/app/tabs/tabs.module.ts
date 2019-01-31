import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import {AboutPageModule} from './about/about.module';
import {HomePageModule} from './home/home.module';
import {ContactPageModule} from './contact/contact.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutPageModule'
      },
      {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageModule,
    HomePageModule,
    ContactPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
