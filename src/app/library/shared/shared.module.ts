import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav/topnav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TopnavComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [TopnavComponent]
})
export class SharedModule { }
