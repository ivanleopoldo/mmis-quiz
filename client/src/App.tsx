import { LoginForm } from "@/components/login-form";

export default function App() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
}