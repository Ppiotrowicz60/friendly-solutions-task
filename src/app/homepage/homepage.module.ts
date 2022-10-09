import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [HomepageComponent, TableComponent],
  imports: [SharedModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
