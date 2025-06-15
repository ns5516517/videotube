import { LoginForm } from "@/components/login-form"
  
export default function LoginPage() {
  return (
    <div
      className=" flex min-h-[calc(100dvh-64px)] flex-col  items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-5xl h-full">
        <LoginForm className={'h-full'} />
      </div>
    </div>
  );
}
