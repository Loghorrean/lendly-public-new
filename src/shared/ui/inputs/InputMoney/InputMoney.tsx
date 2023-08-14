import React, { PropsWithChildren, useId, useMemo } from "react";
import { Money } from "@/src/shared/models/common";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import CurrencyInput from "react-currency-input-field";
import { CurrencyInputProps } from "react-currency-input-field/src/components/CurrencyInputProps";
import styles from "./InputMoney.module.scss";

type Props = CurrencyInputProps & {
    money: Money;
    onValueChanged: (money: Money) => void;
    boundaries?: {
        min?: number;
        max?: number;
    };
};

const InputMoney = ({ money, onValueChanged, children, ...props }: PropsWithChildren<Props>) => {
    const id = useId();
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
        <CommonInput id={id}>
            <CommonInput.Container className={styles.input_money_container}>
                <CurrencyInput
                    {...props}
                    value={inputValue}
                    onChange={event => updateValue(event.target.value)}
                    className={styles.input_money}
                    prefix="₽"
                />
                {children}
            </CommonInput.Container>
        </CommonInput>
    );
};

export default InputMoney;
