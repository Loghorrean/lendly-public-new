import {CallbackRequest} from "@/src/entities/callback/model";
import {createCallbackManager} from "@/src/entities/callback/api";
import {useMutation, UseMutationOptions} from "@tanstack/react-query";

const mutateFn = async (request: CallbackRequest) => {
    const manager = createCallbackManager();
    return manager.createPublic(request);
};

export const useSendPublicRequestMutation = (
    options?: Omit<UseMutationOptions<void, unknown, CallbackRequest>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["send-public-request"],
    });
}
