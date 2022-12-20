import { type } from "os";

export type YearOption = {
    ModelYear: string
};
export type MakeOption = {
    Make: string
};
export type ModelOption = {
    Model: string
}

export type VehicleRatingID = {
    VehicleDescription: string,
    VehicleId: string
}

export type FilterActions = {
    getMakesFromYears: (year:string)=>void,
    getModelsFromMakes: (year:string)=>void,
    getVehiclesFromModel: (year:string)=>void
}

//to refactor
export type FilterQuery = {
    mode: RequestType,
    year: string,
    make: string,
    model: string
}

export type YearsResponse = {
    data: YearOption[],
    mode: RequestType,
}

export enum RequestType {
    COMPLAINTS = "complaints",
    RECALLS = "recalls",
    RATINGS = "ratings",
}
//NOT SAFE! booo...
export const toRequestType = (value: string) =>{
    return (<any>RequestType)[value];
  }