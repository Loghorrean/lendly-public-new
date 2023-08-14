import styles from "./CallbackForm.module.scss";
import TertiaryHeading from "@/src/shared/ui/typography/Heading/decorators/TertiaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import GreenText from "@/src/shared/ui/typography/GreenText";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {Button} from "@/src/shared/ui/buttons";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {Checkbox} from "@/src/shared/ui/form";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import {useToggle} from "@/src/shared/utils";
import {SyntheticEvent, useState} from "react";
import {createDefaultPhone, Phone} from "@/src/entities/phone/models";
import {useActionMessages} from "@/src/shared/action-messages/store";
import {useSendPublicRequestMutation} from "@/src/entities/callback/hooks";
import {ACTION_MESSAGE_TYPE} from "@/src/shared/action-messages/model/ActionMessage";
import InputPhone from "@/src/entities/phone/ui/InputPhone";
import Loader from "@/src/shared/ui/loaders/Loader";
import {COUNTRY_CODE} from "@/src/entities/phone/models/CountryCode";

const CallbackForm = () => {
    const { addMessage } = useActionMessages();
    const [checked, toggle] = useToggle();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState<Phone>(createDefaultPhone());
    const [goal, setGoal] = useState("");
    const sendRequest = useSendPublicRequestMutation();
    const handleClick = async (event: SyntheticEvent) => {
        event.preventDefault();
        await sendRequest.mutateAsync({
            name,
            contact: `${phone.countryCode}${phone.number}`,
            comment: goal
        }, {
            onSuccess: () => {
                addMessage(ACTION_MESSAGE_TYPE.SUCCESS, "Запрос отправлен!");
                setGoal("");
                setName("");
                setPhone({ countryCode: COUNTRY_CODE.RU, number: "" });
            }
        });
    }
    return (
        <form className={styles.callback_form}>
            <TertiaryHeading>
                <Heading headingType={HEADING_TYPE.H3} className={styles.callback_form__heading}>
                    Заполните форму обратной связи или напишите нам на почту <GreenText>
                    <span>agent@lendly.ru</span>
                </GreenText>
                </Heading>
            </TertiaryHeading>
            <div className={styles.callback_form__input_container}>
                <CommonLabel htmlFor="name">
                    Имя
                </CommonLabel>
                <CommonInput id="name" value={name} onChange={setName}>
                    <CommonInput.Container>
                        <CommonInput.Input placeholder="Иванов Иван Иванович" />
                    </CommonInput.Container>
                </CommonInput>
            </div>
            <div className={styles.callback_form__input_container}>
                <CommonLabel htmlFor="phone">
                    Телефон
                </CommonLabel>
                <InputPhone phone={phone} setPhone={setPhone} />
            </div>
            <div className={styles.callback_form__input_container}>
                <CommonLabel htmlFor="target">
                    Цель
                </CommonLabel>
                <CommonInput id="target" value={goal} onChange={setGoal}>
                    <CommonInput.Container>
                        <CommonInput.Input asTextarea placeholder="Коротко о займе" />
                    </CommonInput.Container>
                </CommonInput>
            </div>
            <PrimaryButton arrow color={PRIMARY_BUTTON_COLOR.GREEN} wide>
                <Button type="submit" className={styles.callback_form__submit} onClick={handleClick}>
                    { sendRequest.isLoading ? <Loader /> : <>
                        Стать заемщиком
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                    </> }
                </Button>
            </PrimaryButton>
            <Checkbox checked={checked} onChange={toggle}>
                Согласен с <ExternalLink href="https://youtube.com" className={styles.callback_form__rules_link}>
                правилами пользования платформой
            </ExternalLink>
            </Checkbox>
        </form>
    );
}

export default CallbackForm;
