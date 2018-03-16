export class Qualification {
    qual_date: Date;
    score: number;
    hits: number;
    shots: number;
    firearmUsed: number;
    firearmType: string;
    manufacturer: string;
    modelName: string;
    caliber: string;
    serial: string;
    image: string;
    remarks: string;
    daynight: string;
    sightingDevice: string;
    instructor: string;

    constructor(qual_date: Date,
        score: number,
        hits: number,
        shots: number,
        firearmUsed: number,
        firearmType: string,
        manfacturer: string,
        modelName: string,
        caliber: string,
        serial: string,
        image: string,
        remarks: string,
        daynight: string,
        sightingDevice: string,
        instructor: string) {
            this.qual_date = qual_date;
            this.score = score;
            this.hits = hits;
            this.shots = shots;
            this.firearmUsed = firearmUsed;
            this.firearmType = firearmType;
            this.manufacturer = manfacturer;
            this.modelName = modelName;
            this.caliber = caliber;
            this.serial = serial;
            this.image = image;
            this.remarks = remarks;
            this.daynight = daynight;
            this.sightingDevice = sightingDevice;
            this.instructor = instructor;
        }
}
