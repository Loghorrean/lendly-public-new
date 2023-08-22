import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {createResetPasswordManager} from "@/src/entities/reset-password/api";

type ConfirmNewPasswordInput = {
    code: string;
    password: string;
}

const mutateFn = async (input: ConfirmNewPasswordInput) => {
    const manager = createResetPasswordManager();
    return manager.confirm(input.code, input.password);
};

export const useConfirmNewPassword = (
    options?: Omit<UseMutationOptions<void, unknown, ConfirmNewPasswordInput>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["confirm-new-password"],
    });
}
