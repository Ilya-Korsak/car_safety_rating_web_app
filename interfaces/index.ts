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
/*
export type RankReport = {
    VehiclePicture	:	https://static.nhtsa.gov/images/vehicles/8422_st0640_046.png
OverallRating	:	4
OverallFrontCrashRating	:	4
FrontCrashDriversideRating	:	4
FrontCrashPassengersideRating	:	3
FrontCrashPicture	:	https://static.nhtsa.gov/crashTest/images/2013/v07755P078.jpg
FrontCrashVideo	:	https://static.nhtsa.gov/crashTest/videos/2013/v07755C021.wmv
OverallSideCrashRating	:	5
SideCrashDriversideRating	:	5
SideCrashPassengersideRating	:	5
SideCrashPicture	:	https://static.nhtsa.gov/crashTest/images/2013/v07753P104.jpg
SideCrashVideo	:	https://static.nhtsa.gov/crashTest/videos/2013/v07753C013.wmv
combinedSideBarrierAndPoleRating-Front	:	5
combinedSideBarrierAndPoleRating-Rear	:	5
sideBarrierRating-Overall	:	5
RolloverRating	:	3
RolloverPossibility	:	0.246
SidePoleCrashRating	:	5
SidePolePicture	:	https://static.nhtsa.gov/crashTest/images/2013/v07756P070.jpg
SidePoleVideo	:	https://static.nhtsa.gov/crashTest/videos/2013/v07756C014.wmv
NHTSAElectronicStabilityControl	:	Standard
NHTSAForwardCollisionWarning	:	No
NHTSALaneDepartureWarning	:	No
ComplaintsCount	:	30
RecallsCount	:	6
}
*/