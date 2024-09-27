import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { MaterialModule } from '../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';



@NgModule({
  declarations: [
    BannerComponent,
    ContainerComponent,
    FormBaseComponent,
    DropdownUfComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    ContainerComponent,
    FormBaseComponent,
    DropdownUfComponent
  ]
})
export class SharedModule { }
