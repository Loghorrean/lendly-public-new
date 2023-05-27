import React, { Children, FC, isValidElement, PropsWithChildren } from "react";

interface Listener {
    [key: string]: (this: Window, ev: Event) => any;
}

interface Props {
    listeners: Array<Listener>;
}

const EventListenerInjector: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
    if (Children.count(children) > 1) {
        throw new Error("More than one child is passed to event listener injector");
    }
    const listeners = props.listeners.reduce((prev: any, next: any) => {
        return Object.assign(prev, next);
    }, {});
    const EnhancedChildren = () => {
        return Children.map(children, child => {
            if (isValidElement(child)) {
                return React.cloneElement(child, listeners);
            }
        });
    };

    //@ts-ignore
    return <EnhancedChildren />;
};

export default EventListenerInjector;
