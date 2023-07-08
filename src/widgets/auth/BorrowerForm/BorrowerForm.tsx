"use client";

import {SyntheticEvent, useState} from "react";
import styles from "./BorrowerForm.module.scss";
import CommonAuthBlock from "@/src/widgets/auth/CommonAuthBlock";
import TertiaryHeading from "@/src/shared/ui/typography/Heading/decorators/TertiaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import AuthLink from "@/src/widgets/auth/AuthLink";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import {OptionBox} from "@/src/shared/ui/select";
import PasswordInput from "@/src/shared/ui/inputs/PasswordInput";
import {Checkbox} from "@/src/shared/ui/form";
import {cn, resultIf, sleep, useToggle} from "@/src/shared/utils";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {Button} from "@/src/shared/ui/buttons";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import Loader from "@/src/shared/ui/loaders/Loader";

const loanOptions = ["Квартира", "Коммерческое помещение", "Промышленный объект", "Земельный участок", "Дом", "Другое"];

const BorrowerForm = () => {
    const [loading, setLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [infoAgreed, toggleInfo] = useToggle();
    const [rulesAccepted, toggleRules] = useToggle();
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        setLoading(true);
        await sleep(3000);
        setLoading(false);
    }
    return (
        <CommonAuthBlock className={styles.borrower_form_block}>
            <form onSubmit={handleSubmit} className={styles.borrower_form}>
                <TertiaryHeading>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.borrower_form__heading}>
                        Регистрация заёмщика
                    </Heading>
                </TertiaryHeading>
                <AuthLink href="/auth/login" className={styles.borrower_form__auth_link}>
                    Я уже являюсь пользователем
                </AuthLink>
                <div className={styles.borrower_form__inputs}>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="inn">
                            Наименование (ИНН)
                        </CommonLabel>
                        <CommonInput id="inn">
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="Название компании или ИНН" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="email">
                            Электронная почта (логин)
                        </CommonLabel>
                        <CommonInput id="email">
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="ivan@example.com" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="contact">
                            Контактное лицо
                        </CommonLabel>
                        <CommonInput id="contact">
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="Иванов Иван Иванович" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="phone">
                            Телефон
                        </CommonLabel>
                        <CommonInput id="phone">
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="+7 (000) 000-00-00" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="money">
                            Сумма займа
                        </CommonLabel>
                        <CommonInput id="money">
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="10 000 000 ₽" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="type">
                            Вид залога
                        </CommonLabel>
                        <OptionBox options={loanOptions} selectedOption={selectedOption} id="type">
                            <OptionBox.Head placeholder="Местонахождение объекта" />
                            <OptionBox.Content onSelected={setSelectedOption} />
                        </OptionBox>
                    </div>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="place">
                            Местонахождение объекта
                        </CommonLabel>
                        <CommonInput id="place">
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="Местонахождение объекта" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.borrower_form__group}>
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
                <div className={styles.borrower_form__checkboxes}>
                    <Checkbox checked={infoAgreed} onChange={toggleInfo}>
                        Согласен на <ExternalLink href="https://youtube.com" className={styles.borrower_form__external}>
                            информационное взаимодействие
                        </ExternalLink>
                    </Checkbox>
                    <Checkbox checked={rulesAccepted} onChange={toggleRules}>
                        Согласен с <ExternalLink href="https://youtube.com" className={styles.borrower_form__external}>
                        правилами пользования платформой
                    </ExternalLink>
                    </Checkbox>
                </div>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} wide arrow>
                    <Button type="submit" className={cn(
                        styles.borrower_form__submit,
                        resultIf(loading, styles.borrower_form__submit___loading)
                    )}>
                        { loading ? <Loader /> : <>
                            Регистрация
                            <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                        </> }
                    </Button>
                </PrimaryButton>
                <AuthLink href="/auth/login" className={styles.borrower_form__auth_link_second}>
                    Я уже являюсь пользователем
                </AuthLink>
            </form>
        </CommonAuthBlock>
    );
}

export default BorrowerForm;
