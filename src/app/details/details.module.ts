import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
