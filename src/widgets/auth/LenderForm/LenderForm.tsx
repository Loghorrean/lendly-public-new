"use client";

import {SyntheticEvent, useState} from "react";
import styles from "./LenderForm.module.scss";
import {cn, ObjectValues, resultIf, sleep, useToggle} from "@/src/shared/utils";
import CommonAuthBlock from "@/src/widgets/auth/CommonAuthBlock";
import TertiaryHeading from "@/src/shared/ui/typography/Heading/decorators/TertiaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import AuthLink from "@/src/widgets/auth/AuthLink";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import PasswordInput from "@/src/shared/ui/inputs/PasswordInput";
import {Checkbox, RadioButton} from "@/src/shared/ui/form";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {Button} from "@/src/shared/ui/buttons";
import Loader from "@/src/shared/ui/loaders/Loader";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";

const REGISTRATION_TYPE = {
    INDIVIDUAL: "INDIVIDUAL",
    ENTREPRENEUR: "ENTREPRENEUR",
    LEGAL: "LEGAL"
} as const;

type RegistrationType = ObjectValues<typeof REGISTRATION_TYPE>;

const LenderForm = () => {
    const [selectedType, setSelectedType] = useState<RegistrationType>(REGISTRATION_TYPE.INDIVIDUAL);
    const [loading, setLoading] = useState(false);
    const [infoAgreed, toggleInfo] = useToggle();
    const [rulesAccepted, toggleRules] = useToggle();
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        setLoading(true);
        await sleep(2000);
        setLoading(false);
    }
    return (
        <CommonAuthBlock className={styles.lender_form_block}>
            <form onSubmit={handleSubmit} className={styles.lender_form}>
                <TertiaryHeading>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.lender_form__heading}>
                        Регистрация инвестора
                    </Heading>
                </TertiaryHeading>
                <AuthLink href="/auth/login">
                    Я уже являюсь пользователем
                </AuthLink>
                <div className={styles.lender_form__inputs}>
                    <div className={styles.lender_form__group}>
                        <CommonLabel htmlFor="name">
                            Имя
                        </CommonLabel>
                        <CommonInput id="name">
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="Иванов Иван Иванович" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.lender_form__group}>
                        <CommonLabel htmlFor="email">
                            E-mail
                        </CommonLabel>
                        <CommonInput id="email">
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="ivan@example.com" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.lender_form__group}>
                        <CommonLabel htmlFor="password">
                            Пароль
                        </CommonLabel>
                        <PasswordInput id="password">
                            <PasswordInput.Container>
                                <PasswordInput.Input placeholder="Пароль" />
                            </PasswordInput.Container>
                        </PasswordInput>
                    </div>
                </div>
                <div className={styles.lender_form__radio}>
                    <RadioButton
                        checked={selectedType === REGISTRATION_TYPE.INDIVIDUAL}
                        onChange={() => setSelectedType(REGISTRATION_TYPE.INDIVIDUAL)}
                    >
                        Физ. лицо
                    </RadioButton>
                    <RadioButton
                        checked={selectedType === REGISTRATION_TYPE.ENTREPRENEUR}
                        onChange={() => setSelectedType(REGISTRATION_TYPE.ENTREPRENEUR)}
                    >
                        ИП
                    </RadioButton>
                    <RadioButton
                        checked={selectedType === REGISTRATION_TYPE.LEGAL}
                        onChange={() => setSelectedType(REGISTRATION_TYPE.LEGAL)}
                    >
                        Юр. лицо
                    </RadioButton>
                </div>
                <div className={styles.lender_form__checkboxes}>
                    <Checkbox checked={infoAgreed} onChange={toggleInfo}>
                        Согласен на <ExternalLink href="https://youtube.com" className={styles.lender_form__external}>
                        информационное взаимодействие
                    </ExternalLink>
                    </Checkbox>
                    <Checkbox checked={rulesAccepted} onChange={toggleRules}>
                        Согласен с <ExternalLink href="https://youtube.com" className={styles.lender_form__external}>
                        правилами пользования платформой
                    </ExternalLink>
                    </Checkbox>
                </div>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} wide arrow>
                    <Button type="submit" className={cn(
                        styles.lender_form__submit,
                        resultIf(loading, styles.lender_form__submit___loading)
                    )}>
                        { loading ? <Loader /> : <>
                            Зарегистрироваться
                            <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                        </> }
                    </Button>
                </PrimaryButton>
            </form>
        </CommonAuthBlock>
    );
}

export default LenderForm;
