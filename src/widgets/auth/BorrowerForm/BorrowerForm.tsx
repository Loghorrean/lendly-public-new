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
import {useSendPublicRequestMutation} from "@/src/entities/callback/hooks";
import {createDefaultPhone, Phone} from "@/src/entities/phone/models";
import {Money} from "@/src/shared/models/common";
import {useActionMessages} from "@/src/shared/action-messages/store";
import {useRouter} from "next/navigation";
import {ACTION_MESSAGE_TYPE} from "@/src/shared/action-messages/model/ActionMessage";
import InputPhone from "@/src/entities/phone/ui/InputPhone";
import InputMoney from "@/src/shared/ui/inputs/InputMoney";

const loanOptions = ["Квартира", "Коммерческое помещение", "Промышленный объект", "Земельный участок", "Дом", "Другое"];

const BorrowerForm = () => {
    const { addMessage } = useActionMessages();
    const router = useRouter();
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState<Phone>(createDefaultPhone());
    const [money, setMoney] = useState<Money>({ amount: 0, currencyCode: "RUB" });
    const [location, setLocation] = useState("");
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [infoAgreed, toggleInfo] = useToggle();
    const [rulesAccepted, toggleRules] = useToggle();
    const sendRequest = useSendPublicRequestMutation();
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        await sendRequest.mutateAsync({
            name,
            contact: email,
            comment: JSON.stringify({ company, phone, money, location, selected: selectedOption })
        }, {
            onSuccess: () => {
                addMessage(ACTION_MESSAGE_TYPE.SUCCESS, "Запрос отправлен");
                router.push("/auth/register");
            }
        });
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
                        <CommonInput id="inn" value={company} onChange={setCompany}>
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="Название компании или ИНН" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="email">
                            Электронная почта (логин)
                        </CommonLabel>
                        <CommonInput id="email" value={email} onChange={setEmail}>
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="ivan@example.com" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="contact">
                            Контактное лицо
                        </CommonLabel>
                        <CommonInput id="contact" value={name} onChange={setName}>
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="Иванов Иван Иванович" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="phone">
                            Телефон
                        </CommonLabel>
                        <InputPhone phone={phone} setPhone={setPhone} />
                    </div>
                    <div className={styles.borrower_form__group}>
                        <CommonLabel htmlFor="money">
                            Сумма займа
                        </CommonLabel>
                        <InputMoney money={money} onValueChanged={setMoney} placeholder="10 000 000 ₽" />
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
                        resultIf(sendRequest.isLoading, styles.borrower_form__submit___loading)
                    )}>
                        { sendRequest.isLoading ? <Loader /> : <>
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
