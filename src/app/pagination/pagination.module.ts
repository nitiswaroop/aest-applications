import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../pagination/pagination.component';

@NgModule({
  declarations: [
     PaginationComponent
  ],
  imports: [
      CommonModule,
    FormsModule
  ],
  exports: [PaginationComponent]
})
export class PaginationModule { }
