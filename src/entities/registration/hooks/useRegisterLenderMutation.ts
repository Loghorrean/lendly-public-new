import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {LenderRegistrationInput, RegisteredUser} from "@/src/entities/registration/model";
import {createRegistrationManager} from "@/src/entities/registration/api";

const mutateFn = async (input: LenderRegistrationInput & { captchaToken: string }) => {
    const { captchaToken, ...rest } = input;
    const manager = createRegistrationManager();
    return manager.registerLender(rest, captchaToken);
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
