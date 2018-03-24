import { ExtractItem } from '../models/extract-item.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {

  private GET_EXTRACT_URL = 'http://www.mocky.io/v2/5ab55ea8300000831b82799d';

  constructor(private httpClient: HttpClient) {}

  getExtract(): Observable<ExtractItem[]> {
    return this.httpClient.get<ExtractItem[]>(this.GET_EXTRACT_URL, {observe: 'body', responseType: 'json'});
  }
}
