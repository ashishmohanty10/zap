import { AuthButton } from "../auth";
import { Separator } from "../separator";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-12 py-32 ">
      <div className="w-full text-center mx-auto space-y-4">
        <h1 className="text-6xl font-semibold title tracking-wide leading-2 w-[70%] mx-auto">
          Simplify Your Workflows with Custom Automations
        </h1>

        <p className="text-lg text-center font-semibold text-stone-500 w-[50%] mx-auto">
          Create powerful automated workflows that connect your favorite apps
          and services. Save time and boost productivity with custom triggers
          and actions.
        </p>
      </div>

      <AuthButton />

      <div className="bg-stone-900 rounded-md border-8 border-stone-600 shadow-lg h-[600px] w-[1200px]"></div>

      <Separator />
    </div>
  );
}
