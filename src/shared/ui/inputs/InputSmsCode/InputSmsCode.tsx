import styles from "./InputSmsCode.module.scss";
import { SyntheticEvent, useMemo, useRef, KeyboardEvent } from "react";
import { appConfig } from "@/src/shared/configs";
import { cn, isNotEmpty, numbersOnly, resultIf, useEffectOnUpdate } from "@/src/shared/utils";

type Props = {
    code: string;
    onChange: (code: string) => void;
    error?: boolean;
    onCodeEntered: () => void;
};

const InputSmsCode = ({ code, onChange, onCodeEntered, error = false }: Props) => {
    const codeLength = useRef(appConfig.smsCodeLength);
    const handleInput = (event: SyntheticEvent) => {
        event.preventDefault();
        const value = (event.target as HTMLInputElement).value;
        if (numbersOnly(value)) {
            onChange(`${code}${value}`);
        }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
        const keyboardCode = event.code;
        if (code.length !== 0 && keyboardCode === "Backspace") {
            onChange(code.slice(0, -1));
        }
    };
    useEffectOnUpdate(() => {
        if (code.length === codeLength.current) {
            onCodeEntered();
        }
    }, [code]);
    const renderBlock = (index: number) => {
        const value: string | undefined = code[index];
        if (isNotEmpty(value)) {
            return <span className={styles.input_sms_code__text}>{value}</span>;
        }
        return code.length !== index ? (
            <span className={cn(styles.input_sms_code__text, styles.input_sms_code__text___empty)}>0</span>
        ) : (
            <input
                type="text"
                className={styles.input_sms_code__input}
                placeholder="0"
                autoFocus
                value=""
                onChange={handleInput}
                onKeyDown={handleKeyDown}
            />
        );
    };
    const renderBlocks = useMemo(() => {
        return Array(codeLength.current)
            .fill("")
            .map((element, index) => {
                return (
                    <div
                        key={index}
                        className={cn(
                            styles.input_sms_code__block,
                            resultIf(error, styles.input_sms_code__block___error)
                        )}
                    >
                        {renderBlock(index)}
                    </div>
                );
            });
    }, [code]);
    return <div className={styles.input_sms_code}>{renderBlocks}</div>;
};

export default InputSmsCode;
