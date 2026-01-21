import { LoginForm } from "@/components/login-form";
import { LogoutForm } from "@/components/logout-form";
import { SignupForm } from "@/components/signup-form";
import { notFound } from "next/navigation";

export default async function AuthPage({
  params,
}: {
  params: { form: string };
}) {
  const { form } = await params;
  let content;
  switch (form) {
    case "login":
      content = <LoginForm />;
      break;
    case "register":
      content = <SignupForm />;
      break;
    case "logout":
      content = <LogoutForm />;
      break;
    default:
      notFound();
  }

  return (
    <div className="flex min-h-svh w-full h-screen justify-center">
      <div className="w-full md:max-w-[390px] md:py-5">{content}</div>
    </div>
  );
}
