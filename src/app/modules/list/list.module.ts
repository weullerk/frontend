import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ListService } from './services/list.service';

import { ListComponent } from './components/list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    InfiniteScrollModule
  ],
  declarations: [ListComponent],
  providers: [ListService]
})
export class ListModule { }
