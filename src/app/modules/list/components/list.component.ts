import { Component, OnInit } from '@angular/core';
import { Consumo } from '../models/consumo.model';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  throttle = 300;
  scrollDistance = 2;
  itens: Consumo[] = [];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.itens.push(...this.listService.getConsumo());
    this.itens.push(...this.listService.getConsumo());
    this.itens.push(...this.listService.getConsumo());
  }

  onScrollDown (ev) {
    this.itens.push(...this.listService.getConsumo());
  }

}
