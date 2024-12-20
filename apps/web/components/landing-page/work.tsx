import { workflow } from "@/utlis/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Separator } from "../separator";

export function Workflow() {
  return (
    <div className="py-16 space-y-12 flex flex-col items-center">
      <div className="space-y-2">
        <h3 className="text-4xl font-bold title">How it Works</h3>

        <p className="text-center text-lg font-medium text-zinc-400">
          Create your first automation in minutes
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 px-4 md:px-6">
        {workflow.map((item, idx) => (
          <Card
            className="bg-bgCard border-stone-700 hover:border-stone-400"
            key={idx}
          >
            <CardHeader className="space-y-2">
              <h3 className="text-3xl text-zinc-400 font-semibold">
                0{idx + 1}
              </h3>
              <CardTitle className="text-zinc-400 font-semibold text-lg">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-zinc-400">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />
    </div>
  );
}
