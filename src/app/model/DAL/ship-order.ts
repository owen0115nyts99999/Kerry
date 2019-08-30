import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InResult } from 'src/app/viewmodel/in-result';
import { OutShipOrder } from 'src/app/viewmodel/out-result';
import { OutResult } from 'src/app/viewmodel/out-result';
import { OutShipOrderDetail } from '../../viewmodel/out-result';
import { CreateAllList } from '../../viewmodel/out-result'

@Injectable()
export class ShipOrdero {
    constructor(public _http: HttpClient) {
    }
    public GetProc() {
        return this._http.get<InResult>('http://localhost:5003/api/ShipOrders/GetShipOrder')
    }
    public CreateProc(createalllist:CreateAllList) {
        return this._http.post<InResult>('http://localhost:5003/api/ShipOrderAll/CreateShipOrderAll',createalllist)
    }
    public UpdateProc(outshiporder:OutShipOrder) {
        console.log(outshiporder)
        console.log(outshiporder.Version)
        console.log(outshiporder.DeliveryDate)
        console.log(outshiporder.ShipDate)
        return this._http.post<InResult>('http://localhost:5003/api/ShipOrders/UpdateResult',outshiporder)
    }
    public DeleteProc(outshiporder:OutShipOrder) {
        console.log(outshiporder)
        console.log(outshiporder.ShipOrderId)
        console.log(outshiporder.TrackingNumber)
        return this._http.post<InResult>('http://localhost:5003/api/ShipOrders/DeleteGetShipOrderId',outshiporder)
    }
    public GetDetailProc()
    {
        return this._http.get<InResult>('http://localhost:5003/api/ShipOrderDetails/GetShipOrderDetails')
    }
    public CreateDetailProc(outshiporderdetail:OutShipOrderDetail) {
        return this._http.post<InResult>('http://localhost:5003/api/ShipOrderDetails/CreateResult',outshiporderdetail)
    }
    public UpdateDetailProc(outshiporderdetail:OutShipOrderDetail) {
        console.log(outshiporderdetail)
        return this._http.post<InResult>('http://localhost:5003/api/ShipOrderDetails/UpdateResult',outshiporderdetail)
    }
    public DeleteDetailProc(outshiporderdetail:OutShipOrderDetail) {
        console.log(outshiporderdetail)
        return this._http.post<InResult>('http://localhost:5003/api/ShipOrderDetails/DeleteResult',outshiporderdetail)
    }
}
