import styles from "./InputPhone.module.scss";
import { SyntheticEvent } from "react";
import ReactInputMask from "react-input-mask";
import { Phone } from "@/src/entities/phone/models";

type Props = {
    phone: Phone;
    setPhone: (phone: Phone) => void;
    error?: boolean;
};

const InputPhone = ({ phone, setPhone }: Props) => {
    const handleNumber = (number: string) => {
        setPhone({ countryCode: phone.countryCode, number: number.replace(/[^0-9]/g, "") });
    };
    return (
        <div className={styles.input_phone}>
            <span className={styles.input_phone__country_code}>
                +7
            </span>
            <ReactInputMask
                placeholder="000 000000"
                mask="(999) 999-99-99"
                className={styles.input_phone__input}
                value={phone.number}
                onChange={(event: SyntheticEvent) => handleNumber((event.target as HTMLInputElement).value)}
            />
        </div>
    );
};

export default InputPhone;
