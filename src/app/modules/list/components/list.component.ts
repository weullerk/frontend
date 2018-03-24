import { Component, OnInit } from '@angular/core';
import { ExtractItem } from '../models/extract-item.model';
import { ListService } from '../services/list.service';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  throttle = 150;
  scrollDistance = 3;
  loadingExtract = false;
  showLoading = false;
  itens: ExtractItem[] = [];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getExtract().subscribe((itens: ExtractItem[]) => {
      this.itens.push(...itens.slice());
      this.itens.push(...itens.slice());
    }, (error: any) => {
      //
    });
  }

  onScrollDown (e) {
    this.loadingExtract = true;
    this.showLoading = false;

    this.listService.getExtract().subscribe((itens: ExtractItem[]) => {
      this.itens.push(...itens.slice());
      this.loadingExtract = false;
      this.showLoading = false;
    });

    timer(150).subscribe(
      () => this.showLoading = this.loadingExtract === true || false
    );

  }

}
