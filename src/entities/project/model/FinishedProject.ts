import {Money} from "@/src/shared/models/common";
import {ProjectStatus} from "@/src/entities/project/model/enum/ProjectStatus";

export interface FinishedProject {
    uuid: string;
    paymentCode?: string;
    photo?: string;
    interestRate?: number;
    initialTerm: number;
    targetSum: Money;
    status: ProjectStatus;
    investedSum?: Money;
    mortgageRank?: string;
}