import {CallbackRequest} from "@/src/entities/callback/model";
import {createCallbackManager} from "@/src/entities/callback/api";
import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {LenderRegistrationInput, RegisteredUser} from "@/src/entities/registration/model";
import {createRegistrationManager} from "@/src/entities/registration/api";

const mutateFn = async (input: LenderRegistrationInput) => {
    const manager = createRegistrationManager();
    return manager.registerLender(input);
};

export const useRegisterLenderMutation = (
    options?: Omit<UseMutationOptions<RegisteredUser, unknown, LenderRegistrationInput>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["register-lender"],
    });
}
