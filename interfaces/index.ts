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
    getMakesFromYears: (year: string) => void,
    getModelsFromMakes: (year: string) => void,
    getVehiclesFromModel: (year: string) => void
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

export type ComplaintMessage = {
    odiNumber: string,
    crash: boolean,
    fire: boolean,
    numberOfInjuries: number,
    numberOfDeaths: number,
    dateOfIncident: string,
    dateComplaintFiled: string,
    components: string,
    summary: string,
}

export type RecallMessage = {
    NHTSACampaignNumber: string
    ReportReceivedDate: string,
    Component: string,
    Summary: string,
    Remedy: string,
    ModelYear: string
}

export type SafetyReportChunk = {
    mainLabel?: string,
    secLabel?: string,
    thrdLabel?: string,
    picUrl?: string,
    vidUrl?: string
}

export type SafetyRankReport = {
    ModelYear?: string
    Make?: string
    Model?: string
    VehicleDescription?: string
    VehiclePicture?: string

    OverallRating?: string
    //-
    OverallFrontCrashRating?: string
    FrontCrashDriversideRating?: string
    FrontCrashPassengersideRating?: string
    FrontCrashPicture?: string
    FrontCrashVideo?: string

    OverallSideCrashRating?: string
    SideCrashDriversideRating?: string
    SideCrashPassengersideRating?: string
    SideCrashPicture?: string
    SideCrashVideo?: string

    RolloverRating?: string
    RolloverPossibility?: string

    SidePoleCrashRating?: string
    SidePolePicture?: string
    SidePoleVideo?: string
    //--
    NHTSAElectronicStabilityControl?: string
    NHTSAForwardCollisionWarning?: string
    NHTSALaneDepartureWarning?: string
    ComplaintsCount?: string
    RecallsCount?: string
}
