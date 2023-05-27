import { validationConfig } from "@/src/shared/configs";

type PasswordDifficultyErrors = {
    notEnoughSymbols?: boolean;
    noNumbers?: boolean;
    noLatinLetters?: boolean;
};

export const validatePasswordDifficulty = (password: string): PasswordDifficultyErrors => {
    const newErrors: PasswordDifficultyErrors = {};
    if (password.length < validationConfig.minimumPasswordLength) {
        newErrors.notEnoughSymbols = true;
    }
    if (!/\d/.test(password)) {
        newErrors.noNumbers = true;
    }
    if (!/[a-z]/.test(password)) {
        newErrors.noLatinLetters = true;
    }
    return newErrors;
};
