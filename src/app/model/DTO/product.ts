import { Guid } from "guid-typescript";

export class ConsigneeProducts {
    public address : string;
    public companyName :string;
    public consigneeId : Guid;
    public name : string;
    public phone : string;
    public extension : string;
}

export class ShipperProducts {
    public address : string;
    public companyName :string;
    public consigneeId : Guid;
    public name : string;
    public phone : string;
    public extension : string;
}

export class allProduct {
    public consignee : ConsigneeProducts;
    public shipOrderId: Guid;
    public shipperId: Guid;
    public shipperPhone: string;
    public shipperExtension: string;
    public shipperName: string;
    public shipperCompanyName: string;
    public shipperAddress: string;
    public consigneeId: Guid;
    public consigneeName: string;
    public consigneeCompanyName: string;
    public consigneePhone: string;
    public consigneeExtension: string;
    public consigneeAddress: string;
    public quantity: Int32Array;
    public deliveryDate: Date;
    public deliveryPeriod: string;
    public deliveryWay: string;
    public productName: string;
    public companyName: string;
    public shipDate: Date;
    public contractPriceId: Guid;
    public specialServiceChargeId: Guid;
    public specialServiceChargeDescription: string;
    public specialServiceCharge1: Float32Array;
    public serviceCode: Int32Array;
    public transitChargeId: Guid;
    public transitChargeDescription: string;
    public transitCharge1: Float32Array;
    public transitCode: Int32Array;
    public shippingCharge: Float32Array;
    public pickUpCharge: Float32Array;
    public terminalCharge: Float32Array;
    public specialServiceCharge: Float32Array;
    public transitCharge: Float32Array;
    public otherCharge: Float32Array;
    public totalFreight: Float32Array;
    public shippingStation: string;
    public endStation: string;
    public version: Int32Array;
    public orderStatus: string;
    public trackingNumber: Int32Array
}

// export class OutProducts {
//     public id : Guid;
//     public date : Date;
//     public value1 : string;
//     public value2 : string;
// }

// export class InShipper {
//     public ShipperID : Guid;
//     public Phone : string;
//     public Extension : string;
//     public Name : string;
//     public CompanyName : string;
//     public Address : string;
// }

// export class OutShipper {
//     public ShipperID : Guid;
//     public Phone : string;
//     public Extension : string;
//     public Name : string;
//     public CompanyName : string;
//     public Address : string;
// }

// export class InConsignee {
//     public ConsigneeID : Guid;
//     public Phone : string;
//     public Extension : string;
//     public Name : string;
//     public CompanyName : string;
//     public Address : string;
// }

// export class OutConsignee {
//     public ConsigneeID : Guid;
//     public Phone : string;
//     public Extension : string;
//     public Name : string;
//     public CompanyName : string;
//     public Address : string;
// }