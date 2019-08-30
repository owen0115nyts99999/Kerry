import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { OutShipOrder } from '../viewmodel/out-result';
import { HttpClient } from '@angular/common/http';
import { ShipOrder } from '../model/BLL/ship-order';
import { InResult } from '../viewmodel/in-result';
import { CreateAllList } from '../viewmodel/out-result';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor(public _http: HttpClient, public ShipOrder: ShipOrder) { }

  public gridData;

  ngOnInit() {
  }

  submitForm(form: NgForm): void {
    // var createalllist = new CreateAllList();
    var createalllist :CreateAllList = form.value;
    createalllist.DeliveryDate = new Date(createalllist.DeliveryDate);
    console.log(createalllist);
    console.log(createalllist.DeliveryDate);
    
      this.ShipOrder.CreateProc(createalllist).subscribe(res => {
        this.refresh();
      })
  }

  refresh() {
    return this._http.get<InResult>('http://localhost:5003/api/ShipOrders/GetShipOrder').
      toPromise().then(res => this.gridData = res.result);
  }


}
