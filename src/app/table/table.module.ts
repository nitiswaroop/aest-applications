import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from '../details/details.component';
import { DetailsModule } from '../details/details.module';
import { PaginationComponent } from '../pagination/pagination.component';
import { PaginationModule } from '../pagination/pagination.module';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [
     TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule,
    DetailsModule
  ],
  schemas:[
     CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
  ],
  exports: [TableComponent]
})
export class TableModule { }
