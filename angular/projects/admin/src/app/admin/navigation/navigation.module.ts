import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../app-material.module';
import { AdminRoutingModule } from '../admin-routing.module';
import { NavigationListItemComponent } from './navigation-list-item/navigation-list-item.component';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [
    NavigationListItemComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppMaterialModule,
  ],
  exports: [
    NavigationComponent,
  ],
})
export class NavigationModule { }
