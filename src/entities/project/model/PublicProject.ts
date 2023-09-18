import {ProjectStatus, ProjectType} from "@/src/entities/project/model/enum";
import {Money} from "@/src/shared/models/common";

export interface PublicProject {
    uuid: string;
    type: ProjectType;
    paymentCode?: string;
    photo?: string;
    interestRate?: number;
    initialTerm?: number;
    targetSum: Money;
    status: ProjectStatus;
    investedSum?: Money;
    collateralSum?: Money;
    mortgageRank?: string;
    ltv?: number;
}