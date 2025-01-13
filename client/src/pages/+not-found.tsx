import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-svh flex w-full flex-col items-center justify-center gap-3">
      <div className="md:h-22 md:w-22 absolute left-2 top-2 h-32 w-32">
        <img
          src="https://cdn.prod.website-files.com/6003cddbd7fb71cb58f75e43/6003d75f4362233400ba87f8_MMIS%20Logo%20(Full).svg"
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex gap-3 md:gap-7">
          <div className="bg-primary p flex aspect-square items-center rounded-full p-[5px] md:p-6">
            <h1 className="text-background text-[10px] font-medium md:text-sm">
              ┐(￣ヘ￣;)┌
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold md:text-9xl">404</h1>
          </div>
        </div>
        <h2 className="text-foreground text-3xl font-medium md:text-5xl">
          PAGE NOT FOUND
        </h2>
      </div>
      <Link to={"/home"}>
        <Button variant={"outline"}>
          <House />
          Home
        </Button>
      </Link>
    </div>
  );
}
