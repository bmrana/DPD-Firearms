export class Firearm {
    id: number;
    firearmType: string;
    serial: string;
    caliber: string;
    caliberID: number;
    owner: string;
    isPrimary: boolean;
    manufacturer: string;
    manufacturerID: number;
    modelName: string;
    modelID: number;

    constructor(
        id: number,
        firearmType: string,
        serial: string,
        caliber: string,
        caliberID: number,
        owner: string,
        isPrimary: boolean,
        manufacturer: string,
        manufacturerID: number,
        modelName: string,
        modelID: number
    ) {
        this.id = id;
        this.firearmType = firearmType;
        this.serial = serial;
        this.caliber = caliber;
        this.caliberID = caliberID;
        this.owner = owner;
        this.isPrimary = isPrimary;
        this.manufacturer = manufacturer;
        this.manufacturerID = manufacturerID;
        this.modelName = modelName;
        this.modelID = modelID;
    }
}
