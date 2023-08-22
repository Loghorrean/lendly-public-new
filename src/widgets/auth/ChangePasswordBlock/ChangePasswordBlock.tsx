"use client";

import CommonAuthBlock from "@/src/widgets/auth/CommonAuthBlock";
import styles from "./ChangePasswordBlock.module.scss";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {SyntheticEvent, useState} from "react";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import PasswordInput from "@/src/shared/ui/inputs/PasswordInput";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import {Button} from "@/src/shared/ui/buttons";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {useConfirmNewPassword} from "@/src/entities/reset-password/hooks";
import {useRouter} from "next/navigation";
import {useActionMessages} from "@/src/shared/action-messages/store";
import {ACTION_MESSAGE_TYPE} from "@/src/shared/action-messages/model/ActionMessage";
import {useEffectOnUpdate} from "@/src/shared/utils";
import Loader from "@/src/shared/ui/loaders/Loader";

type Props = {
    code: string;
}

const ChangePasswordBlock = ({ code }: Props) => {
    const { addMessage } = useActionMessages();
    const router = useRouter();
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const confirmNewPassword = useConfirmNewPassword();
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        if (newPassword.trim() === "" || repeatPassword.trim() === "") {
            addMessage(ACTION_MESSAGE_TYPE.ERROR, "Пароли не введены");
            return;
        }
        if (newPassword !== repeatPassword) {
            addMessage(ACTION_MESSAGE_TYPE.ERROR, "Пароли не совпадают");
            return;
        }
        if (newPassword.length < 8) {
            addMessage(ACTION_MESSAGE_TYPE.ERROR, "Минимальная длина пароля - 8 символов");
            return;
        }
        await confirmNewPassword.mutateAsync({
            password: newPassword,
            code
        }, {
            onSuccess: () => {
                addMessage(ACTION_MESSAGE_TYPE.SUCCESS, "Пароль успешно изменен");
                router.push("/auth/login");
            }
        });
    }
    useEffectOnUpdate(() => {
        if (confirmNewPassword.isError) {
            addMessage(ACTION_MESSAGE_TYPE.ERROR, "Ошибка при изменении пароля!");
        }
    }, [confirmNewPassword.isError]);
    return (
        <CommonAuthBlock className={styles.change_password_block}>
            <Heading headingType={HEADING_TYPE.H1} className={styles.change_password_block__heading}>
                Придумайте новый пароль
            </Heading>
            <form onSubmit={handleSubmit} className={styles.change_password_block__form}>
                <div className={styles.change_password_block__inputs}>
                    <div className={styles.change_password_block__input_block}>
                        <CommonLabel>
                            Пароль (не менее 8 символов)
                        </CommonLabel>
                        <PasswordInput id="new-password" value={newPassword} onChange={setNewPassword}>
                            <PasswordInput.Container>
                                <PasswordInput.Input />
                            </PasswordInput.Container>
                        </PasswordInput>
                    </div>
                    <div className={styles.change_password_block__input_block}>
                        <CommonLabel>
                            Повторите пароль
                        </CommonLabel>
                        <PasswordInput id="repeat-password" value={repeatPassword} onChange={setRepeatPassword}>
                            <PasswordInput.Container>
                                <PasswordInput.Input />
                            </PasswordInput.Container>
                        </PasswordInput>
                    </div>
                </div>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow>
                    <Button type="submit">
                        {confirmNewPassword.isLoading ? <Loader /> : "Отправить"}
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                    </Button>
                </PrimaryButton>
            </form>
        </CommonAuthBlock>
    );
}

export default ChangePasswordBlock;
