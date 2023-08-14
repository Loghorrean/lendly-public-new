import styles from "./ActionMessageContainer.module.scss";
import { useMemo } from "react";
import ActionMessageElement from "../ActionMessageElement";
import { TransitionGroup } from "react-transition-group";
import { useActionMessages } from "@/src/shared/action-messages/store";

const ActionMessageContainer = () => {
    const { getMessages } = useActionMessages();
    const renderErrors = useMemo(() => {
        return getMessages().map(message => {
            return <ActionMessageElement key={message.id} message={message} />;
        });
    }, [getMessages()]);
    return (
        <div className={styles.action_message_container}>
            <ul className={styles.action_message_container__list}>
                <TransitionGroup component={null}>{renderErrors}</TransitionGroup>
            </ul>
        </div>
    );
};

export default ActionMessageContainer;
