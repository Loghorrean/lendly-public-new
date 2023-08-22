import ChangePasswordBlock from "@/src/widgets/auth/ChangePasswordBlock";

export default function ChangePasswordPage({ params }: { params: { code: string } }) {
    return <ChangePasswordBlock code={params.code}/>;
}