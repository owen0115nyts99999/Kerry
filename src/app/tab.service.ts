import { Injectable } from '@angular/core';
import { ITab } from './tab.model';
 
@Injectable({
  providedIn: 'root',
})
export class TabService {
  tabs: ITab[] = [];
  tabOptions: ITab[] = [{ name: '託運單查詢', url: '/movies' }, { name: '託運單登入',   url: '/songs' }
  , { name: '包裹登入',   url: '/thing' }];
 
  constructor() {}

  addTab(url: string) {
    const tab = this.getTabOptionByUrl(url);
    this.tabs.push(tab);
  }
   
  getTabOptionByUrl(url: string): ITab {
    return this.tabOptions.find(tab => tab.url === url);
  }
   
  deleteTab(index: number) {
    this.tabs.splice(index, 1);
  }
}