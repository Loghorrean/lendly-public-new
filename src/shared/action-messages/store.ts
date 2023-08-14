import { atom } from "jotai/index";
import { ActionMessage, ActionMessageType } from "@/src/shared/action-messages/model/ActionMessage";
import { useAtom } from "jotai";
import { useCallback } from "react";

const actionMessagesAtom = atom<Array<ActionMessage>>([]);

export const useActionMessages = () => {
    const [messages, setMessages] = useAtom(actionMessagesAtom);
    const removeMessage = useCallback((id: number) => {
        setMessages(messages => messages.filter(error => error.id !== id));
        clearTimeout(id);
    }, []);
    const addMessage = useCallback((type: ActionMessageType, text: string) => {
        if (typeof window !== undefined) {
            let timeoutId = 0;
            timeoutId = window.setTimeout(() => {
                removeMessage(timeoutId);
            }, 7000);
            setMessages(messages => [...messages, { id: timeoutId, type, description: text }]);
        }
    }, []);
    return {
        getMessages() {
            return messages;
        },
        removeMessage,
        addMessage,
        addMessagesBulk(type: ActionMessageType, texts: Array<string>) {
            if (typeof window !== undefined) {
                texts.forEach(text => addMessage(type, text));
            }
        },
    };
};
