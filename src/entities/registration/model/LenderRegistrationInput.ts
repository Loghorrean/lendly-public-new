import {LenderType} from "@/src/entities/registration/model/LenderType";

export interface LenderRegistrationInput {
    name: string;
    email: string;
    password: string;
    type: LenderType;
}
