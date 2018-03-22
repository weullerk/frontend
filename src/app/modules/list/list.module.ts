import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list.component';
import { MaterialModule } from '../material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {ListService} from './services/list.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  declarations: [ListComponent],
  providers: [ListService]
})
export class ListModule { }
