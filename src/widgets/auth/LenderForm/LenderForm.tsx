"use client";

import {SyntheticEvent, useState} from "react";
import styles from "./LenderForm.module.scss";
import {cn, resultIf, useToggle} from "@/src/shared/utils";
import CommonAuthBlock from "@/src/widgets/auth/CommonAuthBlock";
import TertiaryHeading from "@/src/shared/ui/typography/Heading/decorators/TertiaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import AuthLink from "@/src/widgets/auth/AuthLink";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import PasswordInput from "@/src/shared/ui/inputs/PasswordInput";
import {Checkbox, RadioButton} from "@/src/shared/ui/form";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {Button} from "@/src/shared/ui/buttons";
import Loader from "@/src/shared/ui/loaders/Loader";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {ProjectLink} from "@/src/shared/ui/links";
import {useTargetBlank} from "@/src/shared/utils/hooks/useTargetBlank";
import {useRegisterLenderMutation} from "@/src/entities/registration/hooks";
import {useActionMessages} from "@/src/shared/action-messages/store";
import {LENDER_TYPE, LenderType} from "@/src/entities/registration/model";
import {ACTION_MESSAGE_TYPE} from "@/src/shared/action-messages/model/ActionMessage";
import {useRouter} from "next/navigation";

const LenderForm = () => {
    const { addMessage } = useActionMessages();
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedType, setSelectedType] = useState<LenderType>(LENDER_TYPE.INDIVIDUAL);
    const [infoAgreed, toggleInfo] = useToggle();
    const [rulesAccepted, toggleRules] = useToggle();
    const { isLoading, mutateAsync } = useRegisterLenderMutation();
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        await mutateAsync({
            email,
            name,
            password,
            type: selectedType
        }, {
            onSuccess: () => {
                addMessage(ACTION_MESSAGE_TYPE.SUCCESS, "Вы успешно зарегистрировались!");
                router.push("/auth/login");
            }
        });
    }
    return (
        <CommonAuthBlock className={styles.lender_form_block}>
            <form onSubmit={handleSubmit} className={styles.lender_form}>
                <TertiaryHeading>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.lender_form__heading}>
                        Регистрация инвестора
                    </Heading>
                </TertiaryHeading>
                <AuthLink href="/auth/login" className={styles.lender_form__auth_link}>
                    Я уже являюсь пользователем
                </AuthLink>
                <div className={styles.lender_form__inputs}>
                    <div className={styles.lender_form__group}>
                        <CommonLabel htmlFor="name">
                            Имя
                        </CommonLabel>
                        <CommonInput id="name" value={name} onChange={setName}>
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="Иванов Иван Иванович" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.lender_form__group}>
                        <CommonLabel htmlFor="email">
                            E-mail
                        </CommonLabel>
                        <CommonInput id="email" value={email} onChange={setEmail}>
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="ivan@example.com" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.lender_form__group}>
                        <CommonLabel htmlFor="password">
                            Пароль
                        </CommonLabel>
                        <PasswordInput id="password" value={password} onChange={setPassword}>
                            <PasswordInput.Container>
                                <PasswordInput.Input placeholder="Пароль" />
                            </PasswordInput.Container>
                        </PasswordInput>
                    </div>
                </div>
                <div className={styles.lender_form__radio}>
                    <RadioButton
                        checked={selectedType === LENDER_TYPE.INDIVIDUAL}
                        onChange={() => setSelectedType(LENDER_TYPE.INDIVIDUAL)}
                    >
                        Физ. лицо
                    </RadioButton>
                    <RadioButton
                        checked={selectedType === LENDER_TYPE.ENTREPRENEUR}
                        onChange={() => setSelectedType(LENDER_TYPE.ENTREPRENEUR)}
                    >
                        ИП
                    </RadioButton>
                    <RadioButton
                        checked={selectedType === LENDER_TYPE.LEGAL_ENTITY}
                        onChange={() => setSelectedType(LENDER_TYPE.LEGAL_ENTITY)}
                    >
                        Юр. лицо
                    </RadioButton>
                </div>
                <div className={styles.lender_form__checkboxes}>
                    <Checkbox checked={infoAgreed} onChange={toggleInfo}>
                        Согласен на <ProjectLink
                        href="/page/soglasie-polzovatelia-na-informatsionnoe-vzaimodeistvie"
                        {...useTargetBlank()}
                        className={styles.lender_form__external}
                    >
                        информационное взаимодействие
                    </ProjectLink>
                    </Checkbox>
                    <Checkbox checked={rulesAccepted} onChange={toggleRules}>
                        Согласен с <ProjectLink href="/page/using-rules" {...useTargetBlank()} className={styles.lender_form__external}>
                        правилами пользования платформой
                    </ProjectLink>
                    </Checkbox>
                </div>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} wide arrow>
                    <Button type="submit" className={cn(
                        styles.lender_form__submit,
                        resultIf(isLoading, styles.lender_form__submit___loading)
                    )}>
                        { isLoading ? <Loader /> : <>
                            Зарегистрироваться
                            <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                        </> }
                    </Button>
                </PrimaryButton>
                <AuthLink href="/auth/login" className={styles.lender_form__auth_link_second}>
                    Я уже являюсь пользователем
                </AuthLink>
            </form>
        </CommonAuthBlock>
    );
}

export default LenderForm;
