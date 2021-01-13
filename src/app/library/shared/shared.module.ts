import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav/topnav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [TopnavComponent, MyCarouselComponent],
  imports: [
    CommonModule,
    NgbModule,
    CarouselModule.forRoot()
  ],
  exports: [TopnavComponent, MyCarouselComponent]
})
export class SharedModule { }
