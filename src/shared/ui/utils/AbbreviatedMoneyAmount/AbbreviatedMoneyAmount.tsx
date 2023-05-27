"use client";

type Props = {
    amount: number;
};

const AbbreviatedMoneyAmount = ({ amount }: Props) => {
    if (amount >= 1000 && amount <= 999999) {
        return <>{`${amount / 1000} тысяч`}</>;
    }
    if (amount >= 1000000 && amount <= 999999999) {
        return <>{`${amount / 1000000} миллионов`}</>;
    }
    console.warn(`Given amount ${amount} could not be rendered in abbreviated format`);
    return <></>;
};

export default AbbreviatedMoneyAmount;
