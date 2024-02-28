import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private itemData: any[] = [];
  constructor() {}

  setData(data: any) {
    this.itemData = data;
  }

  getData() {
    return this.itemData;
  }
}
