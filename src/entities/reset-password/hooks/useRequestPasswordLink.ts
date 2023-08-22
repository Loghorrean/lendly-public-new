import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {createResetPasswordManager} from "@/src/entities/reset-password/api";

type RequestPasswordLinkInput = {
    email: string;
}

const mutateFn = async (input: RequestPasswordLinkInput) => {
    const manager = createResetPasswordManager();
    return manager.requestLink(input.email);
};

export const useRequestPasswordLink = (
    options?: Omit<UseMutationOptions<void, unknown, RequestPasswordLinkInput>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["request-password-link"],
    });
}
