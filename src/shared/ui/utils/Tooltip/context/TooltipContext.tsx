import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext } from "react";
import { isValueEmpty } from "@/src/shared/utils";
import { TooltipDirection } from "@/src/shared/ui/utils/Tooltip/Tooltip";

export type TooltipContextType = {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    direction: TooltipDirection;
};

const TooltipContext = createContext<TooltipContextType | null>(null);

export const useTooltipContext = (): TooltipContextType => {
    const data = useContext(TooltipContext);
    if (isValueEmpty(data)) {
        throw new Error("Hook cannot be used outside TooltipContext");
    }
    return data;
};

function TooltipContextProvider(props: PropsWithChildren<TooltipContextType>) {
    const { children, ...value } = props;
    return <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>;
}

export default TooltipContextProvider;
