"use client";

import CommonAuthBlock from "@/src/widgets/auth/CommonAuthBlock";
import styles from "./ForgotPasswordBlock.module.scss";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import {useState} from "react";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {Button} from "@/src/shared/ui/buttons";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {useRequestPasswordLink} from "@/src/entities/reset-password/hooks";
import {useActionMessages} from "@/src/shared/action-messages/store";
import {ACTION_MESSAGE_TYPE} from "@/src/shared/action-messages/model/ActionMessage";
import Loader from "@/src/shared/ui/loaders/Loader";
import ResetPasswordLinkSentBlock from "@/src/entities/reset-password/ui/ResetPasswordLinkSentBlock";
import {isNotEmpty, useEffectOnUpdate} from "@/src/shared/utils";

const ForgotPasswordBlock = () => {
    const { addMessage } = useActionMessages();
    const [email, setEmail] = useState("");
    const [requestSent, setRequestSent] = useState(false);
    const sendRequest = useRequestPasswordLink();
    const handleClick = async () => {
        if (email.trim() !== "") {
            await sendRequest.mutateAsync({
                email
            }, {
                onSuccess: () => {
                    setRequestSent(true);
                    addMessage(ACTION_MESSAGE_TYPE.SUCCESS, "Запрос отправлен!");
                }
            });
        }
    }
    useEffectOnUpdate(() => {
        if (sendRequest.isError) {
            addMessage(ACTION_MESSAGE_TYPE.ERROR, "Произошла ошибка");
        }
    }, [sendRequest.isError]);
    return (
        <>
            { requestSent ? <ResetPasswordLinkSentBlock /> : <CommonAuthBlock className={styles.forgot_password_block}>
                <div className={styles.forgot_password_block__content}>
                    <Heading headingType={HEADING_TYPE.H1} className={styles.forgot_password_block__heading}>
                        Забыли пароль?
                    </Heading>
                    <p className={styles.forgot_password_block__text}>
                        Введите e-mail который вы указывали при регистрации. Мы отправим вам ссылку для восстановления
                    </p>
                </div>
                <div className={styles.forgot_password_block__inputs}>
                    <div className={styles.forgot_password_block__input_block}>
                        <CommonLabel>
                            E-mail
                        </CommonLabel>
                        <CommonInput id="email" value={email} onChange={setEmail}>
                            <CommonInput.Container>
                                <CommonInput.Input placeholder="ivan@example.com" />
                            </CommonInput.Container>
                        </CommonInput>
                    </div>
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow>
                        <Button onClick={handleClick}>
                            { sendRequest.isLoading ? <Loader /> : "Отправить" }
                            <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                        </Button>
                    </PrimaryButton>
                </div>
            </CommonAuthBlock> }
        </>
    );
}

export default ForgotPasswordBlock;
