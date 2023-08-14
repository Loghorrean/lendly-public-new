import { Phone } from "@/src/entities/phone/models/Phone";
import { COUNTRY_CODE } from "@/src/entities/phone/models/CountryCode";

export const createDefaultPhone = (): Phone => {
    return {
        countryCode: COUNTRY_CODE.RU,
        number: "",
    };
};
