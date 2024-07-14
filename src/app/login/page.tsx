import { redirect } from "next/navigation";
import SignInPage from "@/src/app/login/signin";
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";

export default async function LoginPage() {
    const isAuthenticated = await checkIsAuthenticated();

    if (isAuthenticated) {
        redirect("/invoices");
    } else {
        return <SignInPage />
    }
}