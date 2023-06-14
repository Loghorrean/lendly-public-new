"use client";

import CommonAuthBlock from "@/src/widgets/auth/CommonAuthBlock";
import LoginForm from "@/src/widgets/auth/LoginForm";

export default function Login() {
    return (
        <CommonAuthBlock>
            <LoginForm />
        </CommonAuthBlock>
    );
}
