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

const loanOptions = ["Квартира", "Дом", "Подъезд"];

const BorrowerForm = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    }
    return (
        <CommonAuthBlock>
            <form onSubmit={handleSubmit} className={styles.borrower_form}>
                <TertiaryHeading>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.borrower_form__heading}>
                        Регистрация заёмщика
                    </Heading>
                </TertiaryHeading>
                <AuthLink href="/auth/login">
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
                            Сумма займа
                        </CommonLabel>
                        <OptionBox options={loanOptions} selectedOption={selectedOption}>
                            <OptionBox.Head placeholder="Местонахождение объекта" />
                            <OptionBox.Content onSelected={setSelectedOption} />
                        </OptionBox>
                    </div>
                </div>
            </form>
        </CommonAuthBlock>
    );
}

export default BorrowerForm;
