import { Observable, from } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { allProduct } from '../model/DTO/product';
import { EditService } from '../edit.service';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { OutShipOrder } from '../viewmodel/out-result';
import { ShipOrder } from '../model/BLL/ship-order';
import { InResult } from '../viewmodel/in-result';
import { OutShipOrderDetail } from '../viewmodel/out-result'
import { PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
    public view: Observable<GridDataResult>;
    public skip = 0;
    public pageSize = 10;

    // public gridState: State = {
    //     sort: [],
    //     skip: 0,
    //     take: 10
    //   };


    public formGroup: FormGroup;
    public gridData: allProduct[];
    public gridView;
    // public outshiporder: OutShipOrder ;
    // public result = InShipper;

    private editService: EditService;
    private editedRowIndex: number;
    //http://localhost:4210/api/ShipOrders/GetShipOrder
    constructor(@Inject(EditService) editServiceFactory: any, public _http: HttpClient, public ShipOrder: ShipOrder) {
        this.editService = editServiceFactory();
        this.loadItems();
    }

    private loadItems(): void {
        this.ShipOrder.GetProc().subscribe(x => {
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

    ngOnInit() {
        // this.ShipOrder.GetProc().subscribe(x => {
        //     this.gridData = x.result;
        //     console.log(this.gridData)
        // });
    }

    public state: State = {
        sort: [],
        take: 10,

        filter: {
            logic: 'and',
            filters: []
        }
    };



    // public onStateChange(state: State) {
    //     this.gridState = state;
    //     this.OilBLO.Getdetail().subscribe(data => {
    //       this.gridData = data.result;
    //       console.log(this.gridData);
    //     });
    //     // this.editService.read();
    //   }

    // public onStateChange(state: State) {
    //     this.gridState = state;

    //     this.editService.read();
    // }

    public addHandler({ sender }) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup({
            'consigneeId': new FormControl(''),
            'shipOrderId': new FormControl(''),
            'quantity': new FormControl(''),

            // 'consignee':new FormGroup({
            //     'id':new FormControl(''),
            //     'name':new FormControl(''),
            // }),
            'consigneeName': new FormControl(''),
            'productName': new FormControl(''),
            'shipperName': new FormControl(''),
            'deliveryDate': new FormControl(''),
            'deliveryPeriod': new FormControl(''),
            'deliveryWay': new FormControl(''),
            'shippingCharge': new FormControl(''),
            'pickUpCharge': new FormControl(''),
            'terminalCharge': new FormControl(''),
            'specialServiceCharge': new FormControl(''),
            'transitCharge': new FormControl(''),
            'otherCharge': new FormControl(''),
            'totalFreight': new FormControl(''),
            'shippingStation': new FormControl(''),
            'endStation': new FormControl(''),
            'trackingNumber': new FormControl(''),
            'version': new FormControl(''),
            'shipDate': new FormControl(''),
            // 'transitChargeDescription': new FormControl(''),
            // 'specialServiceChargeDescription': new FormControl(''),
        });

        sender.addRow(this.formGroup);
    }

    public editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup({
            'specialServiceChargeId': new FormControl(dataItem.specialServiceChargeId),
            'transitChargeId': new FormControl(dataItem.transitChargeId),
            'shipperId': new FormControl(dataItem.shipperId),
            'consigneeId': new FormControl(dataItem.consigneeId),
            'shipOrderId': new FormControl(dataItem.shipOrderId),
            'quantity': new FormControl(dataItem.quantity),

            // 'consignee':new FormGroup({
            //     'id':dataItem.ID,
            //     'name':new FormControl(dataItem.consigneeName),
            // }),
            'consigneeName': new FormControl(dataItem.consigneeName),
            'productName': new FormControl(dataItem.productName),
            'shipperName': new FormControl(dataItem.shipperName),
            'deliveryDate': new FormControl(dataItem.deliveryDate),
            'deliveryPeriod': new FormControl(dataItem.deliveryPeriod),
            'deliveryWay': new FormControl(dataItem.deliveryWay),
            'shippingCharge': new FormControl(dataItem.shippingCharge),
            'pickUpCharge': new FormControl(dataItem.pickUpCharge),
            'terminalCharge': new FormControl(dataItem.terminalCharge),
            'specialServiceCharge': new FormControl(dataItem.specialServiceCharge),
            'transitCharge': new FormControl(dataItem.transitCharge),
            'otherCharge': new FormControl(dataItem.otherCharge),
            'totalFreight': new FormControl(dataItem.totalFreight),
            'shippingStation': new FormControl(dataItem.shippingStation),
            'endStation': new FormControl(dataItem.endStation),
            'orderStatus': new FormControl(dataItem.orderStatus),
            'trackingNumber': new FormControl(dataItem.trackingNumber),
            'version': new FormControl(dataItem.version),
            'shipDate': new FormControl(dataItem.shipDate),
            // 'transitChargeDescription': new FormControl(''),
            // 'specialServiceChargeDescription': new FormControl(''),

            // 'phone': new FormControl(dataItem.phone, Validators.required),
            // 'extension': new FormControl(dataItem.extension),
            // 'name': new FormControl(
            //     dataItem.name,
            //     Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
            // 'companyName': new FormControl(dataItem.companyName),
            // 'address': new FormControl(dataItem.address)
        });

        this.editedRowIndex = rowIndex;

        sender.editRow(rowIndex, this.formGroup);
    }

    public cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
    }

    public saveHandler({ sender, rowIndex, formGroup, isNew }) {
        // const outresult: OutResult = formGroup.value;
        if (isNew == true) {
            var outshiporder = new OutShipOrder();
            outshiporder.ShipOrderId = formGroup.value.shipOrderId;
            outshiporder.Quantity = formGroup.value.quantity;

            outshiporder.ProductName = formGroup.value.productName;
            outshiporder.ConsigneeName = formGroup.value.consigneeName;

            outshiporder.ShipperName = formGroup.value.shipperName;
            outshiporder.DeliveryDate = formGroup.value.deliveryDate;
            outshiporder.DeliveryPeriod = formGroup.value.deliveryPeriod;
            outshiporder.DeliveryWay = formGroup.value.deliveryWay;
            outshiporder.ShippingCharge = formGroup.value.shippingCharge;
            outshiporder.PickUpCharge = formGroup.value.pickUpCharge;
            outshiporder.TerminalCharge = formGroup.value.terminalCharge;
            outshiporder.SpecialServiceCharge = formGroup.value.specialServiceCharge;
            outshiporder.TransitCharge = formGroup.value.transitCharge;
            outshiporder.OtherCharge = formGroup.value.otherCharge;
            outshiporder.TotalFreight = formGroup.value.totalFreight;
            outshiporder.ShippingStation = formGroup.value.shippingStation;
            outshiporder.EndStation = formGroup.value.endStation;
            outshiporder.OrderStatus = formGroup.value.orderStatus;
            outshiporder.TrackingNumber = formGroup.value.trackingNumber;
            outshiporder.Version = formGroup.value.version;
            outshiporder.ShipDate = formGroup.value.shipDate;
            // outshiporder.TransitChargeDescription = formGroup.value.transitChargeDescription;
            // outshiporder.SpecialServiceChargeDescription = formGroup.value.specialServiceChargeDescription;

            // outshiporder.CompanyName = formGroup.value.companyName;

            // this.ShipOrder.CreateProc(outshiporder).subscribe(res => {
            //     this.refresh();
            // })
        }
        else {
            var outshiporder = new OutShipOrder();
            outshiporder.ShipperId = formGroup.value.shipperId;
            outshiporder.ConsigneeId = formGroup.value.consigneeId;
            outshiporder.ProductName = formGroup.value.productName;
            outshiporder.SpecialServiceChargeId = formGroup.value.specialServiceChargeId;
            outshiporder.TransitChargeId = formGroup.value.transitChargeId;
            outshiporder.ShipOrderId = formGroup.value.shipOrderId;
            outshiporder.Quantity = formGroup.value.quantity;
            outshiporder.ConsigneeName = formGroup.value.consigneeName;
            outshiporder.ShipperName = formGroup.value.shipperName;
            outshiporder.DeliveryDate = formGroup.value.deliveryDate;
            outshiporder.DeliveryPeriod = formGroup.value.deliveryPeriod;
            outshiporder.DeliveryWay = formGroup.value.deliveryWay;
            outshiporder.ShippingCharge = formGroup.value.shippingCharge;
            outshiporder.PickUpCharge = formGroup.value.pickUpCharge;
            outshiporder.TerminalCharge = formGroup.value.terminalCharge;
            outshiporder.SpecialServiceCharge = formGroup.value.specialServiceCharge;
            outshiporder.TransitCharge = formGroup.value.transitCharge;
            outshiporder.OtherCharge = formGroup.value.otherCharge;
            outshiporder.TotalFreight = formGroup.value.totalFreight;
            outshiporder.ShippingStation = formGroup.value.shippingStation;
            outshiporder.EndStation = formGroup.value.endStation;
            outshiporder.OrderStatus = formGroup.value.orderStatus;
            outshiporder.TrackingNumber = formGroup.value.trackingNumber;
            outshiporder.Version = formGroup.value.version;
            outshiporder.ShipDate = formGroup.value.shipDate;
            // outshiporder.TransitChargeDescription = formGroup.value.transitChargeDescription;
            // outshiporder.SpecialServiceChargeDescription = formGroup.value.specialServiceChargeDescription;

            this.ShipOrder.UpdateProc(outshiporder).subscribe(res => {
                this.refresh();
            })
        }

        sender.closeRow(rowIndex);
    }

    refresh() {
        return this._http.get<InResult>('http://localhost:5003/api/ShipOrders/GetShipOrder').
            toPromise().then(res => {
                this.gridData = res.result;

                for (let i = 0; i < this.gridData.length; i++) {
                    this.gridData[i].shipperName = res.result[i].shipper.name;
                }
                for (let i = 0; i < this.gridData.length; i++) {
                    this.gridData[i].consigneeName = res.result[i].consignee.name;
                }
            }
            )

    }

    public removeHandler({ dataItem }) {

        var outshiporder = new OutShipOrder();
        outshiporder.ShipOrderId = dataItem.shipOrderId;
        outshiporder.TrackingNumber = dataItem.trackingNumber;
        this.ShipOrder.DeleteProc(outshiporder).subscribe(res => {
            this.refresh();
        })
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    }
}
