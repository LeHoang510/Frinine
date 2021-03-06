import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminLayoutComponent],
	imports: [
		CommonModule,
		RouterModule,
		MaterialModule
	],
  exports: [AdminLayoutComponent]
})
export class AdminLayoutModule { }
