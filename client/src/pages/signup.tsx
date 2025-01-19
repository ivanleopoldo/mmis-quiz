import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  return (
    <div className="min-h-svh grid lg:grid-cols-2">
      <div className="flex flex-col gap-4 bg-[url('/login-bg.svg')] bg-cover bg-center bg-no-repeat p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <div className="flex h-6 w-28 items-center justify-center rounded-md">
            <img
              src="https://cdn.prod.website-files.com/6003cddbd7fb71cb58f75e43/6003d75f4362233400ba87f8_MMIS%20Logo%20(Full).svg"
              alt="Image"
              className="pointer-events-none"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Register</h1>
                <p className="text-balance text-sm text-muted-foreground">
                  Create an account in BrightMind
                </p>{" "}
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/login-left.jpg"
          alt="Image"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
