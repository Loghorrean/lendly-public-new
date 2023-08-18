import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {createAuthManager} from "@/src/entities/auth/api";
import {Token} from "@/src/entities/auth/model";

type CreateAutoLoginTokenRequest = {
    username: string;
    password: string;
}

const mutateFn = async (request: CreateAutoLoginTokenRequest) => {
    const manager = createAuthManager();
    return manager.createAutoLoginToken(request.username, request.password);
};

export const useCreateAutologinToken = (
    options?: Omit<UseMutationOptions<Token, unknown, CreateAutoLoginTokenRequest>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["create-autologin-token"],
    });
}
