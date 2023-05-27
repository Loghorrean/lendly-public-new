import styles from "./PasswordInputContainer.module.scss";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import React, { FC, useRef } from "react";
import { CommonInputContainerProps } from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputContainer/CommonInputContainer";
import { cn, useEffectOnUpdate } from "@/src/shared/utils";
import { HideSvg, VisibleSvg } from "@/src/shared/ui/svg/password";
import Button from "../../../../buttons/Button";
import { usePasswordInputContext } from "@/src/shared/ui/inputs/PasswordInput/context/PasswordInputContext";
import AsLink from "@/src/shared/ui/buttons/decorators/AsLink";

const PasswordInputContainer: FC<CommonInputContainerProps> = ({ children, ...props }) => {
    const { toggle, active } = usePasswordInputContext();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    useEffectOnUpdate(() => {
        buttonRef.current?.focus();
    }, [active]);
    return (
        <CommonInput.Container {...props} className={cn(styles.password_input_container, props.className)}>
            {children}
            <AsLink>
                <Button
                    ref={buttonRef}
                    className={styles.password_input_container__button}
                    onClick={toggle}
                    aria-pressed={active}
                    type="button"
                >
                    {active ? <HideSvg /> : <VisibleSvg />}
                </Button>
            </AsLink>
        </CommonInput.Container>
    );
};

export default PasswordInputContainer;
