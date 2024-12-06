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

        <p className="text-center text-lg font-medium text-stone-500">
          Create your first automation in minutes
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {workflow.map((item, idx) => (
          <Card className="bg-bgCard border-slate-700 hover:border-slate-400">
            <CardHeader className="space-y-2">
              <h3 className="text-3xl text-slate-200 font-semibold">
                0{idx + 1}
              </h3>
              <CardTitle className="text-slate-100 font-semibold text-lg">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />
    </div>
  );
}
