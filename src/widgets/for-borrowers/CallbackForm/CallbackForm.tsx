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

const CallbackForm = () => {
    const [checked, toggle] = useToggle();
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
                <CommonInput id="name">
                    <CommonInput.Container>
                        <CommonInput.Input placeholder="Иванов Иван Иванович" />
                    </CommonInput.Container>
                </CommonInput>
            </div>
            <div className={styles.callback_form__input_container}>
                <CommonLabel htmlFor="phone">
                    Телефон
                </CommonLabel>
                <CommonInput id="phone">
                    <CommonInput.Container>
                        <CommonInput.Input placeholder="+7 (900)-000-00-00" />
                    </CommonInput.Container>
                </CommonInput>
            </div>
            <div className={styles.callback_form__input_container}>
                <CommonLabel htmlFor="target">
                    Цель
                </CommonLabel>
                <CommonInput id="target">
                    <CommonInput.Container>
                        <CommonInput.Input asTextarea placeholder="Коротко о займе" />
                    </CommonInput.Container>
                </CommonInput>
            </div>
            <PrimaryButton arrow color={PRIMARY_BUTTON_COLOR.GREEN} wide>
                <Button type="submit" className={styles.callback_form__submit}>
                    Стать заемщиком
                    <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
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
