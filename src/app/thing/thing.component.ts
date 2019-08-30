import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InResult } from '../viewmodel/in-result';
import { OutShipOrderDetail } from '../viewmodel/out-result';
import { ShipOrder } from '../model/BLL/ship-order';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
import { EditService } from '../edit.service';
import { State } from '@progress/kendo-data-query';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {

  constructor(@Inject(EditService) editServiceFactory: any, public _http: HttpClient, public ShipOrder: ShipOrder) {
    this.editService = editServiceFactory();
    this.loadItems();
  }

  public formGroup: FormGroup;
  private editService: EditService;
  public gridData;
  public pageSize = 10;
  public skip = 0;
  public gridView;
  private editedRowIndex: number;

  ngOnInit() {
  }

  public state: State = {
    sort: [],
    take: 10,

    filter: {
      logic: 'and',
      filters: []
    }
  };

  private loadItems(): void {
    this.ShipOrder.GetDetailProc().subscribe(x => {
      this.gridData = x.result;
      console.log(this.gridData)

      this.gridView = {
        data: this.gridData.slice(this.skip, this.skip + this.pageSize),
        total: this.gridData.length
      };
      this.refresh();
    })
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  submitForm(form: NgForm): void {
    // var createalllist = new CreateAllList();
    var outshiporderdetail: OutShipOrderDetail = form.value;
    // createalllist.DeliveryDate = new Date(createalllist.DeliveryDate);
    console.log(outshiporderdetail);
    console.log(outshiporderdetail.TrackingNumber);

    this.ShipOrder.CreateDetailProc(outshiporderdetail).subscribe(res => {
      this.refresh();
    })
    // }
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup({
      'trackingNumber': new FormControl(dataItem.trackingNumber),
      'shipOrderDetailsId': new FormControl(dataItem.shipOrderDetailsId),
      'kilogram': new FormControl(dataItem.kilogram),
      'squareFeet': new FormControl(dataItem.squareFeet),
      'valueDeclaredAmount': new FormControl(dataItem.valueDeclaredAmount)

    });

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew }) {
    // const outresult: OutResult = formGroup.value;
    if (isNew == true) {
      var outshiporderdetail = new OutShipOrderDetail();
      outshiporderdetail.Kilogram = formGroup.value.kilogram;
      outshiporderdetail.SquareFeet = formGroup.value.squareFeet;
      outshiporderdetail.ValueDeclaredAmount = formGroup.value.valueDeclaredAmount;
    }
    else {
      var outshiporderdetail = new OutShipOrderDetail();
      outshiporderdetail.Kilogram = formGroup.value.kilogram;
      outshiporderdetail.SquareFeet = formGroup.value.squareFeet;
      outshiporderdetail.ValueDeclaredAmount = formGroup.value.valueDeclaredAmount;
      outshiporderdetail.ShipOrderDetailsId = formGroup.value.shipOrderDetailsId;
      outshiporderdetail.TrackingNumber = formGroup.value.trackingNumber;

      this.ShipOrder.UpdateDetailProc(outshiporderdetail).subscribe(res => {
        this.refresh();
      })
    }

    sender.closeRow(rowIndex);
  }

  refresh() {
    return this._http.get<InResult>('http://localhost:5003/api/ShipOrderDetails/GetShipOrderDetails').
      toPromise().then(res => this.gridData = res.result);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public removeHandler({ dataItem }) {

    var outshiporderdetail = new OutShipOrderDetail();
    outshiporderdetail.ShipOrderDetailsId = dataItem.shipOrderDetailsId;
    this.ShipOrder.DeleteDetailProc(outshiporderdetail).subscribe(res => {
        this.refresh();
    })
}

}
