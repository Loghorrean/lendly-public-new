import { ObjectValues } from "@/src/shared/utils";

const CURRENCY_SYMBOL = {
    RUB: "₽",
    USD: "$",
    EUR: "€",
} as const;

export type CurrencySymbol = ObjectValues<typeof CURRENCY_SYMBOL>;

const defaultCurrencySymbol = CURRENCY_SYMBOL.USD;

type Props = {
    currencyCode: string;
};

//TODO: RESOLVE MULTILANGUAGE TASK (IF LANGUAGE CHANGES, SHOULD CURRENCY CHANGE TOO?)
const CurrencySymbol = ({ currencyCode }: Props) => {
    return currencyCode in CURRENCY_SYMBOL ? (
        <>{CURRENCY_SYMBOL[currencyCode as keyof typeof CURRENCY_SYMBOL]}</>
    ) : (
        <>{defaultCurrencySymbol}</>
    );
};

export default CurrencySymbol;
