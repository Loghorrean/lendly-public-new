import React, { FC, InputHTMLAttributes, useMemo } from "react";
import { Money } from "@/src/shared/models/common";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    money: Money;
    onValueChanged: (money: Money) => void;
    boundaries?: {
        min?: number;
        max?: number;
    };
    error: boolean;
    id: string;
}

//TODO: REFACTOR, ADD FORMATTING
const InputMoney: FC<Props> = ({ money, onValueChanged, error, id, ...props }) => {
    const inputValue = useMemo((): string => {
        if (money.amount === 0) {
            return "";
        }
        const amount = money.amount.toString();
        return amount.substring(0, amount.length - 2);
    }, [money]);

    const updateValue = (value: string) => {
        value = value.replace(/[^0-9]/g, "");
        const numberValue = parseInt(value + "00");
        onValueChanged({ amount: isNaN(numberValue) ? 0 : numberValue, currencyCode: money.currencyCode });
    };
    return (
        <CommonInput value={inputValue} onChange={updateValue} error={error} id={id}>
            <CommonInput.Container>
                <CommonInput.Input {...props} />
            </CommonInput.Container>
        </CommonInput>
    );
};

export default InputMoney;
