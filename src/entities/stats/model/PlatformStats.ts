import {Money} from "@/src/shared/models/common";

export interface PlatformStats {
    countInvestors: number;
    averageInterestRate: number;
    averageInitialTerm: number;
    averageLtv: number;
    totalInvestments: Money;
}
