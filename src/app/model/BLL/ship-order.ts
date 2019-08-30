import { ShipOrdero } from '../DAL/ship-order';
import { Injectable } from '@angular/core';
import { OutShipOrder } from '../../viewmodel/out-result';
import { OutShipOrderDetail } from '../../viewmodel/out-result';
import { CreateAllList } from '../../viewmodel/out-result';

@Injectable()
export class ShipOrder {
    constructor(public ShipOrdero:ShipOrdero){}
    public GetProc()
    {
        return this.ShipOrdero.GetProc();
    }
    public CreateProc(createalllist:CreateAllList)
    {
        return this.ShipOrdero.CreateProc(createalllist);
    }
    public UpdateProc(outshiporder:OutShipOrder)
    {
        return this.ShipOrdero.UpdateProc(outshiporder);
    }
    public DeleteProc(outshiporder:OutShipOrder)
    {
        return this.ShipOrdero.DeleteProc(outshiporder);
    }
    public GetDetailProc()
    {
        return this.ShipOrdero.GetDetailProc();
    }
    public CreateDetailProc(outshiporderdetail:OutShipOrderDetail)
    {
        return this.ShipOrdero.CreateDetailProc(outshiporderdetail);
    }
    public UpdateDetailProc(outshiporderdetail:OutShipOrderDetail)
    {
        return this.ShipOrdero.UpdateDetailProc(outshiporderdetail);
    }
    public DeleteDetailProc(outshiporderdetail:OutShipOrderDetail)
    {
        return this.ShipOrdero.DeleteDetailProc(outshiporderdetail);
    }
}
