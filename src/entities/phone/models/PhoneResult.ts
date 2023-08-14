import { Phone } from "@/src/entities/phone/models/Phone";

export interface PhoneResult {
    readonly phone: Phone;
    readonly phoneVerified: boolean;
}
