import { Guid } from "guid-typescript";

export class OutResult {
    public Phone: string;
    public ShipperId: Guid;
    public Extension: string;
    public Name: string;
    public CompanyName: string;
    public Address: string;
}

export class OutShipOrder {

    // public ShipOrderDetailsId: Guid;
    // public SigningDate: Date;
    // public SquareFeet: Float32Array;
    // public Kilogram: Float32Array;
    // public ValueDeclaredAmount: Float32Array;
    public ShipOrderId: Guid;

    public ShipperId: Guid;
    public ShipperPhone: string;
    public ShipperExtension: string;
    public ShipperName: string;
    public ShipperCompanyName: string;
    public ShipperAddress: string;
    public ConsigneeId: Guid;
    public ConsigneeName: string;
    public ConsigneeCompanyName: string;
    public ConsigneePhone: string;
    public ConsigneeExtension: string;
    public ConsigneeAddress: string;
    public Quantity: Int32Array;
    public DeliveryDate: Date;
    public DeliveryPeriod: string;
    public DeliveryWay: string;
    public ProductName: string;
    public CompanyName: string;
    public ShipDate: Date;
    public ContractPriceId: Guid;
    public SpecialServiceChargeId: Guid;
    public SpecialServiceChargeDescription: string;
    public SpecialServiceCharge1: Float32Array;
    public ServiceCode: Int32Array;
    public TransitChargeId: Guid;
    public TransitChargeDescription: string;
    public TransitCharge1: Float32Array;
    public TransitCode: Int32Array;
    public ShippingCharge: Float32Array;
    public PickUpCharge: Float32Array;
    public TerminalCharge: Float32Array;
    public SpecialServiceCharge: Float32Array;
    public TransitCharge: Float32Array;
    public OtherCharge: Float32Array;
    public TotalFreight: Float32Array;
    public ShippingStation: string;
    public EndStation: string;
    public Version: Int32Array;
    public OrderStatus: string;
    public TrackingNumber: Int32Array
}

export class OutShipOrderDetail {
    public ShipOrderDetailsId: Guid
    public SigningDate: Date
    public SquareFeet: Float32Array
    public Kilogram: Float32Array
    public ValueDeclaredAmount: Float32Array
    public TrackingNumber : Int32Array
}

export class CreateAllList {
    public ShipperId: Guid
    public ConsigneeId: Guid
    public ShipOrderId: Guid
    public SpecialServiceChargeId: Guid
    public TransitChargeId: Guid
    public ShipOrderDetailsId: Guid

    public ShipperPhone: string
    public ShipperExtension: string
    public ShipperName: string
    public ShipperCompanyName: string
    public ShipperAddress: string
    public ConsigneeName: string
    public ConsigneeCompanyName: string
    public ConsigneePhone: string
    public ConsigneeExtension: string
    public ConsigneeAddress: string
    public Quantity: Int32Array
    public DeliveryDate: Date
    public DeliveryPeriod: string
    public DeliveryWay: string
    public ProductName: string
    public CompanyName: string
    public ShipDate: Date
    public SpecialServiceChargeDescription: string
    public SpecialServiceCharge1: Float32Array
    public ServiceCode: Int32Array
    public TransitChargeDescription: string
    public TransitCharge1: Float32Array
    public TransitCode: Int32Array
    public ShippingCharge: Float32Array
    public PickUpCharge: Float32Array
    public TerminalCharge: Float32Array
    public SpecialServiceCharge: Float32Array
    public TransitCharge: Float32Array
    public OtherCharge: Float32Array
    public TotalFreight: Float32Array
    public ShippingStation: string
    public EndStation: string
    public OrderStatus: boolean
    public TrackingNumber: Int32Array

    public SigningDate: Date
    public SquareFeet: Float32Array
    public Kilogram: Float32Array
    public ValueDeclaredAmount: Float32Array
}

