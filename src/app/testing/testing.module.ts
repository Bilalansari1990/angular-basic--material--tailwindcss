import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { Mypipe, SquarePipe } from './my-pipe';

@NgModule({
  declarations: [TestingComponent, Mypipe, SquarePipe],
  providers: [CurrencyPipe],
  imports: [CommonModule, TestingRoutingModule],
})
export class TestingModule {}
