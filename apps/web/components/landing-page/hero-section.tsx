import { AuthButton } from "../auth";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-12 py-32">
      <div className="w-full text-center mx-auto space-y-4">
        <h1 className="text-6xl font-semibold bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent text-center tracking-wide leading-2 w-[70%] mx-auto">
          Simplify Your Workflows with Custom Automations
        </h1>

        <p className="text-lg text-center font-semibold text-slate-400 w-[50%] mx-auto">
          Create powerful automated workflows that connect your favorite apps
          and services. Save time and boost productivity with custom triggers
          and actions.
        </p>
      </div>

      <AuthButton />

      <div className="bg-gray-900 rounded-md border-8 border-slate-800 shadow-lg h-[600px] w-[1200px]"></div>
    </div>
  );
}
